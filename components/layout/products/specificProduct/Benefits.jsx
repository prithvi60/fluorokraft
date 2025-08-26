import React from "react";
import {
    SectionHeading2,
    SectionHeadingSmall,
    SectionPara1,
} from "../../SectionComponents";

const Benefits = ({ data }) => {
    return (
        <section className="w-full relative padding flex flex-col gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between bg-[#F7F7F7]">
            <SectionWrapper title={"Benefits"} data={data.benefits} />
            <SectionWrapper
                title={"Applications"}
                data={data.applications}
            />
        </section>
    );
};

export default Benefits;

export const SectionWrapper = ({ title, data }) => {
    return (
        <div className="w-full md:w-1/2 space-y-8 md:space-y-16">
            <div className="space-y-5">
                <SectionHeading2 text={title} />
            </div>
            <div className="w-full flex justify-between gap-10 lg:gap-20">
                <ul className="block space-y-1 list-['-'] list-outside">
                    {data.map((item, index) => (
                        <li className="pl-2 ml-2.5" key={index}>
                            <SectionPara1 text={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
