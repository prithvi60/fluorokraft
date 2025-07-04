"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function DesktopMenu({ menu, path }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <li
      className={`group/link relative font-medium tracking-wide`}
      key={menu.menu}
    >
      <Link
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        title={menu.menu}
        aria-label={menu.menu}
        href={menu.link || ""}
        className={`flex capitalize items-center text-background`}
        passHref
        itemProp="url"
      >
        {menu.menu}
        <span
          className={`absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-background transition-transform duration-500 ease-out ${isHover ? "scale-x-100 origin-left" : "scale-x-0 origin-right"}`}
        />
      </Link>
    </li>
  );
}
