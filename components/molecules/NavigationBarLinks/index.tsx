import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItemLink from "@/components/atoms/ListItemLink";
import Link from "next/link";
import Image from "next/image";
import { extraInfoComponents } from "@/lib/links";
import { cn } from "@/lib/utils";
import { services } from "@/generated/prisma";
import LockedState from "@/components/atoms/LockedState";

const NavigationBarLinks: React.FC<INavigationComponent> = ({
  className,
  services,
}) => {
  const serviceList = services as services[];

  return (
    <NavigationMenu className={cn("", className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Главная
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 sm:w-[350px] md:w-[400px] lg:w-[550px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      className="dark:invert"
                      src={"/logo-s-sm.webp"}
                      alt="logo-s"
                      width={30}
                      height={30}
                    />
                    <div className="mb-1 mt-2 text-lg font-bold">Printique</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Закажи свой собственный дизайн изделия с помощью
                      веб-интерфейса нашего приложения
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItemLink
                href="/services"
                title="Услуги"
                icon="/icons/bubbles.svg"
              >
                Информация об изделиях и предоставляемых услугах.
              </ListItemLink>
              <ListItemLink
                href="/services/instruction"
                title="Кастомизация"
                icon="/icons/wrench.svg"
              >
                Загрузи своё фото или выбери из предложенных.
              </ListItemLink>
              <ListItemLink
                href="/services/prices"
                title="Цены"
                icon="/icons/gem.svg"
              >
                Цены на предоставляемые компанией услуги.
              </ListItemLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Каталог
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 sm:w-[350px] md:w-[400px] lg:w-[550px] md:grid-cols-2">
              {serviceList.map((el) => (
                <li className="relative col-span-1 flex" key={el.title}>
                  {!el.is_available && (
                    <LockedState
                      reason="Функция в разработке"
                      iconSize={30}
                      onlyIcon
                    />
                  )}
                  <ListItemLink
                    title={el.title}
                    href={`/services/${el.service_name}`}
                    icon={el.icon_url || ""}
                  >
                    {el.description}
                  </ListItemLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="lg:hidden">
          <NavigationMenuTrigger className="bg-transparent">
            Дополнительно
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 sm:w-[350px] md:w-[400px] lg:w-[550px] md:grid-cols-2">
              {extraInfoComponents.map((el) => (
                <ListItemLink
                  key={`lil${el.href}`}
                  href={el.href}
                  title={el.title}
                  icon={el.icon}
                >
                  {el.description}
                </ListItemLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {extraInfoComponents.map((el) => (
          <NavigationMenuItem className="hidden lg:block" key={`nmi${el.href}`}>
            <NavigationMenuLink href={el.href} className="whitespace-nowrap">
              {el.title}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBarLinks;
