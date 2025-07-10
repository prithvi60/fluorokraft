import React from "react";
import ListOfCategory from "./ListOfCategory";
import { qualityLists } from "@/utils/Data";
import { Stat } from "../UI/Counter";

const QualitySection = () => {
    return (
        <section className="w-full h-full padding flex flex-col gap-5 md:flex-row md:justify-between xl:gap-6 bg-[#EDEDED]">
            <div className="w-full md:w-3/5">
                <ListOfCategory
                    title={"Quality"}
                    desc={
                        `Fluorokraft delivers consistent performance through long-standing client partnerships, agile delivery systems, and a smart stock-and-serve strategy that keeps production running without interruption.`
                    }
                    data={qualityLists}
                    href={""}
                    image={"/quality-icon.svg"}
                />
            </div>
            <div className="w-full md:w-2/5 pt-20 text-center md:text-start">
                <ul className="space-y-14 mx-auto max-w-96">
                    {data.map((list, idx) => (
                        <li className="space-y-1" key={idx}>
                            <Stat num={list.count} suffix={list.countType} />
                            <p className="text-base font-normal tracking-wide">{list.para}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default QualitySection;

const data = [
    {
        count: 0,
        countType: "",
        para: "Near Zero Defects Across Millions of Components Supplied",
    },
    { count: 98, countType: "%", para: "On-time Delivery" },
    { count: 100, countType: "%", para: "Customer Retention" },
];
