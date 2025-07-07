import React from "react";
import ListOfCategory from "./ListOfCategory";
import { reliabilityLists } from "@/utils/Data";
import Image from "next/image";
import { ImageComponent } from "../UI/ImageComponent";

const ReliabilitySection = () => {
    return (
        <section className="w-full h-full padding flex flex-col gap-5 md:flex-row md:justify-between xl:gap-6 ">
            <div className="w-full md:w-3/5">
                <ListOfCategory
                    title={"Reliability"}
                    desc={
                        "Fluorokraft delivers consistent performance through long-standing client partnerships, agile delivery systems, and a smart stock-and-serve strategy that keeps production running without interruption."
                    }
                    data={reliabilityLists}
                    href={""}
                />
            </div>
            <div className="w-full md:w-2/5 md:pt-20">
                <ImageComponent src={"/reliability.png"} alt={"Reliability"} />
            </div>
        </section>
    );
};

export default ReliabilitySection;
