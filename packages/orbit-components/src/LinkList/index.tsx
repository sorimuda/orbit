import * as React from "react";
import styled, { css } from "styled-components";

import { left, rtlSpacing } from "../utils/rtl";
import mq from "../utils/mediaQuery";
import { StyledTextLink } from "../TextLink";
import defaultTheme from "../defaultTheme";
import { SPACINGS } from "../utils/layout/consts";
import getSpacing from "../Stack/helpers/getSpacing";
import getDirectionSpacingTemplate from "../Stack/helpers/getDirectionSpacingTemplate";
<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.tsx
import { Props } from "./types";
import { Spacing } from "../Stack/types";
=======
import { Props } from "./index.d";
import { Spacing } from "../Stack";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.jsx

const StyledLinkList = styled.ul<{ $direction?: "column" | "row"; $indent?: boolean }>`
  ${({ $direction, $indent, theme }) => css`
    display: flex;
    flex-direction: ${$direction};
    width: 100%;
    margin: 0;
    padding: 0;
    padding-${left}: ${$indent && theme.orbit.spaceXXSmall};
    list-style: none;
    font-size: ${theme.orbit.fontSizeTextNormal};
  `};
`;

StyledLinkList.defaultProps = {
  theme: defaultTheme,
};

const resolveSpacings = ({
  $spacing,
  $direction,
<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.tsx
  theme,
}: {
  $spacing?: Spacing;
  theme: typeof defaultTheme;
=======
  ...props
}: {
  $spacing?: Spacing;
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.jsx
  $direction?: "column" | "row";
}) => {
  const margin =
    $spacing &&
    $direction &&
    String(getDirectionSpacingTemplate($direction)).replace(
      "__spacing__",
<<<<<<< HEAD:packages/orbit-components/src/LinkList/index.tsx
      getSpacing(theme)[$spacing],
=======
      getSpacing(props)[$spacing],
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/LinkList/index.jsx
    );

  return css`
    margin: ${margin && rtlSpacing(margin)};
    &:last-child {
      margin: 0;
    }
  `;
};

const StyledNavigationLinkListChild = styled.li<{
  $direction?: "column" | "row";
  $indent?: boolean;
  $spacing: Spacing;
}>`
  ${StyledTextLink} {
    text-decoration: none;
  }

  ${resolveSpacings};

  ${({ $direction }) =>
    $direction === "column" &&
    css`
      width: 100%;
      ${StyledTextLink} {
        width: 100%;
        ${mq.tablet(
          css`
            width: auto;
          `,
        )};
      }
    `};
`;

StyledNavigationLinkListChild.defaultProps = {
  theme: defaultTheme,
};

const LinkList = ({
  direction = "column",
  indent,
  spacing = SPACINGS.MEDIUM,
  children,
  id,
  dataTest,
}: Props) => (
  <StyledLinkList $indent={indent} $direction={direction} data-test={dataTest} id={id}>
    {React.Children.map(children, item => {
      if (React.isValidElement(item)) {
        return (
          <StyledNavigationLinkListChild $direction={direction} $spacing={spacing}>
            {item}
          </StyledNavigationLinkListChild>
        );
      }
      return null;
    })}
  </StyledLinkList>
);

export default LinkList;
