"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SectionPara1 } from "../layout/SectionComponents";

export const AccordionSplitted = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            {data.map((item, index) => (
                <div key={index} className="mb-2">
                    <button
                        type="button"
                        aria-label="products tabs lists"
                        aria-expanded={activeIndex === index}
                        aria-controls={`accordion-content-${index}`}
                        className={`w-full flex justify-between gap-x-4 lg:gap-0 items-center px-4 md:px-6 py-4 md:py-9 ${item.title === "Precision Components" || item.title === "Fluoropolymers" ? "bg-success" : "bg-transparent"} focus:outline-none cursor-pointer transition-colors ${activeIndex === index ? "rounded-t-lg" : "rounded-lg"
                            }`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span
                            className={`font-medium font-mono text-[15px] tracking-wider ${item.title === "Precision Components" || item.title === "Fluoropolymers" ? "text-background bg-success" : "text-foreground"} w-full`}
                        >
                            {item.title}
                        </span>
                        <span className="text-gray-600">
                            {activeIndex === index ? (
                                <IoIosArrowDown
                                    className={`mt-[0.6px] rotate-180 duration-500`}
                                />
                            ) : (
                                <IoIosArrowDown className={`mt-[0.6px] duration-500`} />
                            )}
                        </span>
                    </button>
                    <div
                        id={`accordion-content-${index}`}
                        className={`overflow-hidden transition-all duration-500 ${item.title === "Precision Components" || item.title === "Fluoropolymers" ? "bg-[#F6F6F5]" : "bg-transparent"} ${activeIndex === index ? "max-h-screen rounded-b-lg" : "max-h-0"
                            }`}
                    >
                        <ul className="block space-y-4 p-6">
                            {item.lists.map((item, index) => (
                                <li key={index} className="!font-medium">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-center w-full"
                                    >
                                        <SectionPara1 text={item} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};
