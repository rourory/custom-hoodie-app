import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { PERIODS, plus } from "datetime-utility";

interface IStockImage extends IComponentClassNameAsProp {
  compressedImageUrl: string;
  backgroundColor: string;
  price: string | number;
  createdAt?: Date;
}

const StockImage: React.FC<IStockImage> = ({
  className,
  compressedImageUrl,
  backgroundColor,
  price,
  createdAt,
}) => {
  const isNew = React.useMemo(() => {
    return createdAt && plus(createdAt, PERIODS.DAY, 5) >= new Date();
  }, [createdAt]);

  return (
    <div
      className={cn(
        "w-[70px] h-[70px] border-1 border-border rounded-lg p-2 flex justify-around align-middle transition-all rudation-150 cursor-pointer hover:scale-110 hover:shadow-md relative",
        className
      )}
      style={{ backgroundColor }}
    >
      <Image
        src={compressedImageUrl}
        alt={compressedImageUrl}
        width={40}
        height={40}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        className="object-contain"
      />
      <Badge
        variant={"destructive"}
        className="absolute -top-[5px] -right-4 scale-[80%]"
        style={{ display: isNew ? "block" : "none" }}
      >
        New
      </Badge>
      <Badge
        variant={"secondary"}
        className="absolute -bottom-1 -right-4 scale-90"
      >
        {price}$
      </Badge>
    </div>
  );
};

export default StockImage;
