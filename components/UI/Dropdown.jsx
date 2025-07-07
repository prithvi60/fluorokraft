"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SectionPara1 } from "../layout/SectionComponents";

const Dropdown = ({ item, index, card, setIsOpen, setIsActiveIndex }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full h-full absolute -bottom-10 left-0">
            <div className="relative w-full h-full">
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
                <div
                    id={`accordion-content-${index}`}
                    className={`absolute z-20 left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index
                        ? "max-h-screen opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                        }`}
                >
                    {card ? (
                        <div className="block space-y-6 md:space-y-8 max-w-sm p-3 sm:p-6">
                            <SectionPara1 text={item.detail1} clamp />
                            <button
                                aria-label="Read More"
                                type={"button"}
                                title={"Read More"}
                                className={`before:absolute z-10 before:content-[''] w-max before:-z-10 relative before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-success clip-pathHero2 before:w-full before:h-14 before:py-3 hover:before:w-[125%] cursor-pointer before:transition-[width] before:duration-300 h-12 px-6 text-white`}
                                onClick={() => {
                                    setIsOpen(true);
                                    setIsActiveIndex(index);
                                }}
                            >
                                Read More
                            </button>
                        </div>
                    ) : (

                        <div className="p-4 space-y-4">
                            {item.lists.map((listItem, listIndex) => (
                                <div className="block" key={listIndex}>
                                    <SectionPara1 text={listItem} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
