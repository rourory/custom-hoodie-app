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

interface AddTextDialogProps {
  addText: (text: string) => void;
}

const AddTextDialog: React.FC<AddTextDialogProps & React.PropsWithChildren> = ({
  addText,
  children,
}) => {
  const [text, setText] = React.useState<string>("");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавление текста</DialogTitle>
          <DialogDescription>
            Добавьте текст, который будет отображаться на модели
          </DialogDescription>
        </DialogHeader>
        <Input
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="col-span-3"
        />
        <DialogFooter>
          <DialogClose>
            <Button
              type="submit"
              className="cursor-pointer"
              onClick={() => addText(text)}
            >
              Добавить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTextDialog;
