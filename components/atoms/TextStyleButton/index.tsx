import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

interface TextStyleButtonProps {
  actived?: boolean;
  disabled?: boolean;
  actionType: "bold" | "italic" | "underline" | "strikethrough";
  onClick?: () => void;
}

const TextStyleButton: React.FC<TextStyleButtonProps> = ({
  disabled,
  actionType,
  onClick,
  actived,
}) => {
  return (
    <Button
      className="grow relative bg-background "
      variant={"outline"}
      disabled={disabled}
      onClick={onClick}
    >
      <Image
        src={`/icons/${actionType}.svg`}
        width={24}
        height={24}
        alt={actionType}
        className="dark:invert"
      />
      <div
        className="absolute bottom-[4px] right-[4px] w-[8px] h-[8px] rounded-[50%] border-1 bg-foreground transition-all duration-150"
        style={{ opacity: actived ? 1 : 0, scale: actived ? 1 : 0.3 }}
      />
    </Button>
  );
};

export default TextStyleButton;
