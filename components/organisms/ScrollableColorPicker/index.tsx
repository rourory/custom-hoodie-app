import ColorPicker from "@/components/molecules/ColorPicker";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import React from "react";

const ScrollableColorPicker: React.FC<
  IComponentClassNameAsProp & { orientation: "horizontal" | "vertical", colors: string[] }
> = ({ className, orientation, colors }) => {
  return <ScrollArea className={cn("", className)}>
            <ColorPicker colors={colors} className={orientation == "horizontal" ? "flex-row" : "flex-col"}></ColorPicker>
            <ScrollBar orientation={orientation} />
          </ScrollArea>;
};

export default ScrollableColorPicker;
