const palette = {
  blue: {
    dark: "#005AA3",
    darkActive: "#003E70",
    darkHover: "#004F8F",
    darker: "#004680",
    light: "#E8F4FD",
    lightActive: "#B4DBF8",
    lightHover: "#D0E9FB",
    normal: "#0172CB",
    normalActive: "#01508E",
    normalHover: "#0161AC",
  },
  cloud: {
    dark: "#E8EDF1",
    darker: "#BAC7D5",
    darkerActive: "#94A8BE",
    darkerHover: "#A6B6C8",
    light: "#F5F7F9",
    lightActive: "#D6DEE6",
    lightHover: "#E5EAEF",
    normal: "#EFF2F5",
    normalActive: "#CAD4DE",
    normalHover: "#DCE3E9",
  },
  green: {
    dark: "#2D7738",
    darkActive: "#1F5126",
    darkHover: "#276831",
    darker: "#235C2B",
    light: "#EBF4EC",
    lightActive: "#C3DFC7",
    lightHover: "#D7EAD9",
    normal: "#28A138",
    normalActive: "#1D7228",
    normalHover: "#238B31",
  },
  ink: {
    light: "#4F5E71",
    lightActive: "#324256",
    lightHover: "#3E4E63",
    lighter: "#697D95",
    lighterActive: "#4A617C",
    lighterHover: "#5D738E",
    normal: "#252A31",
    normalActive: "#0B0C0F",
    normalHover: "#181B20",
  },
  orange: {
    dark: "#BA5D00",
    darkActive: "#954A00",
    darkHover: "#A75400",
    darker: "#803F00",
    light: "#FCF2E6",
    lightActive: "#F5D7B3",
    lightHover: "#F9E5CC",
    normal: "#DF7B00",
    normalActive: "#B26200",
    normalHover: "#C96F00",
  },
  product: {
    dark: "#007F6D",
    darkActive: "#006657",
    darkHover: "#007060",
    darker: "#005C4E",
    light: "#E6F6F4",
    lightActive: "#B3E4DD",
    lightHover: "#CCEDE8",
    normal: "#00A58E",
    normalActive: "#008472",
    normalHover: "#009580",
  },
  red: {
    dark: "#970C0C",
    darkActive: "#6D0909",
    darkHover: "#890B0B",
    darker: "#760909",
    light: "#FAEAEA",
    lightActive: "#EEB9B9",
    lightHover: "#F4D2D2",
    normal: "#D21C1C",
    normalActive: "#9D1515",
    normalHover: "#B91919",
  },
  white: {
    normal: "#FFFFFF",
    normalActive: "#E7ECF1",
    normalHover: "#F1F4F7",
  },
};

export type ProductColor = {
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
  dark: string;
  darkHover: string;
  darkActive: string;
  darker: string;
};

export type StatusColor = {
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
  dark: string;
  darkHover: string;
  darkActive: string;
  darker: string;
};

export type WhiteColor = {
  normal: string;
  normalHover: string;
  normalActive: string;
};

export type CloudColor = {
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
  dark: string;
  darker: string;
  darkerHover: string;
  darkerActive: string;
};

export type InkColor = {
  lighter: string;
  lighterHover: string;
  lighterActive: string;
  light: string;
  lightHover: string;
  lightActive: string;
  normal: string;
  normalHover: string;
  normalActive: string;
};

export type SocialColor = {
  facebook: string;
  facebookHover: string;
  facebookActive: string;
};

export type BundleColor = {
  basic: string;
  medium: string;
};

export type Palette = {
  product: ProductColor;
  white: WhiteColor;
  cloud: CloudColor;
  ink: InkColor;
  orange: StatusColor;
  red: StatusColor;
  green: StatusColor;
  blue: StatusColor;
  social: SocialColor;
  bundle: BundleColor;
};

export default palette;