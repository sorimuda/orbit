// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../../common/common";

export type Type = "neutral" | "info" | "success" | "warning" | "critical";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly type?: Type;
  readonly strikeThrough?: boolean;
  readonly icon: React.ReactNode;
}

declare const BadgeListItem: React.FunctionComponent<Props>;

export { BadgeListItem, BadgeListItem as default };
