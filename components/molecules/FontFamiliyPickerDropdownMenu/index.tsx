import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const availableFontFamilies = [
  "Arial",
  "Times New Roman",
  "Verdana",
  "Courier New",
];

const FontFamilyPickerDropdownMenu: React.FC<
  IFontFamilyPickerDropdownMenu & React.PropsWithChildren
> = ({ children, selectedObjectFontFamily, onFontFamilyChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Выберите семейство шрифтов</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {availableFontFamilies.map((fontFamily) => (
            <DropdownMenuItem
              key={fontFamily}
              onClick={(e) => {
                e.preventDefault();
                onFontFamilyChange(fontFamily);
              }}
              style={{ fontFamily }}
            >
              <div
                className="w-[6px] h-[6px] rounded-[50%] bg-foreground transition-all duration-150"
                style={{
                  opacity: selectedObjectFontFamily === fontFamily ? 1 : 0,
                  scale: selectedObjectFontFamily === fontFamily ? 1 : 0.5,
                }}
              />
              <p>{fontFamily}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamilyPickerDropdownMenu;
