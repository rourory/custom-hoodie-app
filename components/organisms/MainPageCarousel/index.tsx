"use client";

import React, { useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const imagesData: { src: string; alt: string; loading: boolean }[] = [
  {
    src: "/carousel/backpack-carousel.webp",
    alt: "backpack-carousel",
    loading: true,
  },
  { src: "/carousel/cup-carousel.webp", alt: "cup-carousel", loading: true },
  {
    src: "/carousel/hoodie-carousel.webp",
    alt: "hoodie-carousel",
    loading: true,
  },
  {
    src: "/carousel/shopper-carousel.webp",
    alt: "shopper-carousel",
    loading: true,
  },
  {
    src: "/carousel/t-shirt-w-carousel.webp",
    alt: "t-shirt-w-carousel",
    loading: true,
  },
  {
    src: "/carousel/t-shirt-b-carousel.webp",
    alt: "t-shirt-b-carousel",
    loading: true,
  },
  {
    src: "/carousel/sweatshot-1-carousel.webp",
    alt: "sweatshot-1-carousel",
    loading: true,
  },
  {
    src: "/carousel/sweatshot-2-carousel.webp",
    alt: "sweatshot-2-carousel",
    loading: true,
  },
  {
    src: "/carousel/sweatshot-3-carousel.webp",
    alt: "sweatshot-3-carousel",
    loading: true,
  },
];

const MainPageCarousel = () => {
  const [images, setImages] = React.useState(imagesData);

  const onImageLoad = useCallback(
    (imageSrc: string) => {
      setImages((images) => {
        return images.map((img) => {
          if (img.src === imageSrc) {
            return { ...img, loading: false, abc: 1 };
          }
          return img;
        });
      });
    },
    [images]
  );

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {images.map((image) => {
          return (
            <CarouselItem
              className="basis-2/4 sm:basis-2/5 md:basis-1/4"
              key={image.src}
            >
              <Card className="border-0 shadow-none bg-background">
                <CardContent className="h-full flex aspect-[2/1.4] items-center justify-center p-0 overflow-clip rounded-2xl">
                  <Image
                    className={`object-center h-full object-cover &{image.loading && "hidden"}`}
                    src={image.src}
                    alt={image.alt}
                    width={image.loading ? 0 : 1024}
                    height={753}
                    onLoad={() => onImageLoad(image.src)}
                  />
                  <Skeleton
                    className={`relative w-full h-full ${
                      !image.loading && "hidden"
                    }`}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default MainPageCarousel;
