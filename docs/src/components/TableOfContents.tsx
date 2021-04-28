import React from "react";
import Scrollspy from "react-scrollspy";
import styled, { css } from "styled-components";

export interface TocItemObject {
  title: string;
  url: string;
  items?: TocItemObject[];
}

interface StyledAnchorProps {
  level: number;
  active: boolean;
}

const getWidth = (level: number) => {
  if (level === 0) return "4px";
  if (level === 1) return "8px";
  return "12px";
};

const getColor = (active: boolean, level: number, theme) => {
  if (active) return theme.orbit.paletteProductNormal;
  if (level === 0) return theme.orbit.paletteInkNormal;
  return theme.orbit.paletteInkLight;
};

const StyledAnchor = styled.a<StyledAnchorProps>`
  ${({ active, level, theme }) => css`
    color: ${getColor(active, level, theme)};
    font-size: ${level <= 1 ? theme.orbit.fontSizeTextNormal : theme.orbit.fontSizeTextSmall};
    text-indent: -${theme.orbit.spaceXLarge};
    padding-left: ${theme.orbit.spaceXLarge};
    display: inline-block;

    ::before {
      display: inline-block;
      content: "";
      height: 2px;
      border-radius: 1px;
      background: currentColor;
      width: ${getWidth(level)};
      margin: 4px 12px;
    }
  `}
`;

const StyledTocList = styled.ul`
  max-height: 100vh;
  overflow-y: auto;
`;

const stripOctothorpe = (string?: string) => {
  if (!string) return "";
  return string.replace("#", "");
};

const getTocList = (array: TocItemObject[], level = 0, activeScrollSpy: string) => {
  const nextLevel = level + 1;
  if (typeof array === "undefined") {
    return [];
  }
  return array.map(item => (
    <li key={item.url}>
      <StyledAnchor
        level={level}
        href={item.url}
        active={activeScrollSpy === stripOctothorpe(item.url)}
      >
        {item.title}
      </StyledAnchor>
      {item.items && <ul>{getTocList(item.items, nextLevel, activeScrollSpy)}</ul>}
    </li>
  ));
};

const getTocIds = array => {
  return array
    .reduce((idArray, item) => {
      const kids = item.props.children;
      idArray.push(stripOctothorpe(kids[0].props.href));
      if (kids[1]) {
        idArray.push(getTocIds(kids[1].props.children));
      }
      return idArray;
    }, [])
    .flat();
};

interface Props {
  items: TocItemObject[];
}

const TableOfContents = ({ items }: Props) => {
  // Set scroll state
  const [activeScrollSpy, setActiveScrollSpy] = React.useState("");

  const handleScrollSpyUpdate = el => {
    if (el) {
      setActiveScrollSpy(el.getAttribute("id"));
    }
  };

  const TocContent = getTocList(items, 0, activeScrollSpy);
  if (TocContent.length === 0) {
    return null;
  }
  const tocIds = getTocIds(TocContent);
  return (
    <Scrollspy items={tocIds} onUpdate={handleScrollSpyUpdate}>
      <StyledTocList>{TocContent}</StyledTocList>
    </Scrollspy>
  );
};

export default TableOfContents;