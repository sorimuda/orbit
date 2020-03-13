// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/StopoverArrow";

export { StopoverArrow, StopoverArrow as default };

declare namespace StopoverArrow {
  type Stops = "0" | "1" | "2" | "3";

  interface Props extends Common.Global {
    readonly stops: Stops;
  }
}

declare class StopoverArrow extends React.Component<StopoverArrow.Props> {}
