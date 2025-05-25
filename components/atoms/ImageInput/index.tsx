"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageInputProps {
  addImage: (file?: File) => void;
}

const ImageInput: React.FC<ImageInputProps & IComponentClassNameAsProp> = ({ addImage, className }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        variant={"outline"}
        className={cn("cursor-pointer", className)}
        onClick={() => inputRef.current?.click()}
      >
        <Image
          src="/icons/image.svg"
          width={24}
          height={24}
          alt="add-image"
          className="dark:invert"
        />
        Добавить изображение
      </Button>
      <Input
        ref={inputRef}
        className="hidden"
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
