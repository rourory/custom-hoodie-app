import ColorPickerDropdownMenu from "@/components/molecules/ColorPickerDropdownMenu";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import FontFamilyPickerDropdownMenu from "@/components/molecules/FontFamiliyPickerDropdownMenu";
import ModifyTextDialog from "@/components/molecules/AddTextDialog";



const AdvancedTextStyleButtonBlock: React.FC<IAdvancedTextStyleButtonBlock> = ({
  textButtonsDisabled,
  selectedTextColor,
  changeSelectedTextColor,
  changeSelectedTextFontFamily,
  changeSelectedText,
}) => {
  return (
    <div id="text-style-buttons-advanced" className="flex gap-2 mt-1">
      <ColorPickerDropdownMenu onChangeColor={changeSelectedTextColor}>
        <Button
          variant={"outline"}
          disabled={textButtonsDisabled}
          className="cursor-pointer relative overflow-clip flex justify-around"
        >
          <Image
            src={"/icons/palette.svg"}
            width={24}
            height={24}
            alt="change-text-color"
            className="dark:invert"
          />
          <div
            className="absolute bottom-[4px] right-[4px] w-[10px] h-[10px] rounded-[50%] border-1"
            style={{
              backgroundColor: !textButtonsDisabled ? selectedTextColor : "",
            }}
          />
        </Button>
      </ColorPickerDropdownMenu>
      <FontFamilyPickerDropdownMenu
        onFontFamilyChange={changeSelectedTextFontFamily}
      >
        <Button variant={"outline"} disabled={textButtonsDisabled}>
          <Image
            src={"/icons/type-outline.svg"}
            width={24}
            height={24}
            alt="change-fint-family"
            className="dark:invert"
          />
        </Button>
      </FontFamilyPickerDropdownMenu>
      <ModifyTextDialog
        buttonText="Изменить"
        description="Ведите новый текст для его изменения"
        title="Измените текст"
        modifyText={changeSelectedText}
      >
        <Button
          variant={"outline"}
          disabled={textButtonsDisabled}
          className="grow"
        >
          Изменить
        </Button>
      </ModifyTextDialog>
    </div>
  );
};

export default AdvancedTextStyleButtonBlock;
