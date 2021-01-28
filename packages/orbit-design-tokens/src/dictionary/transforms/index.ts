import type { StyleDictionary } from "style-dictionary";

import attributes from "./attributes";
import names from "./names";
import values from "./values";

const transforms = {
  attributes,
  names,
  values,
};

const registerTransforms = (Dictionary: StyleDictionary): void => {
  Object.values(transforms).forEach(type => {
    Object.values(type).forEach(transform => {
      Dictionary.registerTransform(transform);
    });
  });
};

export default registerTransforms;