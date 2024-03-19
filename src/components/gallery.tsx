"use client";

import { ImageCard } from "./image-card";

interface RequireContext {
  keys(): string[];
  <T>(id: string): T;
  <T>(id: string, resolve: boolean): T;
  <T>(id: string, resolve: boolean, cache: Record<string, unknown>): T;
}

export function Gallery() {
  function importAll(r: RequireContext) {
    return r.keys().map(r);
  }

  const images = importAll(
    (require as any).context(
      "../../public/gallery",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="flex gap-4 flex-col">
      <h1 className=" text-4xl uppercase font-bold">Galeria de fotos</h1>
      <div data-aos="fade-right" className="flex flex-wrap gap-8">
        {images.map((image: unknown, idx: number) => (
          <ImageCard image={image} idx={idx} images={images}/>
        ))}
      </div>
    </div>
  );
}
