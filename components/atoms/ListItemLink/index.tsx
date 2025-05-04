import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const ListItemLink: React.FC<React.PropsWithChildren<IListItemLink>> = ({
  className,
  children,
  title,
  href,
}) => {
  return (
    <Link className={cn("", className)} href={href}>
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="mt-1.5 text-sm leading-tight text-muted-foreground">
        {children}
      </p>
    </Link>
  );
};

export default ListItemLink;
