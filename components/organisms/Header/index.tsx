import React from "react";
import Container from "../Container";
import { Button } from "@/components/ui/button";
import NavigationBarLinks from "@/components/molecules/NavigationBarLinks";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import NavigationBarDrawer from "@/components/molecules/NavigationBarDrawer";
import { cn } from "@/lib/utils";
import Logo from "@/components/atoms/Logo";

const Header: React.FC<IComponentClassNameAsProp> = ({ className }) => {
  return (
    <>
      {" "}
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
              <NavigationBarDrawer>
                <Button variant={"outline"} className="bg-background">
                  <Menu />
                </Button>
              </NavigationBarDrawer>
            </div>
            <Logo />
            {/* >= Tablet/Desktop */}
            <div className="links hidden md:block">
              <NavigationBarLinks />
            </div>
            <div className="account flex gap-2.5 min-w-[130px]">
              <Button variant="outline" className="text-[13px]">
                Войти
              </Button>
              <Button className="bg-primary">
                <ShoppingCart />
              </Button>
            </div>
          </div>
        </Container>
      </header>
      <div className="h-[80px]" />
    </>
  );
};

export default Header;
