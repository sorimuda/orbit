import styled, { css } from "styled-components";
import * as React from "react";

import useTheme from "../../src/hooks/useTheme";
import defaultTheme from "../../src/defaultTheme";

const StyledComponent = styled.div`
  color: ${({ theme }) => theme.orbit.paletteInkLighter};
`;

StyledComponent.defaultProps = {
  theme: defaultTheme,
};

const StyledComponentSecond = styled.div`
  ${({ theme }) => css`
    color: ${theme.orbit.paletteInkLighter};
  `}
`;

StyledComponentSecond.defaultProps = {
  theme: defaultTheme,
};

const Component = () => {
  const theme = useTheme();
  return <div>{theme.orbit.paletteInkLighter}</div>;
};

<Component />;
