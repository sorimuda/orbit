// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Spacing } from "../Stack";
import * as Common from "../common/common";

/** DOCS:
  To implement HorizontalScroll component into your project you'll need to add the import:

  ```jsx
  import HorizontalScroll from "@kiwicom/orbit-components/lib/HorizontalScroll";
  ```

  After adding import into your project you can use it simply like:

  ```jsx
  <HorizontalScroll>
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    ...etc
  </HorizontalScroll>
  ```
*/

export interface Props extends Common.Global {
  /** set minimal height */
  readonly minHeight?: number;
  /** prop for testing purposes */
  readonly dataTest?: string;
  /** The spacing between children elements */
  /** default: "small" */
  readonly spacing?: Spacing;
  /** content of HorizontalScroll */
  readonly children: React.ReactNode;
}

declare const HorizontalScroll: React.FunctionComponent<Props>;
export { HorizontalScroll, HorizontalScroll as default };