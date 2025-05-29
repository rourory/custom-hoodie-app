"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ChangeThemeButton() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Изменить тему"
          title="Темы"
          variant="outline"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Изменить тему</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          aria-label="Изменить тему на светлую"
          title="Светлая тема"
          onClick={() => setTheme("light")}
        >
          Светлая
        </DropdownMenuItem>
        <DropdownMenuItem
          aria-label="Изменить тему на темную"
          title="Темная тема"
          onClick={() => setTheme("dark")}
        >
          Темная
        </DropdownMenuItem>
        <DropdownMenuItem
          aria-label="Изменить тему на системную"
          title="Системная тема"
          onClick={() => setTheme("system")}
        >
          Системная
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ChangeThemeButton;
