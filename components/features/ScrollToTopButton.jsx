"use client"
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;

      setIsVisible(scrollTop > viewportHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative w-fit inline-block pb-0.5 overflow-hidden group capitalize text-base md:text-lg font-medium cursor-pointer"
        >
          Back to top
          <div className="absolute bottom-0 left-0 w-[250%] h-0.5 bg-background transition-transform duration-400 ease-in -translate-x-[60%] group-hover:translate-x-0 clip-path-cut" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
