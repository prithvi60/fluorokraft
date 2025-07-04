"use client";
import React from "react";
import Link from "next/link";
import DesktopMenu from "../UI/DesktopMenu";
import MobMenu from "../UI/MobMenu";
import { navLinks } from "@/utils/Data";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname()

  return (
    <header
      className={`px-5 md:px-10 py-6 md:py-4 text-lg static flex items-center ${path !== "/" ? "bg-info" : "bg-[#2C3E50]"} !border-none shadow-none`}
    >
      <nav className="flex justify-between items-center w-full">
        <Link href="/" aria-label="logo" title="Fluorokraft logo" passHref>
          <Image
            width={100}
            height={100}
            src={"/fluorokraft-logo.svg"}
            alt="Fluorokraft logo"
            priority
            loading="eager"
            quality={80}
            className="md:w-52 w-44 h-16"
          />
        </Link>
        {/* navbar menu lists */}
        <div className="flex items-center gap-0.5 sm:gap-x-3.5 xl:gap-x-5">
          <ul className="gap-x-5 lg:!flex items-center hidden">
            {navLinks.map((menu, idx) => (
              <DesktopMenu key={idx} menu={menu} path={path} />
            ))}
          </ul>
          <div className="md:ml-4 flex items-center">
            <div className="lg:!hidden ml-2">
              <MobMenu Menus={navLinks} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
