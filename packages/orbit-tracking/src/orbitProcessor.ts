import path from "path";

import { getCategory } from "./helpers";
import {
  Instance,
  Component,
  ComponentInstance,
  Prop,
  PropValue,
  OutputComponentInfo,
} from "./interfaces";

export interface OutputInstance {
  instances: number;
  sources: string[];
  category: string;
  icon: boolean;
  props: Prop;
  isDeprecated: boolean;
}

export type Result = Record<string, OutputInstance>;

const isIcon = (instance: Instance): boolean => instance.importInfo.moduleName.includes("/icons");

// TODO: refactor a bit, performance matters, but we can use something like .set, .get, .has analogues from lodash
export default ({ forEachComponent, deprecated, sortObjectKeysByValue, output }) => {
  let result: Result = {};

  forEachComponent(
    ({ componentName: name, component }: { componentName: string; component: Component }) => {
      const { instances } = component;

      if (!instances) return;

      const { REPO_URL = "", OUTPUT_DIR = "" } = process.env;

      result[name] = {
        instances: instances.length,
        sources: instances.map(instance =>
          path.join(
            REPO_URL.replace(/\.git$/, ""),
            "-/blob/master",
            `${path.relative(OUTPUT_DIR, instance.location.file)}#L${instance.location.start.line}`,
          ),
        ),
        // @ts-expect-error TODO
        props: {},
        category: getCategory(name),
        isDeprecated: false,
        icon: false,
      };

      for (const instance of instances) {
        const { imported } = instance.importInfo;

        if (deprecated.includes(imported)) {
          result[name].isDeprecated = true;
        }

        if (isIcon(instance)) {
          result[name].icon = true;
          result[name].category = "icons";
        }

        for (const prop in instance.props) {
          const propValue = instance.props[prop];

          if (result[name].props[prop] === undefined) {
            result[name].props[prop] = {
              used: 0,
              values: {},
            };
          }

          if (result[name].props[prop].used === undefined) {
            result[name].props[prop].used = 0;
          } else {
            result[name].props[prop].used += 1;
          }

          if (result[name].props[prop].values[propValue] === undefined) {
            result[name].props[prop].values[propValue] = {
              value: propValue,
              used: 1,
            };
          } else {
            result[name].props[prop].values[propValue].used += 1;
          }

          result[name].props = sortObjectKeysByValue(
            result[name].props,
            (property: Prop) => property.used,
          );

          result[name].props[prop].values = sortObjectKeysByValue(
            result[name].props[prop].values,
            (value: PropValue) => value.used,
          );
        }
      }
    },
  );

  result = sortObjectKeysByValue(result, (component: ComponentInstance) => component.instances);

  const outputData: OutputComponentInfo[] = [];

  for (const [name, value] of Object.entries(result)) {
    const properties: Prop[] = [];

    for (const [key, used] of Object.entries(value.props)) {
      const values: PropValue[] = [];

      for (const [propName, propValue] of Object.entries(used.values)) {
        // @ts-expect-error TODO
        values.push({ name: propName, used: propValue.used });
      }

      properties.push({
        name: key,
        ...used,
        values,
      });
    }

    outputData.push({ name, ...value, props: properties });
  }

  output(JSON.stringify(outputData));

  return outputData;
};
