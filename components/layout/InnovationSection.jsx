import React from "react";
import ListOfCategory from "./ListOfCategory";
import { innovationLists } from "@/utils/Data";
import Image from "next/image";
import { ImageComponent } from "../UI/ImageComponent";

const InnovationSection = () => {
    return (
        <section
            className="w-full h-full padding flex flex-col gap-5 md:flex-row md:justify-between xl:gap-6 bg-info scroll-mt-[0px] sm:scroll-mt-[-50px]"
            id="innovation"
            name="innovation"
        >
            <div className="w-full md:w-3/5">
                <ListOfCategory
                    title={"Innovation"}
                    desc={
                        "Co-engineering solutions that extend equipment lifecycles by 40% and reduce downtime costs by 70% through breakthrough polymer formulations."
                    }
                    data={innovationLists}
                    href={""}
                    image={"/innovation-icon.svg"}
                />
            </div>
            <div className="w-full md:w-2/5 md:pt-20">
                <ImageComponent src={"/innovation.jpg"} alt={"innovation"} />
            </div>
        </section>
    );
};

export default InnovationSection;
