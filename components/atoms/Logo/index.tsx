import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo:React.FC<IComponentClassNameAsProp> = ({className}) => {
  return (
    <Link href={"/"} className={cn("logo md:ml-2 min-w-[80px] flex justify-center flex-col items-center", className)} >
      <Image
        priority
        draggable={false}
        src={"/logo-xs.webp"}
        alt="logo"
        width={34}
        height={34}
      />
      <p className="font-medium">Printique</p>
    </Link>
  );
};

export default Logo;
