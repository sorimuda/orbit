// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

export type Translations = {
  [key: string]: string;
};

export interface Props {
  readonly values: Translations;
  readonly children: React.ReactNode;
}

declare const Dictionary: React.FunctionComponent<Props>;
export { Dictionary, Dictionary as default };
