// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../../defaultTheme";
import { StyledSeparator } from "../../../Separator";
import ChevronRight from "../../../icons/ChevronRight";
import { StyledWrapper as StyledBadgeListWrapper } from "../../ItineraryBadgeList";

import type { Props } from ".";

const StyledBannerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 ${theme.orbit.spaceMedium};

    ${StyledBadgeListWrapper} {
      margin-left: 0 !important;
    }

    ${StyledSeparator} {
      width: 150% !important;
      margin-left: -${theme.orbit.spaceMedium};
    }

    & > div {
      max-width: calc(100% - 20px);
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBannerWrapper.defaultProps = {
  theme: defaultTheme,
};

const ItinerarySegmentBanner = ({ onClick, children }: Props): React.Node => {
  return (
    <StyledBannerWrapper onClick={onClick}>
      <div>{children}</div>
      <ChevronRight color="secondary" />
    </StyledBannerWrapper>
  );
};

export default ItinerarySegmentBanner;
