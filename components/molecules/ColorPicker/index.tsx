import ColorPickerElement from "@/components/atoms/ColorPickerElement";
import { cn } from "@/lib/utils";
import React from "react";

const ColorPicker: React.FC<
  IComponentClassNameAsProp & { colors: string[] }
> = ({ className, colors }) => {
  return (
    <div
      className={cn(
        "flex gap-3 p-4 justify-center content-center items-center",
        className
      )}
    >
      {colors.map((color) => {
        return <ColorPickerElement key={color} color={color} />;
      })}
    </div>
  );
};

export default ColorPicker;
