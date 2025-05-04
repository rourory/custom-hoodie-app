import { cn } from "@/lib/utils";
import React from "react";

const Container: React.FC<
  React.PropsWithChildren<IComponentClassNameAsProp>
> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto 2xl:max-w-[1500px] xl:max-w-[1150px] lg:max-w-[950px] md:max-w-[768px] sm:max-w-[640px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
