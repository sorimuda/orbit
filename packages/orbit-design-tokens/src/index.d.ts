// @flow
declare module "@kiwicom/orbit-design-tokens/";

export { default as convertHexToRgba } from "./convertHexToRgba";

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
};

export type Base = {
  fontFamily: string;
  fontSizeSm: string;
  fontSizeMd: string;
  fontSizeLg: string;
  borderRadius: string;
  sizeSm: string;
  sizeMd: string;
  sizeLg: string;
  sizeXl: string;
  size2xl: string;
  opacitySmall: string;
  opacityMedium: string;
  opacityLarge: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightBold: string;
  space2xs: string;
  spaceXs: string;
  spaceSm: string;
  spaceMd: string;
  spaceLg: string;
  spaceXl: string;
  space2xl: string;
  space3xl: string;
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  transitionDefault: string;
  lineHeight: string;
};

export type Foundation = {
  palette: Palette;
  base: Base;
};

export type Tokens = {
  colorTextPrimary: string;
  colorTextSecondary: string;
  colorTextError: string;
  colorTextInfo: string;
  colorTextSuccess: string;
  colorTextWarning: string;
  colorTextCritical: string;
  colorTextWhite: string;
  colorIconPrimary: string;
  colorIconSecondary: string;
  colorIconTertiary: string;
  colorIconInfo: string;
  colorIconSuccess: string;
  colorIconWarning: string;
  colorIconCritical: string;
  colorHeading: string;
  colorHeadingInverted: string;
  colorTextLinkPrimary: string;
  colorTextLinkPrimaryHover: string;
  colorTextLinkSecondary: string;
  colorTextLinkSecondaryHover: string;
  colorAlertIconSuccess: string;
  colorTextAlertSuccess: string;
  colorAlertIconInfo: string;
  colorTextAlertInfo: string;
  colorAlertIconWarning: string;
  colorTextAlertWarning: string;
  colorAlertIconCritical: string;
  colorTextAlertCritical: string;
  colorTextAlertLink: string;
  colorTextButtonFilled: string;
  colorTextButtonFilledHover: string;
  colorTextButtonFilledActive: string;
  colorTextButtonPrimary: string;
  colorTextButtonPrimaryHover: string;
  colorTextButtonPrimaryActive: string;
  colorTextButtonSecondary: string;
  colorTextButtonSecondaryHover: string;
  colorTextButtonSecondaryActive: string;
  colorTextButtonInfo: string;
  colorTextButtonInfoHover: string;
  colorTextButtonInfoActive: string;
  colorTextButtonSuccess: string;
  colorTextButtonSuccessHover: string;
  colorTextButtonSuccessActive: string;
  colorTextButtonWarning: string;
  colorTextButtonWarningHover: string;
  colorTextButtonWarningActive: string;
  colorTextButtonCritical: string;
  colorTextButtonCriticalHover: string;
  colorTextButtonCriticalActive: string;
  colorTextButtonFacebook: string;
  colorTextButtonFacebookHover: string;
  colorTextButtonFacebookActive: string;
  colorTextButtonGoogle: string;
  colorTextButtonGoogleHover: string;
  colorTextButtonGoogleActive: string;
  colorTextButtonWhite: string;
  colorTextButtonWhiteHover: string;
  colorTextButtonWhiteActive: string;
  colorTextButtonPrimaryBordered: string;
  colorTextButtonPrimaryBorderedHover: string;
  colorTextButtonPrimaryBorderedActive: string;
  colorTextButtonSecondaryBordered: string;
  colorTextButtonSecondaryBorderedHover: string;
  colorTextButtonSecondaryBorderedActive: string;
  colorTextButtonInfoBordered: string;
  colorTextButtonInfoBorderedHover: string;
  colorTextButtonInfoBorderedActive: string;
  colorTextButtonSuccessBordered: string;
  colorTextButtonSuccessBorderedHover: string;
  colorTextButtonSuccessBorderedActive: string;
  colorTextButtonWarningBordered: string;
  colorTextButtonWarningBorderedHover: string;
  colorTextButtonWarningBorderedActive: string;
  colorTextButtonCriticalBordered: string;
  colorTextButtonCriticalBorderedHover: string;
  colorTextButtonCriticalBorderedActive: string;
  colorTextButtonFacebookBordered: string;
  colorTextButtonFacebookBorderedHover: string;
  colorTextButtonFacebookBorderedActive: string;
  colorTextButtonGoogleBordered: string;
  colorTextButtonGoogleBorderedHover: string;
  colorTextButtonGoogleBorderedActive: string;
  colorTextButtonWhiteBordered: string;
  colorTextButtonWhiteBorderedHover: string;
  colorTextButtonWhiteBorderedActive: string;
  colorTextButtonLinkPrimary: string;
  colorTextButtonLinkPrimaryHover: string;
  colorTextButtonLinkPrimaryActive: string;
  colorTextButtonLinkSecondary: string;
  colorTextButtonLinkSecondaryHover: string;
  colorTextButtonLinkSecondaryActive: string;
  colorTextInput: string;
  colorTextInputPrefix: string;
  colorTextInputDisabled: string;
  colorTextBadgeNeutral: string;
  colorTextBadgeInfo: string;
  colorTextBadgeSuccess: string;
  colorTextBadgeWarning: string;
  colorTextBadgeCritical: string;
  colorTextBadgeDark: string;
  colorTextBadgeWhite: string;
  colorTextLoading: string;
  colorTextTable: string;
  colorTextTag: string;
  colorTextTagSelected: string;
  colorIconInput: string;
  colorPlaceholderInput: string;
  colorPlaceholderInputError: string;
  colorPlaceholderInputFile: string;
  colorPlaceholderInputFileError: string;
  colorFormLabel: string;
  colorFormLabelFilled: string;
  colorInfoCheckBoxRadio: string;
  colorIconCheckboxRadio: string;
  colorIconCheckboxRadioDisabled: string;
  colorIconRadioButton: string;
  colorIconRadioButtonDisabled: string;
  colorStopoverArrow: string;
  fontFamily: string;
  backgroundBody: string;
  backgroundModal: string;
  backgroundCard: string;
  backgroundCarrierLogo: string;
  backgroundCountryFlag: string;
  backgroundButtonPrimary: string;
  backgroundButtonPrimaryHover: string;
  backgroundButtonPrimaryActive: string;
  backgroundButtonSecondary: string;
  backgroundButtonSecondaryHover: string;
  backgroundButtonSecondaryActive: string;
  backgroundButtonFacebook: string;
  backgroundButtonFacebookHover: string;
  backgroundButtonFacebookActive: string;
  backgroundButtonGoogle: string;
  backgroundButtonGoogleHover: string;
  backgroundButtonGoogleActive: string;
  backgroundButtonInfo: string;
  backgroundButtonInfoHover: string;
  backgroundButtonInfoActive: string;
  backgroundButtonSuccess: string;
  backgroundButtonSuccessHover: string;
  backgroundButtonSuccessActive: string;
  backgroundButtonWarning: string;
  backgroundButtonWarningHover: string;
  backgroundButtonWarningActive: string;
  backgroundButtonCritical: string;
  backgroundButtonCriticalHover: string;
  backgroundButtonCriticalActive: string;
  backgroundButtonWhite: string;
  backgroundButtonWhiteHover: string;
  backgroundButtonWhiteActive: string;
  backgroundButtonBordered: string;
  backgroundButtonBorderedHover: string;
  backgroundButtonBorderedActive: string;
  backgroundButtonWhiteBordered: string;
  backgroundButtonWhiteBorderedHover: string;
  backgroundButtonWhiteBorderedActive: string;
  backgroundButtonBundleBasic: string;
  backgroundButtonBundleBasicHover: string;
  backgroundButtonBundleBasicActive: string;
  backgroundButtonBundleMedium: string;
  backgroundButtonBundleMediumHover: string;
  backgroundButtonBundleMediumActive: string;
  backgroundButtonBundleTop: string;
  backgroundButtonBundleTopHover: string;
  backgroundButtonBundleTopActive: string;
  backgroundButtonLinkPrimary: string;
  backgroundButtonLinkPrimaryHover: string;
  backgroundButtonLinkPrimaryActive: string;
  backgroundButtonLinkSecondary: string;
  backgroundButtonLinkSecondaryHover: string;
  backgroundButtonLinkSecondaryActive: string;
  backgroundInput: string;
  backgroundInputDisabled: string;
  backgroundAlertSuccess: string;
  backgroundAlertInfo: string;
  backgroundAlertWarning: string;
  backgroundAlertCritical: string;
  backgroundBadgeNeutral: string;
  backgroundBadgeInfo: string;
  backgroundBadgeSuccess: string;
  backgroundBadgeWarning: string;
  backgroundBadgeCritical: string;
  backgroundBadgeDark: string;
  backgroundBadgeWhite: string;
  backgroundBadgeBundleBasic: string;
  backgroundBadgeBundleMedium: string;
  backgroundBadgeBundleTop: string;
  backgroundServiceLogo: string;
  backgroundIllustration: string;
  backgroundSeparator: string;
  backgroundTableShadowLeft: string;
  backgroundTableShadowRight: string;
  backgroundTable: string;
  backgroundTableEven: string;
  backgroundTableHover: string;
  backgroundTag: string;
  backgroundTagSelected: string;
  backgroundTagHover: string;
  backgroundTagSelectedHover: string;
  backgroundTagActive: string;
  backgroundTagSelectedActive: string;
  backgroundTooltip: string;
  backgroundTooltipLargeMobile: string;
  fontSizeHeadingDisplay: string;
  fontSizeHeadingDisplaySubtitle: string;
  fontSizeHeadingTitle1: string;
  fontSizeHeadingTitle2: string;
  fontSizeHeadingTitle3: string;
  fontSizeHeadingTitle4: string;
  fontSizeHeadingTitle5: string;
  fontSizeTextNormal: string;
  fontSizeTextLarge: string;
  fontSizeTextSmall: string;
  fontSizeMessage: string;
  fontSizeButtonLarge: string;
  fontSizeButtonNormal: string;
  fontSizeButtonSmall: string;
  fontSizeInputNormal: string;
  fontSizeInputSmall: string;
  fontSizeFormLabel: string;
  fontSizeFormFeedback: string;
  borderRadiusCircle: string;
  borderRadiusNormal: string;
  borderRadiusLarge: string;
  borderRadiusSmall: string;
  borderRadiusBadge: string;
  zIndexDefault: string;
  zIndexSticky: string;
  zIndexModalOverlay: string;
  zIndexModal: string;
  zIndexOnTheTop: string;
  widthIconSmall: string;
  heightIconSmall: string;
  widthIconMedium: string;
  heightIconMedium: string;
  widthIconLarge: string;
  heightIconLarge: string;
  heightInputNormal: string;
  heightInputLarge: string;
  heightInputSmall: string;
  heightButtonNormal: string;
  heightButtonLarge: string;
  heightButtonSmall: string;
  heightRadioButton: string;
  widthRadioButton: string;
  heightCheckbox: string;
  widthCheckbox: string;
  heightCountryFlag: string;
  widthCountryFlag: string;
  heightBadge: string;
  widthBadgeCircled: string;
  heightIllustrationSmall: string;
  heightIllustrationMedium: string;
  heightServiceLogoSmall: string;
  heightServiceLogoMedium: string;
  heightServiceLogoLarge: string;
  heightSeparator: string;
  heightInputGroupSeparatorSmall: string;
  heightInputGroupSeparatorNormal: string;
  widthModalSmall: string;
  widthModalNormal: string;
  widthModalLarge: string;
  widthModalExtraLarge: string;
  widthStopoverArrow: string;
  heightStopoverArrow: string;
  widthBreakpointMediumMobile: number;
  widthBreakpointLargeMobile: number;
  widthBreakpointTablet: number;
  widthBreakpointDesktop: number;
  widthBreakpointLargeDesktop: number;
  borderColorInput: string;
  borderColorInputHover: string;
  borderColorInputActive: string;
  borderColorInputFocus: string;
  borderColorInputError: string;
  borderColorInputErrorHover: string;
  borderColorInputErrorFocus: string;
  borderColorTableCell: string;
  borderColorCard: string;
  borderColorModal: string;
  borderColorButtonPrimaryBordered: string;
  borderColorButtonPrimaryBorderedHover: string;
  borderColorButtonPrimaryBorderedActive: string;
  borderColorButtonSecondaryBordered: string;
  borderColorButtonSecondaryBorderedHover: string;
  borderColorButtonSecondaryBorderedActive: string;
  borderColorButtonFacebookBordered: string;
  borderColorButtonFacebookBorderedHover: string;
  borderColorButtonFacebookBorderedActive: string;
  borderColorButtonGoogleBordered: string;
  borderColorButtonGoogleBorderedHover: string;
  borderColorButtonGoogleBorderedActive: string;
  borderColorButtonInfoBordered: string;
  borderColorButtonInfoBorderedHover: string;
  borderColorButtonInfoBorderedActive: string;
  borderColorButtonSuccessBordered: string;
  borderColorButtonSuccessBorderedHover: string;
  borderColorButtonSuccessBorderedActive: string;
  borderColorButtonWarningBordered: string;
  borderColorButtonWarningBorderedHover: string;
  borderColorButtonWarningBorderedActive: string;
  borderColorButtonCriticalBordered: string;
  borderColorButtonCriticalBorderedHover: string;
  borderColorButtonCriticalBorderedActive: string;
  borderColorButtonWhiteBordered: string;
  borderColorButtonWhiteBorderedHover: string;
  borderColorButtonWhiteBorderedActive: string;
  borderColorCheckboxRadio: string;
  borderColorCheckboxRadioError: string;
  borderColorCheckboxRadioHover: string;
  borderColorCheckboxRadioActive: string;
  borderColorCheckboxRadioFocus: string;
  borderColorTable: string;
  borderColorTableHead: string;
  borderColorTag: string;
  borderColorTagFocus: string;
  borderStyleCard: string;
  borderWidthCard: string;
  borderStyleInput: string;
  borderWidthInput: string;
  borderWidthInputFocus: string;
  opacityOverlay: string;
  opacityButtonDisabled: string;
  opacityRadioButtonDisabled: string;
  opacityCheckboxDisabled: string;
  fontWeightNormal: string;
  fontWeightMedium: string;
  fontWeightBold: string;
  fontWeightLinks: string;
  fontWeightHeadingDisplay: string;
  fontWeightHeadingDisplaySubtitle: string;
  fontWeightHeadingTitle1: string;
  fontWeightHeadingTitle2: string;
  fontWeightHeadingTitle3: string;
  fontWeightHeadingTitle4: string;
  fontWeightHeadingTitle5: string;
  fontWeightTableHead: string;
  paddingAlert: string;
  paddingAlertWithIcon: string;
  paddingBadge: string;
  paddingButtonWithoutText: string;
  paddingButtonSmall: string;
  paddingButtonNormal: string;
  paddingButtonLarge: string;
  paddingButtonSmallWithIcons: string;
  paddingButtonNormalWithIcons: string;
  paddingButtonLargeWithIcons: string;
  paddingButtonSmallWithLeftIcon: string;
  paddingButtonNormalWithLeftIcon: string;
  paddingButtonLargeWithLeftIcon: string;
  paddingButtonSmallWithRightIcon: string;
  paddingButtonNormalWithRightIcon: string;
  paddingButtonLargeWithRightIcon: string;
  paddingTextareaSmall: string;
  paddingTextareaNormal: string;
  paddingInputSmall: string;
  paddingInputNormal: string;
  marginButtonIconSmall: string;
  marginButtonIconNormal: string;
  marginButtonIconLarge: string;
  marginButtonGroup: string;
  marginTopFormFeedback: string;
  marginBottomSelectSuffix: string;
  paddingInputFile: string;
  paddingLeftSelectPrefix: string;
  paddingLoading: string;
  paddingTable: string;
  paddingTableCompact: string;
  paddingTag: string;
  paddingTagWithIcon: string;
  paddingTagRemovable: string;
  paddingTagRemovableWithIcon: string;
  marginBadgeIcon: string;
  spaceXXXSmall: string;
  spaceXXSmall: string;
  spaceXSmall: string;
  spaceSmall: string;
  spaceMedium: string;
  spaceLarge: string;
  spaceXLarge: string;
  spaceXXLarge: string;
  spaceXXXLarge: string;
  durationFast: string;
  durationNormal: string;
  durationSlow: string;
  modifierScaleButtonActive: number;
  modifierScaleCheckboxRadioActive: number;
  lineHeightText: string;
  lineHeightTextSmall: string;
  lineHeightTextNormal: string;
  lineHeightTextLarge: string;
  lineHeightHeading: string;
  lineHeightHeadingDisplay: string;
  lineHeightHeadingDisplaySubtitle: string;
  lineHeightHeadingTitle1: string;
  lineHeightHeadingTitle2: string;
  lineHeightHeadingTitle3: string;
  lineHeightHeadingTitle4: string;
  lineHeightHeadingTitle5: string;
  textDecorationTextLinkPrimary: string;
  textDecorationTextLinkPrimaryHover: string;
  textDecorationTextLinkSecondary: string;
  textDecorationTextLinkSecondaryHover: string;
  boxShadowButtonFocus: string;
  boxShadowAction: string;
  boxShadowActionActive: string;
  boxShadowFixed: string;
  boxShadowFixedReverse: string;
  boxShadowRaised: string;
  boxShadowRaisedReverse: string;
  boxShadowOverlay: string;
  paletteProductLight: string;
  paletteProductLightHover: string;
  paletteProductLightActive: string;
  paletteProductNormal: string;
  paletteProductNormalHover: string;
  paletteProductNormalActive: string;
  paletteProductDark: string;
  paletteProductDarkHover: string;
  paletteProductDarkActive: string;
  paletteProductDarker: string;
  paletteWhite: string;
  paletteWhiteHover: string;
  paletteWhiteActive: string;
  paletteCloudLight: string;
  paletteCloudLightHover: string;
  paletteCloudLightActive: string;
  paletteCloudNormal: string;
  paletteCloudNormalHover: string;
  paletteCloudNormalActive: string;
  paletteCloudDark: string;
  paletteCloudDarker: string;
  paletteCloudDarkerHover: string;
  paletteCloudDarkerActive: string;
  paletteInkLighter: string;
  paletteInkLighterHover: string;
  paletteInkLighterActive: string;
  paletteInkLight: string;
  paletteInkLightHover: string;
  paletteInkLightActive: string;
  paletteInkNormal: string;
  paletteInkNormalHover: string;
  paletteInkNormalActive: string;
  paletteOrangeLight: string;
  paletteOrangeLightHover: string;
  paletteOrangeLightActive: string;
  paletteOrangeNormal: string;
  paletteOrangeNormalHover: string;
  paletteOrangeNormalActive: string;
  paletteOrangeDark: string;
  paletteOrangeDarkHover: string;
  paletteOrangeDarkActive: string;
  paletteOrangeDarker: string;
  paletteRedLight: string;
  paletteRedLightHover: string;
  paletteRedLightActive: string;
  paletteRedNormal: string;
  paletteRedNormalHover: string;
  paletteRedNormalActive: string;
  paletteRedDark: string;
  paletteRedDarkHover: string;
  paletteRedDarkActive: string;
  paletteRedDarker: string;
  paletteGreenLight: string;
  paletteGreenLightHover: string;
  paletteGreenLightActive: string;
  paletteGreenNormal: string;
  paletteGreenNormalHover: string;
  paletteGreenNormalActive: string;
  paletteGreenDark: string;
  paletteGreenDarkHover: string;
  paletteGreenDarkActive: string;
  paletteGreenDarker: string;
  paletteBlueLight: string;
  paletteBlueLightHover: string;
  paletteBlueLightActive: string;
  paletteBlueNormal: string;
  paletteBlueNormalHover: string;
  paletteBlueNormalActive: string;
  paletteBlueDark: string;
  paletteBlueDarkHover: string;
  paletteBlueDarkActive: string;
  paletteBlueDarker: string;
  paletteSocialFacebook: string;
  paletteSocialFacebookHover: string;
  paletteSocialFacebookActive: string;
};

export type ThemePaletteColors = {
  readonly productLight: string;
  readonly productLightHover: string;
  readonly productLightActive: string;
  readonly productNormal: string;
  readonly productNormalHover: string;
  readonly productNormalActive: string;
  readonly productDark: string;
  readonly productDarkHover?: string;
  readonly productDarkActive?: string;
  readonly productDarker?: string;
};

type CustomPalette = {
  product?: Partial<ProductColor>;
  white?: Partial<WhiteColor>;
  cloud?: Partial<CloudColor>;
  ink?: Partial<InkColor>;
  orange?: Partial<StatusColor>;
  red?: Partial<StatusColor>;
  green?: Partial<StatusColor>;
  blue?: Partial<StatusColor>;
  social?: Partial<SocialColor>;
};
type CustomBase = Partial<Base>;

type CustomFoundation = Partial<{
  palette: CustomPalette;
  base: CustomBase;
}>;

export declare const ConvertHexToRgba: (color: string, opacity: number) => string;
export declare const fromPlainObject: (themePaletteColors: ThemePaletteColors) => Tokens;
export declare const getTokens: (customFoundation?: CustomFoundation) => Tokens;
export declare const defaultTokens: Tokens;
