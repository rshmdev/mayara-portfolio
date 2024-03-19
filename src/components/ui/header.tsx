"use client";

import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import MenuItems from "@/utils/menu-items";
import { ModeToggle } from "../toggle-theme";
import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed h-auto overflow-x-hidden py-4 top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/45 backdrop-blur z-20">
      <nav className=" flex h-full items-center justify-center px-4 gap-8">
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={"https://github.com/Kiranism/next-shadcn-dashboard-starter"}
            target="_blank"
          >
            <div className="h-full relative">
              <h1 className="flex gap-1 font-medium text-3xl">
                Hailey <strong>Wollf</strong>
              </h1>
            </div>
          </Link>
        </div>
        <div
          className={cn(
            "flex w-full items-center flex-col gap-4 justify-between lg:hidden"
          )}
        >
          <div className="h-full flex items-center justify-between w-full gap-4 relative">
            <Sheet>
              <SheetTrigger>
                <RxHamburgerMenu size={25} />
              </SheetTrigger>
              <SheetContent side="left" className="w-[320px] sm:w-[540px]">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <h1 className="flex gap-1 font-medium text-3xl">
                      Hailey <strong>Wollf</strong>
                    </h1>
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-4 flex flex-col gap-2">
                  {MenuItems.map((item, index) => (
                    <ScrollLink
                      className="cursor-pointer"
                      to={item.to}
                      smooth={true}
                      spy={true}
                      offset={0}
                      duration={0}
                      key={index}
                    >
                      <span className="px-2 py-3 transition-all flex items-start hover:bg-black hover:bg-opacity-15 rounded-lg">
                        <span className="whitespace-nowrap flex-1 text-base text-left">
                          {item.Name}
                        </span>
                      </span>
                    </ScrollLink>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="flex gap-1 font-medium text-3xl">
              Hailey <strong>Wollf</strong>
            </h1>

            <div className="flex items-center gap-4">
              <ModeToggle />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          {MenuItems.map((item, index) => (
            <ScrollLink
              className="cursor-pointer"
              to={item.to}
              smooth={true}
              spy={true}
              offset={0}
              duration={0}
              key={index}
            >
              <span className="px-2 transition-all flex items-start">
                <span className="whitespace-nowrap flex-1 text-base text-left">
                  {item.Name}
                </span>
              </span>
            </ScrollLink>
          ))}
        </div>
        <div className="hidden lg:flex">
          <ModeToggle />
        </div>
      </nav>
    </div>
  );
}
