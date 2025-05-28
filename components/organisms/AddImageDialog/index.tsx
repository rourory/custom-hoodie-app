/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import axios from "axios";

interface IAddImageDialog extends React.PropsWithChildren {
  imageUrl: string;
  onAddImage: (image: File | Blob) => void;
}

const AddImageDialog: React.FC<IAddImageDialog> = ({
  children,
  imageUrl,
  onAddImage,
}) => {
  const [loading, setLoading] = React.useState(true);
  const closeRef = React.useRef<HTMLButtonElement>(null);

  const loadImage = React.useCallback(async () => {
    const response = await axios.get(imageUrl, {
      responseType: "blob",
    });
    const blob = response.data as Blob;
    const contentType = response.headers["content-type"] || blob.type;
    const file = new File([blob], "image.png", { type: contentType });
    return file;
  }, [imageUrl]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogClose className="hidden" ref={closeRef} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить логотип</DialogTitle>
          <DialogDescription>
            Вы уверены, что хотите добавить этот логотип?
          </DialogDescription>
        </DialogHeader>
        <div
          style={{
            //@ts-ignore
            "--bg-image-url": `url(/transparent-bg.webp)`,
          }}
          className="flex justify-center items-center bg-[image:var(--bg-image-url)] bg-cover w-full aspect-square p-5 rounded-lg"
        >
          <Image
            src={imageUrl}
            width={loading ? 0 : 200}
            height={200}
            alt=""
            onLoad={() => setLoading(false)}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="shadow-black/10 dark:shadow-white/10 object-contain"
          />
          <Skeleton
            className={cn(
              "relative w-[200px] h-[200px] rounded-3xl",
              !loading && "hidden"
            )}
          />
        </div>
        <DialogFooter>
          <Button
            className="cursor-pointer"
            type="submit"
            onClick={async () => {
              setLoading(true);
              loadImage()
                .then((file) => {
                  setLoading(false);
                  closeRef.current?.click();
                  onAddImage(file);
                })
                .catch(() => setLoading(false));
            }}
            disabled={loading}
          >
            Добавить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddImageDialog;
