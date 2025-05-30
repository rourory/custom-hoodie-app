"use client"

import {
  Drawer as SCNDrawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Drawer } from "vaul";
import HWComponentMountingDelayer from "../HighWeightComponentDelayer";
import { useCanvasCustomizerStore } from "@/store/customizer";

interface IModelCustomizerDrawerProps {
  content: React.ReactNode;
}

const ModelCustomizerDrawer: React.FC<
  React.PropsWithChildren & IModelCustomizerDrawerProps
> = ({ content, children }) => {
  const { setSelectedObjectId } = useCanvasCustomizerStore();

  return (
    <SCNDrawer onOpenChange={(open) => {
                if (!open) setSelectedObjectId(null, null);
              }} handleOnly>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <Drawer.Handle className="-translate-x-[60vw]">
          <div className="h-[100px] w-[120vw]" />
        </Drawer.Handle>
        <DrawerHeader className="text-left">
          <DrawerTitle>Редактирование модели</DrawerTitle>
          <DrawerDescription>
            Отредактируйте модель по вашему вкусу
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex h-[60vh] w-full">
          <HWComponentMountingDelayer delay={200}>
            <ScrollArea className="w-full flex px-2 mx-4 mb-4 border border-border rounded-md relative">
              {content}
            </ScrollArea>
          </HWComponentMountingDelayer>
        </div>
      </DrawerContent>
    </SCNDrawer>
  );
};

export default ModelCustomizerDrawer;
