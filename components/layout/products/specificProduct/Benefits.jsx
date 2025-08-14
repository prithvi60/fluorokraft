import React from "react";
import {
    SectionHeading2,
    SectionHeadingSmall,
    SectionPara1,
} from "../../SectionComponents";

const Benefits = ({ data }) => {
    return (
        <section className="w-full relative padding flex flex-col gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between bg-[#F7F7F7]">
            <SectionWrapper count={"01"} title={"Benefits"} data={data.benefits} />
            <SectionWrapper
                count={"02"}
                title={"Applications"}
                data={data.applications}
            />
        </section>
    );
};

export default Benefits;

const SectionWrapper = ({ count, title, data }) => {
    return (
        <div className="w-full md:w-1/2 space-y-8 md:space-y-16">
            <div className="space-y-5">
                <SectionHeadingSmall text={count} />
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

const benefitsLists = [
    "Longest lasting, continuous use gasket on the market",
    "Will not come apart at the inside seam",
    "Sealing surface material permanently bonded to gasket body",
];
const applicationsLists = [
    "Specifically for FRP and plastic piping systems",
    "Minimal torque required to seal",
    "100% pure virgin TFM® or PTFE sealing surface",
    "Totally Bonded Elastomer and TFM® or PTFE Construction",
    "65 to 75 Durometer Elastomer",
    "Typical compression set values of 15% or better",
    "Continuous, no “seam,” radius style TFM or PTFE envelope",
    "Thickest available TFM® or PTFE shield without sacrificing compression set properties",
    "Available in Old Standard sizes 1/2″ to 24″",
    "Available upon request in New Standard sizes 1/2″ to 12″",
    "For temperatures of -40º F (-40º C) to 300º F (149º C)",
    "Totally non-asbestos construction",
];
