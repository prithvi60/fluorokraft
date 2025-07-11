"use client";
import { useEffect, useState } from "react";
import {
    materialCards,
    materialCardsLists,
    productsTabsLists,
} from "@/utils/Data";
import { AccordionSplitted } from "../UI/AccordionSplitted";
import { ProductsSectionSideTabs } from "./products/ProductsSection";
import Dropdown from "../UI/Dropdown";
import { SectionPara1 } from "./SectionComponents";

const MaterialsCard = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(null);
    const [dataCollection, setDataCollection] = useState(materialCards);

    // Filter the data based on the active index
    const filteredData = isActiveIndex
        ? materialCards.filter((val) => val.title === isActiveIndex)
        : materialCards;

    // Update dataCollection when isActiveIndex changes
    useEffect(() => {
        setDataCollection(filteredData);
    }, [isActiveIndex]);

    return (
        <section className="w-full flex flex-col sm:flex-row gap-5 padding">
            <div className="w-full sm:w-2/5 lg:w-1/5">
                <div className="space-y-6 md:space-y-9 hidden sm:block">
                    <ProductsSectionSideTabs
                        color={true}
                        data={materialCardsLists[0]}
                        setIsActiveIndex={setIsActiveIndex}
                    />
                    <ProductsSectionSideTabs
                        data={materialCardsLists[1]}
                        setIsActiveIndex={setIsActiveIndex}
                    />
                    <ProductsSectionSideTabs
                        data={materialCardsLists[2]}
                        setIsActiveIndex={setIsActiveIndex}
                    />
                    <ProductsSectionSideTabs
                        data={materialCardsLists[3]}
                        setIsActiveIndex={setIsActiveIndex}
                    />
                </div>
                <div className="space-y-6 md:space-y-9 block sm:hidden">
                    <AccordionSplitted
                        data={materialCardsLists}
                        setIsActiveIndex={setIsActiveIndex}
                    />
                </div>
            </div>
            {dataCollection.length > 0 ? (
                <div className="w-full h-full lg:w-4/5 flex items-center gap-x-20 gap-y-16 md:gap-y-32 flex-wrap mb-20">
                    {dataCollection.map((item, index) => (
                        <div
                            className="relative min-w-full md:min-w-64 h-full "
                            key={index}
                        >
                            <Dropdown item={item} index={index} card />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-[50vh] lg:w-4/5 flex justify-center items-center">
                    <SectionPara1
                        text={"Currently, there are no materials available"}
                        color={"text-foreground font-semibold"}
                    />
                </div>
            )}
        </section>
    );
};

export default MaterialsCard;
