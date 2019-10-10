// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import { SIZES, TYPES } from "./consts";
import getSpacingToken from "../common/getSpacingToken";

import type { Props, ListContextType, GetLineHeightToken } from "./index";

export const ListContext: ListContextType = React.createContext({
  size: null,
  type: null,
});

const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZES.SMALL]: theme.orbit.fontSizeTextSmall,
    [SIZES.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZES.LARGE]: theme.orbit.fontSizeTextLarge,
  };
  return sizeTokens[size];
};

export const getLineHeightToken: GetLineHeightToken = ({ theme, size }) => {
  const lineHeightTokens = {
    [SIZES.SMALL]: theme.orbit.lineHeightTextSmall,
    [SIZES.NORMAL]: theme.orbit.lineHeightTextNormal,
    [SIZES.LARGE]: theme.orbit.lineHeightTextLarge,
  };
  return lineHeightTokens[size];
};

const getTypeToken = ({ theme, type }) => {
  const typeTokens = {
    [TYPES.PRIMARY]: theme.orbit.colorTextPrimary,
    [TYPES.SECONDARY]: theme.orbit.colorTextSecondary,
  };

  return typeTokens[type];
};

const StyledList = styled(({ className, children, dataTest }) => (
  <ul className={className} data-test={dataTest}>
    {children}
  </ul>
))`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${({ theme }) => theme.orbit.fontfamily};
  font-size: ${getSizeToken};
  line-height: ${getLineHeightToken};
  color: ${getTypeToken};
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: ${getSpacingToken};
`;

StyledList.defaultProps = {
  theme: defaultTheme,
};

const List = ({
  children,
  size = SIZES.NORMAL,
  type = TYPES.PRIMARY,
  dataTest,
  spaceAfter,
}: Props) => (
  <StyledList type={type} size={size} dataTest={dataTest} spaceAfter={spaceAfter}>
    <ListContext.Provider value={{ size, type }}>{children}</ListContext.Provider>
  </StyledList>
);

export default List;

export { default as ListItem } from "./ListItem";
