import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Delete } from "lucide-react";
import React from "react";

const FloatingDeleteButton: React.FC<FloatingDeleteButtonProps> = ({
  visible,
  onClick,
  className,
}) => {
  return (
    <Button
      className={cn(
        "absolute top-[calc(50%-20px)] right-2 rounded-[100%] p-0 h-[40px] scale-75 opacity-50 hover:opacity-100 hover:scale-100 cursor-pointer ease-in-out",
        className
      )}
      style={{
        display: visible ? "block" : "none",
      }}
      onClick={onClick}
    >
      <Delete />
    </Button>
  );
};

export default FloatingDeleteButton;
