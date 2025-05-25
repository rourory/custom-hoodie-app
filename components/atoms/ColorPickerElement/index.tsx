import React from "react";

interface ColorPickerElementProps {
  color: string;
  onClick?: () => void;
  circle?: boolean;
}

const ColorPickerElement: React.FC<ColorPickerElementProps> = ({
  color,
  onClick,
  circle = false,
}) => {
  return (
    <div
      className={
        "w-[40px] h-[40px] border-2 border-gray-300 transition-transform duration-100 hover:scale-110 cursor-pointer shadow-md"
      }
      style={{ background: color, borderRadius: circle ? "50%" : "9px" }}
      onClick={onClick}
    ></div>
  );
};

export default ColorPickerElement;
