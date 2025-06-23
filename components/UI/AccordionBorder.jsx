"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { SectionPara1 } from "../layout/SectionComponents";

const AccordionBorder = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <div key={index} className="mb-2 border-b-2 border-black/35">
                    <button
                        role="button"
                        aria-expanded={activeIndex === index}
                        aria-controls={`accordion-content-${index}`}
                        className={`w-full flex justify-between gap-x-4 lg:gap-0 items-center py-4 md:py-6 focus:outline-none cursor-pointer transition-colors`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-start text-[clamp(1.25rem,5vw,2rem)] leading-10 sm:leading-12 xl:leading-14 font-semibold">
                            {item.ques}
                        </span>
                        <span className="text-gray-600 transition-transform duration-500">
                            {activeIndex === index ? (
                                <FaMinus
                                    className={`mt-[0.6px] rotate-180 duration-500 text-black`}
                                />
                            ) : (
                                <FaPlus className={`mt-[0.6px] duration-500 text-black`} />
                            )}
                        </span>
                    </button>
                    <div className={` ${activeIndex === index ? "mb-6" : "mb-2"
                        }`}>
                        <SectionPara1 text={item.shortAns} />
                    </div>
                    <div
                        id={`accordion-content-${index}`}
                        className={`overflow-hidden space-y-7 mb-10 transition-all duration-500 ${activeIndex === index ? "max-h-96" : "max-h-0"
                            }`}
                    >
                        {item.lists.map((listItem, listIndex) => (
                            <div className="block space-y-1" key={listIndex}>
                                <SectionPara1 text={listItem.title} />
                                <ul className="list-disc list-outside pl-4 space-y-1">
                                    {listItem.points.map((point, pointIndex) => (
                                        <li key={pointIndex}>
                                            <SectionPara1 text={point} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <SectionPara1 text={item.para} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionBorder;
