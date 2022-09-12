import React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import * as Common from "../../../common/types";

const Wrapper = styled.div`
  padding: ${({ theme }) => `0 ${theme.orbit.spaceLarge} ${theme.orbit.spaceLarge}`};
`;

Wrapper.defaultProps = {
  theme: defaultTheme,
};

interface Props extends Common.Globals {
  children: React.ReactNode;
}

const AccordionSectionContent = ({ children, dataTest }: Props) => (
  <Wrapper data-test={dataTest && `${dataTest}Content`}>{children}</Wrapper>
);

export default AccordionSectionContent;
