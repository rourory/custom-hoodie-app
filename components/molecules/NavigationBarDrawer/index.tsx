import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { catalogueComponents, extraInfoComponents } from "@/lib/links";
import ListItemLink from "@/components/atoms/ListItemLink";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const NavigationBarDrawer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Меню</DrawerTitle>
          <DrawerDescription>
            Перейдите по одной из ссылок ниже для дополнительной информации.
          </DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[300px] w-[90%] px-4 mx-4 mb-4 border border-gray-400 rounded-xl">
          <ul className="pb-4">
            {catalogueComponents.map((el) => (
              <li key={el.title} className="mt-4">
                <ListItemLink href={el.href} title={el.title}>
                  {el.description}
                </ListItemLink>
              </li>
            ))}
            <Separator className="my-4" />
            {extraInfoComponents.map((el) => (
              <li key={el.title} className="mt-4">
                <ListItemLink
                  key={el.title}
                  href={el.href}
                  title={el.title}
                  className="mt-10"
                >
                  {el.description}
                </ListItemLink>
              </li>
            ))}
          </ul>
        </ScrollArea>
        {/* <DrawerFooter></DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationBarDrawer;
