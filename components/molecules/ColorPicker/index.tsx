"use client";

import ColorPickerElement from "@/components/atoms/ColorPickerElement";
import { cn } from "@/lib/utils";
import { useModelSettingsStore } from "@/store/customizer";
import React from "react";

const ColorPicker: React.FC<
  IComponentClassNameAsProp & { colors: string[] }
> = ({ className, colors }) => {
  const { setColor } = useModelSettingsStore();

  return (
    <div
      className={cn(
        "flex gap-3 p-4 justify-center content-center items-center",
        className
      )}
    >
      {colors.map((color) => {
        return (
          <ColorPickerElement
            key={color}
            color={color}
            onClick={() => setColor(color)}
            circle
          />
        );
      })}
    </div>
  );
};

export default ColorPicker;
