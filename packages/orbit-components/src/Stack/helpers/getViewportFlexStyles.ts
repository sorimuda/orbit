import { css, FlattenInterpolation, ThemedStyledProps } from "styled-components";

import {
  getJustify,
  getAlign,
  getDirection,
  getWrap,
  getGrow,
  getShrink,
} from "../../utils/layout";
import getWidth from "./getWidth";
import getDisplay from "./getDisplay";
import getBasis from "./getBasis";
import getSpacingToken from "../../common/getSpacingToken";
import { Devices } from "../../utils/mediaQuery/types";
import { Props } from "../types";
import { Theme } from "../../defaultTheme";

interface StyledProps extends Props {
  theme: Theme;
}

const getViewportFlexStyles = (viewport: Devices) => (
  props: StyledProps,
): FlattenInterpolation<ThemedStyledProps<Theme, any>> => {
  const { flex, theme } = props;
  const { inline, direction, wrap, grow, shrink, basis, justify, align, spaceAfter } = props[
    viewport
  ];

  const flexStyles =
    flex &&
    css`
      display: ${getDisplay(inline)};
      flex-direction: ${getDirection(direction)};
      flex-wrap: ${getWrap(wrap)};
      flex-grow: ${getGrow(grow)};
      flex-shrink: ${getShrink(shrink)};
      flex-basis: ${getBasis(basis)({ theme })};
      justify-content: ${getJustify(justify)};
      align-content: ${getAlign(align)};
      align-items: ${getAlign(align)};
    `;

  return css`
    ${flexStyles};
    width: ${getWidth(inline)};
    margin-bottom: ${getSpacingToken({ spaceAfter, theme })};
  `;
};

export default getViewportFlexStyles;
