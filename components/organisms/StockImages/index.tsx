import StockImage from "@/components/atoms/StockImage";
import StockCategoryCombobox from "@/components/molecules/StockCategoryCombobox";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { stock_images } from "@/generated/prisma";
import { Clients } from "@/services/base/clients";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import AddImageDialog from "../AddImageDialog";

interface IStockImages {
  onAddImage: (image: File | Blob | undefined) => void;
}

const StockImages: React.FC<IStockImages> = ({ onAddImage }) => {
  const [images, setImages] = React.useState<stock_images[]>([]);
  const [selectedCategory, setSelectedCategory] = React.useState("white");

  React.useEffect(() => {
    Clients.stockImages
      .getImagesByCategoryName(selectedCategory)
      .then((res) => {
        setImages(res);
      });
  }, [selectedCategory]);

  return (
    <div className="w-full h-[400px] my-3 border-1 border-border rounded-lg overflow-hidden flex flex-col items-center">
      <p className="my-2 w-full text-center">Выберите из предложенных</p>
      <StockCategoryCombobox
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      >
        <Button variant={"outline"} className="w-[90%] mb-2">
          Выберите категорию
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </StockCategoryCombobox>
      <ScrollArea className="w-full h-full border-t-1 border-border">
        <div className="w-full h-full grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center mb-30 px-2">
          {images.map((img) => (
            <AddImageDialog
              imageUrl={img.imageUrl}
              key={img.id}
              onAddImage={onAddImage}
            >
              <div className="col-span-1 mt-2">
                <StockImage
                  compressedImageUrl={img.compressedImageUrl}
                  backgroundColor={img.backgroundColor}
                  createdAt={img.createdAt}
                  price={img.price.valueOf()}
                />
              </div>
            </AddImageDialog>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default StockImages;
