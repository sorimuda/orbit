// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export type Type = "buttonLoader" | "boxLoader" | "searchLoader" | "pageLoader" | "inlineLoader";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly loading?: boolean;
  readonly type?: Type;
  readonly customSize?: number;
  readonly text?: Common.Translation;
}

declare const Loading: React.FunctionComponent<Props>;
export { Loading, Loading as default };
