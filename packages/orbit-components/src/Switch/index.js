// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import type { Props } from "./index.js.flow";
import defaultTheme from "../defaultTheme";
import Circle from "../icons/Circle";

const StyledSwitch = styled.label`
  display: inline-block;
`;

const StyledSwitchBase = styled.div`
  ${({ theme, checked }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 50px;
    height: 28px;
    background-color: ${theme.orbit.paletteInkLighter};
    border-radius: 100px;
    position: relative;
    transition: background-color ${theme.orbit.durationFast};

    ${checked &&
    css`
      background-color: ${theme.orbit.paletteBlueNormal};
    `};
  `};
`;

const StyledSwitchButton = styled.div`
  ${({ theme, checked, hasCustomIcon }) => css`
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -1px;
    left: -3px;
    width: 30px;
    height: 30px;
    border-radius: ${theme.orbit.borderRadiusCircle};
    background: ${theme.orbit.paletteWhite};
    transition: ${theme.orbit.durationFast};
    box-shadow: inset 0 0 1px 0 rgba(7, 64, 92, 0.1), ${theme.orbit.boxShadowAction};

    &:active {
      box-shadow: ${theme.orbit.boxShadowActionActive};
    }

    svg {
      height: ${theme.orbit.heightIconSmall};
      width: ${theme.orbit.heightIconSmall};
      color: ${hasCustomIcon ? theme.orbit.paletteInkLight : theme.orbit.paletteInkLighter};
    }
    ${checked &&
    css`
      left: calc(100% + 2px);
      transform: translateX(-100%);
      svg {
        color: ${theme.orbit.paletteBlueNormal};
      }
    `};
  `};
`;

const StyledSwitchInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  &:focus + ${StyledSwitchButton} {
    box-shadow: rgba(95, 115, 140, 0.3) 0px 0px 0px 2px;
  }
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSwitchInput.defaultProps = {
  theme: defaultTheme,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSwitchBase.defaultProps = {
  theme: defaultTheme,
};

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledSwitchButton.defaultProps = {
  theme: defaultTheme,
};

const Switch: React.AbstractComponent<Props, HTMLInputElement> = React.forwardRef<
  Props,
  HTMLInputElement,
>(({ onChange, checked, dataTest, icon, disabled, onBlur, onFocus }, ref) => {
  return (
    <StyledSwitch>
      <StyledSwitchBase checked={checked}>
        <StyledSwitchInput
          ref={ref}
          checked={checked}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          type="checkbox"
          data-test={dataTest}
        />
        <StyledSwitchButton checked={checked} hasCustomIcon={!!icon}>
          {icon || <Circle />}
        </StyledSwitchButton>
      </StyledSwitchBase>
    </StyledSwitch>
  );
});

Switch.displayName = "Switch";

export default Switch;
