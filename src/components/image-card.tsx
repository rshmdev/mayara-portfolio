import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCallback, useEffect, useState } from "react";

export function ImageCard({
  image,
  images,
  idx,
}: {
  image: unknown;
  idx: number;
  images: any;
}) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    api.scrollTo(idx);
  }, [api]);

  return (
    <Dialog>
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
      <DialogContent>
        <Carousel
          opts={{
            startIndex: idx,
          }}
          setApi={setApi}
        >
          <CarouselContent className="relative">
            {images.map((image: unknown, idx: number) => (
              <CarouselItem>
                <Image
                  className="flex-1 rounded-md pt-5"
                  src={image as any}
                  alt="Imagem de hailey"
                  key={idx}
                  width={500}
                  quality={100}
                  height={50}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
