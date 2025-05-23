import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface LockedStateProps extends IComponentClassNameAsProp {
  reason: string;
  onlyIcon?: boolean;
  iconSize?: number;
}

const LockedState: React.FC<LockedStateProps> = ({
  reason,
  className,
  onlyIcon = false,
  iconSize = 60,
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center backdrop-blur rounded-md",
        className
      )}
    >
      <div className="flex flex-col items-center gap-5 bg-background-transparent rounded-xl p-5">
        <Image
          src={"/icons/lock-keyhole.svg"}
          width={iconSize}
          height={iconSize}
          priority
          alt="lock"
          className="shadow-black/10 dark:shadow-white/10 dark:invert"
        />
        {!onlyIcon && (
          <p className="text-header text-lg font-bold text-center">{reason}</p>
        )}
      </div>
    </div>
  );
};

export default LockedState;
