"use client";

import AddTextDialog from "@/components/molecules/AddTextDialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface TextInputProps {
  addText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps & IComponentClassNameAsProp> = ({
  addText,
  className,
}) => {
  return (
    <AddTextDialog addText={addText}>
      <Button
        id="add-text-button"
        className={cn("cursor-pointer", className)}
        variant={"outline"}
      >
        <Image
          className="dark:invert"
          src="/icons/letter-text.svg"
          width={24}
          height={24}
          alt="add-text"
        />
        Добавить текст
      </Button>
    </AddTextDialog>
  );
};

export default TextInput;
