import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface ImageInputProps {
  addImage: (file?: File) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({addImage}) => {
  return (
    <>
      <Label className="mt-2" htmlFor="picture">
        Загрузите ваше изображение
      </Label>
      <Input
        className="mt-2 cursor-pointer"
        title="Кликните для выбора вашего изображения"
        id="picture"
        type="file"
        accept="image/*"
        onChange={(e) => {
          addImage(e.target.files?.[0]);
        }}
      />
    </>
  );
};

export default ImageInput;
