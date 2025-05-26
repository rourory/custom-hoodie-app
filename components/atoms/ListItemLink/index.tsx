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
        "transition-all duration-150 border-[1px] border-border p-3 rounded-md bg-background hover:bg-accent hover:scale-105 hover:shadow-md",
        className
      )}
      href={href}
    >
      <div className="text-sm font-medium leading-none flex gap-1 items-center">
        {icon && (
          <Image
            loading="eager"
            src={icon}
            alt={title}
            width={18}
            height={18}
            className="dark:invert"
          />
        )}
        {title}
      </div>
      <p className="mt-1.5 text-sm leading-tight text-muted-foreground">
        {children}
      </p>
    </Link>
  );
};

export default ListItemLink;
