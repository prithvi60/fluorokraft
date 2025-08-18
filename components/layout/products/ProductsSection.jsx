"use client";
import React, { useEffect } from "react";
import { SectionPara1 } from "../SectionComponents";
import {
    fluoroProducts,
    productCategorySpecificDetails,
    productsTabsLists,
} from "@/utils/Data";
import Image from "next/image";
import { UnderlineAnimation } from "@/components/UI/Button";
import { AccordionSplitted } from "@/components/UI/AccordionSplitted";
import { useState } from "react";
import NestedDropdown from "@/components/UI/NestedDropdown";

const ProductsSection = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(null);
    const [dataCollection, setDataCollection] = useState(
        productCategorySpecificDetails
    );

    useEffect(() => {
        if (isActiveIndex) {
            let filteredData;

            if (
                isActiveIndex === "Butterfly Valve PTFE Seats" ||
                isActiveIndex === "PTFE Encapsulated Discs"
            ) {
                filteredData = productCategorySpecificDetails.filter(
                    (val) => val.subTitle === "Butterfly Valve PTFE Seats and PTFE Encapsulated Discs"
                );
            } else {
                // Default single filter logic
                filteredData = productCategorySpecificDetails.filter(
                    (val) =>
                        val.mainTitle === isActiveIndex ||
                        val.subTitle === isActiveIndex ||
                        val.title === isActiveIndex
                );
            }

            setDataCollection(filteredData);
        } else {
            setDataCollection(productCategorySpecificDetails);
        }
    }, [isActiveIndex]);

    return (
        <section className="w-full flex flex-col sm:flex-row gap-16 padding">
            <div className="w-full sm:w-2/5 lg:w-1/5">
                <div className="space-y-3">
                    <h2 className="font-semi tracking-wider text-lg md:text-xl bg-success px-4 py-2 rounded-md w-full text-white">
                        Product Categories
                    </h2>
                    <NestedDropdown setIsActiveIndex={setIsActiveIndex} />
                </div>
            </div>
            {dataCollection.length > 0 ? (
                <div className="w-full sm:h-3/5 lg:w-4/5 space-y-6 md:space-y-9 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {dataCollection.map((item, index) => (
                        <div className="w-full h-fit space-y-2.5" key={index}>
                            <Image
                                src={item.mainImg}
                                alt={item.subTitle}
                                title={item.subTitle}
                                width={100}
                                height={100}
                                className="object-contain object-top size-full lg:size-80 xl:size-96"
                                loading="lazy"
                            />
                            <h3 className="font-medium text-lg md:text-xl tracking-wider">
                                {item.subTitle}
                            </h3>
                            {typeof item.desc === "string" && !item.desc.includes("<br/>") ? (
                                <div className="text-base text-foreground">
                                    {`${item.desc.substring(0, 150)}...`}
                                </div>
                            ) : (
                                <div className="text-base text-foreground">
                                    {`${item.desc2.substring(0, 150)}..`}
                                </div>
                            )}
                            {/* <DescriptionRenderer desc={item.desc} /> */}
                            <UnderlineAnimation
                                text={"Know More"}
                                href={`/products/${(item?.subTitle ?? "")
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-[50vh] lg:w-4/5 flex justify-center items-center">
                    <SectionPara1
                        text={"Currently, there are no products available"}
                        color={"text-foreground font-semibold"}
                    />
                </div>
            )}
        </section>
    );
};

export default ProductsSection;

export const ProductsSectionSideTabs = ({
    color,
    data,
    blog,
    setIsActiveIndex,
}) => {
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
                            onClick={() => setIsActiveIndex(item)}
                            type="button"
                            className={`cursor-pointer text-left ${blog ? "text-sm" : "text-sm md:text-base"}`}
                        >
                            <p className={`text-foreground`}>{item}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
