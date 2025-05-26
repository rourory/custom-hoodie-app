declare interface IModelProps {
  model?: React.ReactNode;
  uvUrl: string;
  textureAspectWidth: number;
  textureAspectHeight: number;
}

declare interface IModelViewer {
  position?: Vector3;
  fov?: number;
  modelProps: IModelProps;
}

declare interface ICustomizerComponent
  extends IComponentClassNameAsProp,
    IModelViewer {}

declare interface ITextStyleButtonBlock {
  textButtonsDisabled?: boolean;
  changeSelectedTextStyle: (style: IFontStyleChange) => void;
  changeSelectedTextDecoration: (decoration: IFontDecorationChange) => void;
  isSelectedObjectIncludesStyle: (paramenter: "bold" | "italic") => boolean;
  isSelectedObjectIncludesDecoration: (
    paramenter: "line-through" | "underline"
  ) => boolean;
}

declare interface IAdvancedTextStyleButtonBlock {
  textButtonsDisabled: boolean;
  selectedTextColor?: string;
  selectedFontFamily?: string;
  changeSelectedTextColor: (color: string) => void;
  changeSelectedTextFontFamily: (fontFamily: string) => void;
  changeSelectedText: (text: string) => void;
}

declare interface IFontFamilyPickerDropdownMenu {
  selectedObjectFontFamily?: string;
  onFontFamilyChange: (fontFamily: string) => void;
}