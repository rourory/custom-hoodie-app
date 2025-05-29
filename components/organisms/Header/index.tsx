import React from "react";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import NavigationBarLinks from "@/components/molecules/NavigationBarLinks";
import { LogIn, ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import NavigationBarDrawer from "@/components/molecules/NavigationBarDrawer";
import { cn } from "@/lib/utils";
import Logo from "@/components/atoms/Logo";
import { prisma } from "@/prisma/prisma-clent";
import ChangeThemeButton from "@/components/atoms/ChangeThemeButton";

const Header: React.FC<IComponentClassNameAsProp> = async ({ className }) => {
  const services = await prisma.services.findMany();

  return (
    <>
      <header
        className={cn(
          "fixed w-full min-w-[375px] shadow-xl shadow-black/10 dark:shadow-white/10 backdrop-blur z-50",
          className
        )}
      >
        <Container>
          <div className="h-[80px] px-8 flex justify-between items-center">
            {/* Mobile only */}
            <div className="md:hidden flex justify-items-start">
              <NavigationBarDrawer services={services}>
                <Button variant={"outline"} className="bg-background">
                  <Menu />
                </Button>
              </NavigationBarDrawer>
            </div>
            <Logo />
            {/* >= Tablet/Desktop */}
            <div className="links hidden md:block">
              <NavigationBarLinks services={services} />
            </div>
            <div className="account flex gap-2.5 min-w-[130px]">
              <Button variant="outline" className="text-[13px]">
                <p className="hidden sm:block">Войти</p>
                <LogIn/>
              </Button>
              <Button className="bg-primary">
                <ShoppingCart />
              </Button>
              <ChangeThemeButton />
            </div>
          </div>
        </Container>
      </header>
      <div className="h-[80px]" />
    </>
  );
};

export default Header;
