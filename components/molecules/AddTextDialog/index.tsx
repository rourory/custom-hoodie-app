"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ModifyTextDialogProps {
  title: string;
  description: string;
  buttonText: string;
  modifyText: (text: string) => void;
}

const ModifyTextDialog: React.FC<
  ModifyTextDialogProps & React.PropsWithChildren
> = ({ modifyText, children, title, description, buttonText }) => {
  const [text, setText] = React.useState("");
  const closeRef = React.useRef<HTMLButtonElement>(null);

  
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="col-span-3"
        />
        <DialogFooter>
          <DialogClose ref={closeRef} />
          <Button
            className="cursor-pointer"
            onClick={() => {
              modifyText(text);
              setText("");
              closeRef.current?.click();
            }}
          >
            {buttonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModifyTextDialog;
