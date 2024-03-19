import Link from "next/link";
import { badgeVariants } from "./ui/badge";
import { cn } from "@/lib/utils";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Hero() {
  return (
    <div data-aos="fade-right" className="flex gap-8 flex-wrap w-full ">
      <div className="hero-bg flex-1 rounded-md min-w-[250px] sm:min-w-[430px] h-[500px]" />

      <div className="flex-1 flex flex-col w-full items-center justify-center gap-8 min-w-[300px]">
        <div className="flex w-full flex-col items-start gap-6">
          <h1 className="uppercase font-bold text-3xl">Hailey</h1>

          <span className="text-lg font-semibold">Modelo fotográfica</span>

          <ul className="space-y-3">
            <li className="text-lg font-medium">Altura: 1,69</li>
            <li className="text-lg font-medium">Peso: 57kg</li>

            <li className="text-lg font-medium">Cabelo: Morena iluminada </li>

            <li className="text-lg font-medium">Olhos: castanhos</li>

            <li className="text-lg font-medium">
              Nenhum procedimento estético, além de tatuagens. 
            </li>
            <li className="text-lg font-medium">Rio de Janeiro</li>
          </ul>
        </div>

        <div className="flex gap-4 w-full flex-wrap">
          <Link
            href=""
            className={cn(
              badgeVariants({ variant: "default" }),
              "py-2 rounded-md flex gap-2 bg-gradient-to-br text-white border-none from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
            )}
          >
            <FaInstagram size={17} /> Instagram
          </Link>

          <Link
            href=""
            className={cn(
              badgeVariants({ variant: "default" }),
              "py-2 rounded-md flex gap-2 bg-gradient-to-br text-white from-[#000] via-[#000] to-[#000] border-foregound border"
            )}
          >
            <FaTiktok size={17} /> TikTok
          </Link>

          <Link
            href=""
            className={cn(
              badgeVariants({ variant: "default" }),
              "py-2 rounded-md flex gap-2 bg-gradient-to-br text-white from-[#25D366] via-[#25D366] to-[#00E676] border-foregound border"
            )}
          >
            <FaWhatsapp size={17} /> WhatsApp
          </Link>

          <Link
            href=""
            className={cn(
              badgeVariants({ variant: "default" }),
              "py-2 rounded-md flex gap-2 bg-gradient-to-br text-white from-[#25D366] via-[#25D366] to-[#00E676] border-foregound border"
            )}
          >
            <MdEmail size={17} /> Email
          </Link>
        </div>
      </div>
    </div>
  );
}
