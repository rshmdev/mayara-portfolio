import * as React from "react";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import Image from "next/image";
import { IoReloadCircleOutline } from "react-icons/io5";

export function ImageCarouselDrawer({
  image,
  idx,
  images,
}: {
  image: unknown;
  idx: number;
  images: unknown[];
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Image
            className="flex-1 rounded-md"
            src={image as any}
            alt="Imagem de hailey"
            key={idx}
            width={400}
            quality={100}
            height={50}
          />
        </DialogTrigger>
        <DialogContent className="p-4 sm:max-w-[520px] max-h-[85dvh]">
          <ImageCarousel idx={idx} images={images} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Image
          className="flex-1 rounded-md"
          src={image as any}
          loader={({ src }) => {
            return `${src}?w=400&h=500&fit=crop&auto=format`;
          }}
          alt="Imagem de hailey"
          key={idx}
          width={400}
          quality={100}
          height={50}
        />
      </DrawerTrigger>
      <DrawerContent className="min-h-[60dvh] max-h-[70dvh]">
        <ImageCarousel className="px-4" idx={idx} images={images} />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Sair</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ImageCarousel({
  className,
  images,
  idx,
}: {
  className?: string;
  images?: unknown[];
  idx?: number;
}) {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(idx!);
  }, [api]);

  return (
    <div className="overflow-hidden">
      <Carousel
        className="w-full px-4"
        opts={{
          startIndex: idx,
        }}
        setApi={setApi}
      >
        <CarouselContent className="relative">
          {images?.map((image: unknown, idx: number) => (
            <CarouselItem className="">
              <React.Suspense
                fallback={
                  <IoReloadCircleOutline className="mr-2 h-4 w-4 animate-spin" />
                }
              >
                <Image
                  className="flex-1 rounded-md pt-5"
                  src={image as any}
                  alt="Imagem de hailey"
                  key={idx}
                  quality={100}
                />
              </React.Suspense>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
