import React from "react";
import styled, { css } from "styled-components";
import { Stack } from "@kiwicom/orbit-components";
import useMediaQuery from "@kiwicom/orbit-components/lib/hooks/useMediaQuery";

import { DoDontHeader, GuidelineType } from "./Guideline";

const GuidelineContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.orbit.spaceXLarge};
    padding-top: 0;
    background-color: ${theme.orbit.paletteCloudLight};
    border-radius: ${theme.orbit.spaceMedium};
  `}
`;

interface SizeCheckProps {
  sizeCheck: boolean | null | undefined;
}

interface ImageContainerProps extends SizeCheckProps {
  leftPadding?: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  ${({ sizeCheck, theme }) => css`
    width: ${sizeCheck ? "424px" : "100%"};
    background-color: ${theme.orbit.paletteWhite};
    border-radius: ${theme.orbit.spaceMedium};
    padding: ${theme.orbit.spaceXLarge};
  `}
`;

const Border = styled.div<GuidelineType>`
  ${({ theme, type }) => css`
    border-top: 4px solid
      ${type === "do" ? theme.orbit.paletteGreenNormal : theme.orbit.paletteRedNormal};
    padding-top: ${theme.orbit.spaceXLarge};
    height: 100%;
  `}
`;

interface GuidelineWithImageProps extends GuidelineType, ImageProps {}

const GuidelineWithImage = ({ children, type }: GuidelineWithImageProps) => {
  const { isMediumMobile } = useMediaQuery();
  const image = children[0];
  const content = children.slice();
  content.shift();
  return (
    <GuidelineContainer>
      <Border type={type}>
        <Stack>
          <ImageContainer sizeCheck={isMediumMobile}>{image}</ImageContainer>
          <Stack spacing="small">
            <DoDontHeader type={type} />
            {content}
          </Stack>
        </Stack>
      </Border>
    </GuidelineContainer>
  );
};

interface ImageProps {
  children: [React.ReactNode];
}

export const DoImage = ({ children }: ImageProps) => (
  <GuidelineWithImage type="do">{children}</GuidelineWithImage>
);

export const DontImage = ({ children }: ImageProps) => (
  <GuidelineWithImage type="dont">{children}</GuidelineWithImage>
);

interface GuidelineImagesProps {
  children: [ImageProps];
}

export default function GuidelineImages({ children }: GuidelineImagesProps) {
  const { isDesktop } = useMediaQuery();
  return <Stack direction={isDesktop ? "row" : "column"}>{children}</Stack>;
}
