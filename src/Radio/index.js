// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";

import type { Props } from "./index";

const Glyph = styled.span`
  visibility: hidden;
  width: 12px;
  height: 12px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.orbit.colorIconCheckboxDisabled : theme.orbit.colorIconCheckbox};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusCircle};
`;

Glyph.defaultProps = {
  theme: defaultTokens,
};

const IconContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.orbit.backgroundInput};
  height: ${({ theme }) => theme.orbit.heightCheckbox};
  width: ${({ theme }) => theme.orbit.widthCheckbox};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusCircle};
  overflow: hidden;
  border: 1px solid ${({ tokens }) => tokens.borderColor};
  transform: scale(1);
  transition: all ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  }
`;

IconContainer.defaultProps = {
  theme: defaultTokens,
};

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.orbit.spaceXSmall};
`;

TextContainer.defaultProps = {
  theme: defaultTokens,
};

const Info = styled.span`
  font-size: ${({ theme }) => theme.orbit.fontSizeMessageForm};
  color: ${({ theme }) => theme.orbit.paletteInkLight}; // TODO create token
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
`;

Info.defaultProps = {
  theme: defaultTokens,
};

const LabelText = styled.span`
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  font-size: ${({ theme }) => theme.orbit.fontSizeLabelForm};
  color: ${({ theme }) => theme.orbit.colorLabelForm};
  height: ${({ theme }) => theme.orbit.heightCheckbox};
  line-height: ${({ theme }) => theme.orbit.heightCheckbox};
`;

LabelText.defaultProps = {
  theme: defaultTokens,
};

const Input = styled.input`
  visibility: hidden;
  display: none;

  &:checked ~ ${TextContainer} > ${LabelText} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  }

  &:checked + ${IconContainer} > ${Glyph} {
    visibility: visible;
  }
`;

Input.defaultProps = {
  theme: defaultTokens,
};

const Label = styled(({ tokens, disabled, theme, type, ...props }) => (
  <label {...props}>{props.children}</label>
))`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  flex-direction: row;
  align-items: self-start;
  opacity: ${({ disabled, theme }) => (disabled ? theme.orbit.opacityCheckboxDisabled : "1")};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  position: relative;

  &:hover ${IconContainer} {
    border-color: ${({ disabled, theme }) =>
      disabled
        ? theme.orbit.borderColorInputHover
        : theme.orbit.paletteInkLight}; // TODO create token
  }
  &:active ${IconContainer} {
    border-color: ${({ disabled, theme, tokens }) =>
      disabled ? tokens.borderColor : theme.orbit.paletteInkNormal}; // TODO create token
    transform: ${({ disabled, theme }) =>
      !disabled && `scale(${theme.orbit.modifierScaleButtonActive})`};
  }
  &:focus {
    outline: 0;
    & ${IconContainer} {
      box-shadow: 0 0 3px ${({ theme }) => theme.orbit.paletteBlueNormal}; // TODO create token
    }
  }
`;

Label.defaultProps = {
  theme: defaultTokens,
};

const Radio = (props: Props) => {
  const {
    label,
    value,
    hasError = false,
    disabled = false,
    checked = false,
    onChange,
    theme = defaultTokens,
    info,
  } = props;

  const tokens = {
    borderColor:
      hasError && !disabled && !checked
        ? theme.orbit.borderColorInputError
        : theme.orbit.borderColorInput,
  };

  return (
    <Label disabled={disabled} tokens={tokens}>
      <Input
        value={value}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <IconContainer tokens={tokens}>
        <Glyph disabled={disabled} />
      </IconContainer>
      <TextContainer>
        {label && <LabelText>{label}</LabelText>}
        {info && <Info>{info}</Info>}
      </TextContainer>
    </Label>
  );
};

export default Radio;
