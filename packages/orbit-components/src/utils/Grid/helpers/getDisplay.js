// @flow
import { css } from "styled-components";

import { isDefined } from "../../layout";
import type { GetDisplay } from "./getDisplay";

const getDisplay: GetDisplay = (inline, force) =>
  css`
    display: ${(isDefined(inline) || force) && (inline ? "inline-grid" : "grid")};
  `;

export default getDisplay;
