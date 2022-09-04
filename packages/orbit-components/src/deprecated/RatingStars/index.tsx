import * as React from "react";
import styled from "styled-components";

<<<<<<< HEAD:packages/orbit-components/src/deprecated/RatingStars/index.jsx
import StarEmpty from "../../icons/StarEmpty";
import StarFull from "../../icons/StarFull";
import defaultTheme from "../../defaultTheme";
import { MAX_STARS, ICON_COLORS, ICON_SIZES } from "./consts";
import useTranslate from "../../hooks/useTranslate";
<<<<<<< HEAD:packages/orbit-components/src/deprecated/RatingStars/index.tsx
import { Props } from "./types";
=======

import type { Props } from ".";
=======
import StarEmpty from "../icons/StarEmpty";
import StarFull from "../icons/StarFull";
import defaultTheme from "../defaultTheme";
import { MAX_STARS, ICON_COLORS, ICON_SIZES } from "./consts";
import useTranslate from "../hooks/useTranslate";
import { Props } from "./index.d";
>>>>>>> c624db547 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/RatingStars/index.tsx
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/deprecated/RatingStars/index.jsx

const StyledRatingStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;
  }
`;

StyledRatingStars.defaultProps = {
  theme: defaultTheme,
};

const RatingStars = ({
  rating,
  size = ICON_SIZES.SMALL,
  dataTest,
  id,
  color = ICON_COLORS.PRIMARY,
  showEmpty = false,
}: Props) => {
  const translate = useTranslate();
  const ratingRounded = Math.round(rating);
  const starsCount = showEmpty ? MAX_STARS : ratingRounded;
  return (
    <StyledRatingStars
      data-test={dataTest}
      id={id}
      aria-label={translate("ratingstar_description", {
        number: ratingRounded,
        total: starsCount,
      })}
    >
      {Array(...Array(starsCount)).map((_, index) => {
        const key = `star-${index}`;
        return index <= ratingRounded - 1 ? (
          <StarFull key={key} size={size} color={color} />
        ) : (
          <StarEmpty key={key} size={size} color={color} />
        );
      })}
    </StyledRatingStars>
  );
};

export default RatingStars;
