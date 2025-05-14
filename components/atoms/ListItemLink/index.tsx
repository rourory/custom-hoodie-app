import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListItemLink: React.FC<React.PropsWithChildren<IListItemLink>> = ({
  className,
  children,
  title,
  href,
  icon,
}) => {
  return (
    <Link
      className={cn(
        "transition-all duration-150 border-[1px] border-gray-100 p-3 rounded-md hover:border-gray-200 hover:scale-105 hover:shadow-md",
        className
      )}
      href={href}
    >
      <div className="text-sm font-medium leading-none flex gap-1 items-center">
        {icon && <Image src={icon} alt={title} width={18} height={18} />}{" "}
        {title}
      </div>
      <p className="mt-1.5 text-sm leading-tight text-muted-foreground">
        {children}
      </p>
    </Link>
  );
};

export default ListItemLink;
