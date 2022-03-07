import { transform as babelTransform } from "@babel/standalone";
import _ from "lodash";
import type { BabelFileResult } from "@babel/core";

/* eslint-disable no-param-reassign */

export const transform = (
  exampleName: string,
  example: string,
  knobs: Record<string, Record<string, string | number | boolean>>,
) => {
  const result: BabelFileResult = babelTransform(example, {
    filename: exampleName,
    sourceType: "module",
    presets: ["typescript", "react"],
    plugins: [
      ({ types: t }) => {
        const getAttribute = (value: string | number | boolean, name: string) => {
          const stringified = value.toString();

          if (stringified === "true") return t.jsxAttribute(t.jsxIdentifier(name), null);
          if (stringified === "false")
            return t.jsxAttribute(
              t.jsxIdentifier(name),
              t.jsxExpressionContainer(t.booleanLiteral(false)),
            );

          if (typeof value === "number") {
            return t.jsxAttribute(
              t.jsxIdentifier(name),
              t.jsxExpressionContainer(t.numericLiteral(value)),
            );
          }

          return t.jsxAttribute(t.jsxIdentifier(name), t.stringLiteral(stringified));
        };

        const createAttributeFromKnob = (knob: Record<string, string | number | boolean>) =>
          Object.entries(knob)
            .map(([name, val]) => {
              const value = val !== null ? val.toString() : "";

              if (value === "") return null;

              if (value.includes("-icon")) {
                const iconName = `Icons.${value.split("-icon")[0]}`;
                return t.jsxAttribute(
                  t.jsxIdentifier(name),
                  t.jsxExpressionContainer(
                    t.jsxElement(
                      t.jsxOpeningElement(t.jsxIdentifier(iconName), [], true),
                      null,
                      [],
                      true,
                    ),
                  ),
                );
              }

              return getAttribute(val, name);
            })
            .filter(Boolean);

        return {
          visitor: {
            JSXOpeningElement: path => {
              const namePath = path.node.name;
              const attributes = path.node.attributes.filter(a => t.isJSXAttribute(a));

              Object.entries(knobs).forEach(([id, knobsObj]) => {
                if (t.isJSXIdentifier(namePath)) {
                  if (namePath.name.toLowerCase() === id.toLowerCase()) {
                    const createdAttribute = createAttributeFromKnob(knobsObj);
                    const [knobName] = Object.keys(knobsObj);
                    const idx = _.findIndex(attributes, ({ name }) => name.name === knobName);
                    if (idx === -1) attributes.push(...createdAttribute);
                    else attributes.splice(idx, 1, ...createdAttribute);
                  }
                }
              });

              path.node.attributes = attributes;
            },
          },
        };
      },
    ],
  });

  return result.code || "";
};
