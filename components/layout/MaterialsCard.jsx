"use client";
import { useEffect, useState } from "react";
import { materialCards, materialCardsLists } from "@/utils/Data";
import Dropdown from "../UI/Dropdown";
import { SectionPara1 } from "./SectionComponents";
import NestedDropdown from "@/components/UI/NestedDropdown";

const MaterialsCard = () => {
    const [isActiveIndex, setIsActiveIndex] = useState(null);
    const [dataCollection, setDataCollection] = useState(materialCards);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (isActiveIndex) {
            const filteredData = materialCards.filter(
                (val) => val.mainTitle === isActiveIndex || val.title === isActiveIndex
            );

            setDataCollection(filteredData);
        } else {
            setDataCollection(materialCards);
        }
    }, [isActiveIndex]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-full flex flex-col sm:flex-row gap-5 padding">
            <div className="w-full sm:w-2/5 lg:w-1/5">
                <div className="space-y-3">
                    <h2
                        className={`font-semi tracking-wider text-lg md:text-xl bg-success px-4 py-2 rounded-md w-full text-white ${dataCollection.length !== materialCards.length && "cursor-pointer hover:scale-90 hover:transition-all hover:duration-300"}`}
                        onClick={() => setDataCollection(materialCards)}
                    >
                        <span
                            className={`${dataCollection.length !== materialCards.length && "animate-pulse"}`}
                        >
                            Materials Categories
                        </span>
                    </h2>
                    <NestedDropdown
                        setIsActiveIndex={setIsActiveIndex}
                        data={materialCardsLists}
                    />
                </div>
            </div>
            {dataCollection.length > 0 ? (
                <div className="w-full h-full lg:w-4/5 flex items-center gap-x-20 gap-y-16 md:gap-y-32 flex-wrap mb-20">
                    {dataCollection.map((item, index) => (
                        <div className="relative min-w-full md:min-w-64 h-full" key={index}>
                            <Dropdown
                                item={item}
                                index={index}
                                card
                                isActive={activeIndex === index}
                                onToggle={toggleAccordion}
                            />
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
