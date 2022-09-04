import * as React from "react";
import styled from "styled-components";

import Text from "../Text";
<<<<<<< HEAD:packages/orbit-components/src/KeyValue/index.tsx
import { Props } from "./types";
=======
import { Props } from "./index.d";
>>>>>>> 5169f718a (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/KeyValue/index.jsx

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const KeyValue = ({ dataTest, label, value, size = "normal" }: Props) => {
  return (
    <StyledWrapper data-test={dataTest}>
      <Text type="secondary" size={size === "normal" ? "small" : "normal"}>
        {label}
      </Text>
      <Text size={size}>{value}</Text>
    </StyledWrapper>
  );
};

export default KeyValue;
