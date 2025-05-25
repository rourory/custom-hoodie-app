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

interface FontFamilyPickerDropdownMenuProps {
  onFontFamilyChange: (fontFamily: string) => void;
}

const FontFamilyPickerDropdownMenu: React.FC<
  FontFamilyPickerDropdownMenuProps & React.PropsWithChildren
> = ({ children, onFontFamilyChange }) => {
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
              onClick={() => onFontFamilyChange(fontFamily)}
            >
              {fontFamily}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamilyPickerDropdownMenu;
