import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { extraInfoComponents } from "@/lib/links";
import ListItemLink from "@/components/atoms/ListItemLink";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { services } from "@/generated/prisma";
import LockedState from "@/components/atoms/LockedState";

const NavigationBarDrawer: React.FC<
  React.PropsWithChildren & INavigationComponent
> = async ({ children, services }) => {
  const serviceList = services as services[];

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
        <div className="w-full h-[60vh] flex">
          <ScrollArea className=" w-full px-4 mx-4 mb-4 border border-border rounded-md">
            <ul className="pb-4">
              {serviceList.map((el) => (
                <li key={el.title} className="mt-4 relative">
                  {!el.is_available && (
                    <LockedState
                      reason={"Функция в разработке"}
                      onlyIcon
                      iconSize={30}
                    />
                  )}
                  <ListItemLink
                    aria-label={`Перейти к разделу ${el.title}`}
                    href={`services/${el.service_name}`}
                    title={el.title}
                    className="block hover:scale-100"
                    icon={el.icon_url || ""}
                  >
                    {el.description}
                  </ListItemLink>
                </li>
              ))}
              <Separator className="my-4" />
              {extraInfoComponents.map((el) => (
                <li key={el.title} className="mt-4">
                  <ListItemLink
                    aria-label={`Перейти к разделу ${el.title}`}
                    key={el.title}
                    href={el.href}
                    title={el.title}
                    className="block hover:scale-100"
                    icon={el.icon}
                  >
                    {el.description}
                  </ListItemLink>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationBarDrawer;
