"use client";
import { useState } from "react";
import { SectionPara1 } from "./SectionComponents";
import { SpringModal } from "../UI/SpringModal";
import { materialCards, materialCardsLists, productsTabsLists } from "@/utils/Data";
import { AccordionSplitted } from "../UI/AccordionSplitted";
import { ProductsSectionSideTabs } from "./products/ProductsSection";
import Dropdown from "../UI/Dropdown";

const MaterialsCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActiveIndex, setIsActiveIndex] = useState(null);
    console.log(isActiveIndex);

    return (
        <section className="w-full flex flex-col sm:flex-row gap-5 padding">
            <div className="w-full sm:w-2/5 lg:w-1/5">
                <div className="space-y-6 md:space-y-9 hidden sm:block">
                    <ProductsSectionSideTabs color={true} data={materialCardsLists[0]} />
                    <ProductsSectionSideTabs data={materialCardsLists[1]} />
                    <ProductsSectionSideTabs data={materialCardsLists[2]} />
                    <ProductsSectionSideTabs data={materialCardsLists[3]} />
                </div>
                <div className="space-y-6 md:space-y-9 block sm:hidden">
                    <AccordionSplitted data={materialCardsLists} />
                </div>
            </div>
            <div className="w-full h-full lg:w-4/5 flex items-center gap-x-20 gap-y-16 md:gap-y-32 flex-wrap mb-20">
                {materialCards.map((item, index) => (
                    <div className="relative min-w-full md:min-w-64 h-full " key={index}>
                        <Dropdown item={item} index={index} card setIsOpen={setIsOpen} setIsActiveIndex={setIsActiveIndex} />
                    </div>
                    // <div
                    //     className="block space-y-6 md:space-y-8 max-w-sm sm:p-6"
                    //     key={index}
                    // >
                    //     <h2 className="text-[clamp(1.125rem,3vw,2rem)] leading-6 MD:leading-10 tracking-wider capitalize">
                    //         {item.title}
                    //     </h2>
                    //     <SectionPara1 text={item.detail1} clamp />
                    //     <button
                    //         aria-label="Read More"
                    //         type={"button"}
                    //         title={"Read More"}
                    //         className={`before:absolute z-10 before:content-[''] w-max before:-z-10 relative before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-success clip-pathHero2 before:w-full before:h-14 before:py-3 hover:before:w-[125%] cursor-pointer before:transition-[width] before:duration-300 h-12 px-6 text-white`}
                    //         onClick={() => {
                    //             setIsOpen(true);
                    //             setIsActiveIndex(index);
                    //         }}
                    //     >
                    //         Read More
                    //     </button>
                    // </div>
                ))}
                <SpringModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    data={materialCards[isActiveIndex] || {}}
                />
            </div>
        </section>
    );
};

export default MaterialsCard;
