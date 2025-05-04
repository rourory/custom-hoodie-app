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

const NavigationBarLinks = () => {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Футболки",
      href: "/services/print/t-shirt",
      description: "Ваша собственная фотография или логоит на футболке.",
    },
    {
      title: "Худи",
      href: "/services/print/hoodie",
      description: "Печать DTG-методом на худи с возможнстью выбора цвета.",
    },
    {
      title: "Свитшоты",
      href: "/services/print/sweatshot",
      description:
        "Выберите цвте и форму свитшота, закажите печать своего логотипа.",
    },
    {
      title: "Кружки",
      href: "/services/print/cup",
      description:
        "Выбор формы и цвета внутренней части кружки с печатью вашей фотографии.",
    },
    {
      title: "Рюкзаки",
      href: "/services/print/backpack",
      description: "Печать DTF-методом на рюкзаках и сумках.",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Главная</NavigationMenuTrigger>
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
              <ListItemLink href="/docs" title="Услуги">
                Информация об изделиях и предоставляемых услугах.
              </ListItemLink>
              <ListItemLink href="/docs/installation" title="Кастомизация">
                Загрузи своё фото или выбери из предложенных.
              </ListItemLink>
              <ListItemLink href="/docs/primitives/typography" title="Цены">
                Цены на предоставляемые компанией услуги.
              </ListItemLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Каталог</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 sm:w-[350px] md:w-[400px] lg:w-[550px] md:grid-cols-2  ">
              {components.map((component) => (
                <ListItemLink
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItemLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" passHref>
            <NavigationMenuLink className="whitespace-nowrap">
              О нас
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBarLinks;
