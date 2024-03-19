"use client";

import { BiArrowToTop } from "react-icons/bi";
import { Button } from "./ui/button";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Button
          className="fixed w-12 h-12 bottom-4 right-6 rounded-full"
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BiArrowToTop className="size-[240px]"/>
        </Button>
      )}
    </>
  );
}
