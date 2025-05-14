import React from "react";

const ColorPickerElement: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      className="w-[40px] h-[40px] rounded-[50%] border-2 border-gray-300 transition-transform duration-100 hover:scale-110 cursor-pointer shadow-md"
      style={{ background: color }}
    ></div>
  );
};

export default ColorPickerElement;
