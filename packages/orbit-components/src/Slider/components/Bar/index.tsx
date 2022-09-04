import * as React from "react";
import styled from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/Slider/components/Bar/index.tsx
import { Value } from "../../types";
=======
import { Value } from "../../index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/Slider/components/Bar/index.jsx
import { left as leftRight } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";

const StyledBar = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
`;

export const calculateBarPosition = (
  value: Value,
  max: number,
  min: number,
  hasHistogram: boolean,
) => {
  if (Array.isArray(value)) {
    return {
      left: +(((value[0] - min) / (max - min + 1)) * 100).toFixed(1),
      width: +(((value[value.length - 1] - value[0] + 1) / (max - min + 1)) * 100).toFixed(1),
    };
  }
  const addition = hasHistogram ? 1 : 0;
  return {
    left: 0,
    width: +(((value - min + addition) / (max - min + addition)) * 100).toFixed(1),
  };
};

export const StyledBarPart = styled(({ width, left, theme, active, ...props }) => (
  <div {...props} />
)).attrs(({ width, left, theme }) => {
  return {
    style: {
      width: `${width}%`,
      [leftRight({ theme })]: `${left}%`,
    },
  };
})`
  position: absolute;
  height: 4px;
  top: 10px;
  border-radius: 4px;
  background-color: ${({ theme, active }: { theme: typeof defaultTheme; active?: boolean }) =>
    active ? theme.orbit.paletteBlueNormal : theme.orbit.paletteCloudDarker};
`;

StyledBarPart.defaultProps = {
  theme: defaultTheme,
};

interface Props {
  value: Value;
  max: number;
  min: number;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  hasHistogram: boolean;
}

const Bar = React.forwardRef<HTMLDivElement, Props>(
  ({ onMouseDown, value, max, min, hasHistogram }, ref) => {
    const { left, width } = calculateBarPosition(value, max, min, hasHistogram);
    return (
      <StyledBar ref={ref} onMouseDown={onMouseDown}>
        <StyledBarPart width={100} left={0} />
        <StyledBarPart active left={left} width={width} />
      </StyledBar>
    );
  },
);

Bar.displayName = "Bar";

export default Bar;
