import React from "react";
import { SectionPara1 } from "../SectionComponents";
import { fluoroProducts, productsTabsLists } from "@/utils/Data";
import Image from "next/image";
import { UnderlineAnimation } from "@/components/UI/Button";
import { AccordionSplitted } from "@/components/UI/AccordionSplitted";

const ProductsSection = () => {
    return (
        <section className="w-full flex flex-col sm:flex-row gap-5 padding">
            <div className="w-full sm:w-2/5 lg:w-1/5">
                <div className="space-y-6 md:space-y-9 hidden sm:block">
                    <ProductsSectionSideTabs color={true} data={productsTabsLists[0]} />
                    <ProductsSectionSideTabs data={productsTabsLists[1]} />
                    <ProductsSectionSideTabs data={productsTabsLists[2]} />
                </div>
                <div className="space-y-6 md:space-y-9 block sm:hidden">
                    <AccordionSplitted data={productsTabsLists} />
                </div>
            </div>
            <div className="w-full sm:h-3/5 lg:w-4/5 space-y-6 md:space-y-9 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {fluoroProducts.map((item, index) => (
                    <div className="w-full h-fit space-y-2.5" key={index}>
                        <Image
                            src={item.img}
                            alt={item.title}
                            title={item.title}
                            width={100}
                            height={100}
                            className="object-contain object-top size-full lg:size-80 xl:size-96"
                            loading="lazy"
                        />
                        <h3 className="font-medium text-lg md:text-xl tracking-wider">
                            {item.title}
                        </h3>
                        <p className="text-base text-foreground">{item.desc}</p>
                        <UnderlineAnimation text={"Know More"} href={item.href} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;

export const ProductsSectionSideTabs = ({ color, data }) => {
    return (
        <div
            className={`w-full h-fit block space-y-4 md:space-y-6 p-6 ${color ? "bg-[#F6F6F5] rounded-lg" : "bg-transparent"}`}
        >
            <h2
                className={`font-medium font-mono text-[15px] tracking-wider ${color ? "text-background bg-success p-2.5 rounded-lg" : "text-foreground"} w-full`}
            >
                {data.title}
            </h2>
            <ul className="block space-y-2">
                {data.lists.map((item, index) => (
                    <li key={index} className="!font-medium">
                        <button
                            type="button"
                            className="cursor-pointer text-left"
                        >
                            <SectionPara1 text={item} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
