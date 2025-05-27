import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { stock_categories } from "@/generated/prisma";
import { Clients } from "@/services/base/clients";

interface IStockCstegoryCombobox extends React.PropsWithChildren {
  onCategoryChange: (value: string) => void;
  selectedCategory: string;
}

const StockCategoryCombobox: React.FC<IStockCstegoryCombobox> = ({
  children,
  selectedCategory,
  onCategoryChange,
}) => {
  const [categories, setCategories] = React.useState<stock_categories[]>([]);
  const [open, setOpen] = React.useState(false);

  const onSelect = React.useCallback(
    (selectedValue: string) => {
      const newValue = categories.find(
        (category) => category.description === selectedValue
      )!.categoryName;
      onCategoryChange(newValue);
      setTimeout(() => setOpen(false), 150);
    },
    [categories, onCategoryChange]
  );

  React.useEffect(() => {
    Clients.stockCategories
      .getStockCategories()
      .then((res) => {
        setCategories(res);
      })
      //TODO(rrr): snacks
      .catch((err) => console.log(err));
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Найти..." className="h-9" />
          <CommandList>
            <CommandEmpty>Категория не найдена</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.categoryName}
                  value={category.description || ""}
                  onSelect={onSelect}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selectedCategory === category.categoryName
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {category.description}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default StockCategoryCombobox;
