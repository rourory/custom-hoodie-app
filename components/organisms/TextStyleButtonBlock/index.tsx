import TextStyleButton from "@/components/atoms/TextStyleButton";
import React from "react";

const TextStyleButtonBlock: React.FC<ITextStyleButtonBlock> = ({
  textButtonsDisabled,
  changeSelectedTextStyle,
  changeSelectedTextDecoration,
  isSelectedObjectIncludesStyle,
  isSelectedObjectIncludesDecoration,
}) => {
  return (
    <div id="text-style-buttons" className="flex gap-2">
      <TextStyleButton
        actionType="italic"
        disabled={textButtonsDisabled}
        onClick={() => {
          if (isSelectedObjectIncludesStyle("italic"))
            changeSelectedTextStyle({ italic: false });
          else changeSelectedTextStyle({ italic: true });
        }}
        actived={isSelectedObjectIncludesStyle("italic")}
      />
      <TextStyleButton
        actionType="bold"
        disabled={textButtonsDisabled}
        onClick={() => {
          if (isSelectedObjectIncludesStyle("bold"))
            changeSelectedTextStyle({ bold: false });
          else changeSelectedTextStyle({ bold: true });
        }}
        actived={isSelectedObjectIncludesStyle("bold")}
      />
      <TextStyleButton
        actionType="underline"
        disabled={textButtonsDisabled}
        onClick={() => {
          if (
            isSelectedObjectIncludesDecoration("underline")
          )
            changeSelectedTextDecoration({ underline: false });
          else changeSelectedTextDecoration({ underline: true });
        }}
        actived={isSelectedObjectIncludesDecoration("underline")}
      />
      <TextStyleButton
        actionType="strikethrough"
        disabled={textButtonsDisabled}
        onClick={() => {
          if (
            isSelectedObjectIncludesDecoration("line-through")
          )
            changeSelectedTextDecoration({ lineThrough: false });
          else changeSelectedTextDecoration({ lineThrough: true });
        }}
        actived={isSelectedObjectIncludesDecoration("line-through")}
      />
    </div>
  );
};

export default TextStyleButtonBlock;
