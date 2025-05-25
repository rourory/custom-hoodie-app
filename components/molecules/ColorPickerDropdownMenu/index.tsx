import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ColorPickerElement from "@/components/atoms/ColorPickerElement";

const availableColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "white",
  "grey",
  "orange",
  "purple",
  "pink",
  "brown",
  "cyan",
];

interface ColorPickerDropdownMenuProps {
  onChangeColor: (color: string) => void;
}

const ColorPickerDropdownMenu: React.FC<
  ColorPickerDropdownMenuProps & React.PropsWithChildren
> = ({ onChangeColor, children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Выберите цвет текста</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <div className="grid grid-cols-4 gap-1">
            {availableColors.map((color) => (
              <ColorPickerElement
                key={color}
                color={color}
                onClick={() => onChangeColor(color)}
              />
            ))}
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColorPickerDropdownMenu;
