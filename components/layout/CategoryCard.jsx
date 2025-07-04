import Image from "next/image";
import React from "react";
import { SectionPara1 } from "./SectionComponents";
import Link from "next/link";
import { categories } from "@/utils/Data";
import { ImageComponent } from "../UI/ImageComponent";

const CategoryCard = () => {
    return (
        <section className="w-full h-full padding grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-4 bg-[#EDEDED]">
            {categories.map((list, idx) => (
                <div key={idx} className="sm:last:col-span-2 last:lg:col-auto overflow-hidden">
                    <Link
                        passHref
                        href={list.href}
                        aria-label="Fluorokraft categories with image"
                        className="space-y-4 group shadow scroll-smooth"
                    >
                        <ImageComponent src={list.img} alt={list.categoryName} />
                        <span
                            className={`capitalize absolute bottom-2 left-3 text-2xl md:text-[40px] ${list.categoryName === "Products" ? "text-white" : ""} `}
                        >
                            {list.categoryName}
                        </span>
                        <SectionPara1 text={list.desc} />
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default CategoryCard;
