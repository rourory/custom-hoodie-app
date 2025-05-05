import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavigationBarLinks from "@/components/molecules/NavigationBarLinks";
import { ShoppingCart } from "lucide-react";
import { Menu } from "lucide-react";
import NavigationBarDrawer from "@/components/molecules/NavigationBarDrawer";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="h-[80px] px-8 flex justify-between items-center">
          {/* Mobile only */}
          <div className="md:hidden flex justify-items-start">
            <NavigationBarDrawer>
              <Button variant={"outline"}>
                <Menu />
              </Button>
            </NavigationBarDrawer>
          </div>
          <div className="logo md:ml-2 min-w-[80px] md:block flex justify-center ">
            <Image
              draggable={false}
              src={"/logo-md.webp"}
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          {/* >= Tablet/Desktop */}
          <div className="links hidden md:block">
            <NavigationBarLinks />
          </div>
          <div className="account flex gap-2.5 min-w-[130px]">
            <Button variant="outline">Войти</Button>
            <Button className="bg-primary">
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
