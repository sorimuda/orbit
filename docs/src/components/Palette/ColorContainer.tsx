import React from "react";
import styled, { css } from "styled-components";
import transparentColor from "@kiwicom/orbit-design-tokens/lib/js/transparentColor";
import { Stack } from "@kiwicom/orbit-components";

import CopyButton from "./CopyButton";
import { isLight, resolveBorders, Order } from "./helpers";

import { PaletteToken } from ".";

export interface BorderProps {
  isFull?: boolean;
  isFullBottom?: boolean;
  isMiddle?: boolean;
  isRight?: boolean;
  isLeft?: boolean;
  isExpanded: boolean;
  order: Order;
}
interface Props extends BorderProps {
  color?: PaletteToken;
}

const StyledCopyWrapper = styled.div<{ colorValue: string }>`
  ${({ colorValue, theme }) => css`
    background: linear-gradient(90deg, transparent, ${colorValue} 27%);
    position: absolute;
    bottom: 20px;
    right: ${theme.orbit.spaceSixX};
    padding-left: ${theme.orbit.spaceEightX};
  `}
`;

export const StyledColorContainerWrapper = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  ${({ colorValue, theme, isFullBottom }) => css`
    display: flex;
    flex-direction: column;
    background: ${colorValue};
    color: ${colorValue && isLight(colorValue)
      ? theme.orbit.textPrimaryForeground
      : theme.orbit.paletteWhiteNormal};
    padding: ${theme.orbit.spaceFourX} ${theme.orbit.spaceSixX};
    transition: transform ${theme.orbit.durationFast} ease-in;
    position: relative;
    min-width: 0;
    overflow: hidden;
    cursor: pointer;
    grid-row: auto;
    ${resolveBorders};
    ${isFullBottom &&
    css`
      grid-column: auto / span 3;
      grid-row: auto / span 3;
    `}

    ${StyledCopyWrapper} {
      visibility: hidden;
    }

    &:hover,
    :focus,
    :active {
      transform: scale(1.01);
      box-shadow: ${theme.orbit.elevationRaisedBoxShadow};

      ${StyledCopyWrapper} {
        visibility: visible;
      }
    }
  `}
`;

const StyledColorNameHolder = styled.div<{ isMain?: boolean }>`
  ${({ isMain, theme }) => css`
    font-weight: ${theme.orbit.fontWeightBold};
    height: 100%;
    font-size: ${theme.orbit.fontSizeLarge};
    padding-bottom: ${isMain ? theme.orbit.spaceSixX : theme.orbit.spaceTwoX};
  `}
`;

const StyledColorHexHolder = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.orbit.fontWeightMedium};
    padding-bottom: ${theme.orbit.spaceOneX};
  `}
`;

const StyledColorOtherTextHolder = styled.div`
  padding-bottom: ${({ theme }) => theme.orbit.spaceOneX};
`;

const ColorContainer = ({ color, ...props }: Props) => {
  const isNormal = (name?: string): boolean => String(name).includes("Normal");

  if (!color || typeof color.value !== "string") return null;

  return (
    <StyledColorContainerWrapper colorValue={color.value} {...props}>
      <StyledColorNameHolder isMain={isNormal(color.name)}>{color.name}</StyledColorNameHolder>
      <StyledColorHexHolder>{color.value}</StyledColorHexHolder>
      <StyledColorOtherTextHolder>{transparentColor(color.value, 100)}</StyledColorOtherTextHolder>
      <StyledColorOtherTextHolder>{color.tokenName}</StyledColorOtherTextHolder>
      <StyledCopyWrapper colorValue={color.value}>
        <Stack direction="column" spacing="XXSmall" align="end">
          <CopyButton textToCopy={color.value} colorValue={color.value} buttonText="Hex" />
          <CopyButton
            textToCopy={transparentColor(color.value, 100)}
            colorValue={color.value}
            buttonText="RGB"
          />
          <CopyButton textToCopy={color.tokenName} colorValue={color.value} buttonText="Token" />
        </Stack>
      </StyledCopyWrapper>
    </StyledColorContainerWrapper>
  );
};

export default ColorContainer;
