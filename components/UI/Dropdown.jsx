"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SectionPara1 } from "../layout/SectionComponents";

const Dropdown = ({ item, index, card }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            className={`w-full h-full absolute left-0 ${card ? "-bottom-6" : "-bottom-52 md:-bottom-36 lg:-bottom-48 xl:-bottom-60"}`}
        >
            <div className="relative w-full">
                <button
                    type="button"
                    aria-label="why Fluorokraft FAQ's"
                    aria-expanded={activeIndex === index}
                    aria-controls={`accordion-content-${index}`}
                    className={`w-full flex relative z-10 justify-between items-center focus:outline-none cursor-pointer transition-colors bg-white/90 backdrop-blur-sm ${card && "p-3"}`}
                    onClick={() => toggleAccordion(index)}
                >
                    <span className="text-start text-base md:text-lg leading-6 font-semibold w-[200px] truncate">
                        {item.title}
                    </span>
                    <span className="text-gray-600 transition-transform duration-300 shrink-0">
                        {activeIndex === index ? (
                            <IoIosArrowUp className="text-black" />
                        ) : (
                            <IoIosArrowDown className="text-black" />
                        )}
                    </span>
                </button>
                {card ? (
                    <div
                        id={`accordion-content-${index}`}
                        className={`absolute z-20 left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index
                            ? "max-h-screen opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-2"
                            }`}
                    >
                        <div className="py-6 px-3">
                            <div className="block space-y-6 md:space-y-8 max-h-[420px] overflow-y-scroll h-full">
                                <div className="space-y-1">
                                    <SectionPara1 text={item.detail1} />

                                    {item.title === "DELRIN" && (
                                        <ul className="space-y-1 w-full list-disc pl-5 list-outside">
                                            {item.lists.map((list, idx) => (
                                                <li className="text-base" key={idx}>
                                                    {list}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <SectionPara1 text={item.detail2} />
                                    {item.title === "PEEK" && (
                                        <ul className="space-y-1 w-full list-disc pl-5 list-outside">
                                            {item.lists.map((list, idx) => (
                                                <li className="text-base" key={idx}>
                                                    {list}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        id={`accordion-content-${index}`}
                        className={`absolute z-20 left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index
                            ? "max-h-screen opacity-100 translate-y-0"
                            : "max-h-0 opacity-0 -translate-y-2"
                            }`}
                    >
                        <div className="p-4 space-y-4">
                            {item.lists.map((listItem, listIndex) => (
                                <div className="block" key={listIndex}>
                                    <SectionPara1 text={listItem} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
