import Image from "next/image";
import React from "react";
import { SectionHeadingSmall, SectionPara1 } from "../SectionComponents";
import { ImageComponent } from "@/components/UI/ImageComponent";

const OurMission = () => {
    return (
        <section className="w-full relative padding bg-info clip-pathHeroBottom text-background">
            <div className="flex flex-col gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between">
                <div className="w-full md:w-3/5 space-y-8">
                    <div className="w-full flex justify-between gap-10 lg:gap-20">
                        <SectionHeadingSmall text={"Our Mission"} color />
                        <div className="block space-y-4">
                            <SectionPara1
                                text={
                                    "We transform the impossible into the inevitable. By pushing the boundaries of polymer science, we create solutions that dont just meet todays industrial challenges—we anticipate tomorrows. Our mission is to be the innovation partner that turns your most complex requirements into competitive"
                                }
                                color={"text-background"}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/5">
                    <ImageComponent src={"/mission.svg"} alt={"our mission"} />
                </div>
            </div>
            <div className="block space-y-8 md:space-y-12">
                <div>
                    <SectionHeadingSmall text={"Our Values"} color />
                </div>
                <div>
                    <ul className="space-y-3 md:space-y-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-0">
                        {data.map((list, idx) => (
                            <li className="space-y-1 max-w-lg xl:max-w-2xl" key={idx}>
                                <h2 className="text-lg md:text-xl font-semibold tracking-wide capitalize">
                                    {list.title}
                                </h2>
                                <p className="text-base font-normal">{list.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OurMission;

const data = [
    {
        title: "Relentless Innovation",
        desc: "We dont just improve existing solutions; we reimagine whats possible. Every project is an opportunity to push boundaries.",
    },
    {
        title: "Partnership Over Transactions",
        desc: "Your success is our success. We invest in understanding your industry as deeply as you do, becoming an extension of your engineering team.",
    },
    {
        title: "Precision with Purpose",
        desc: "Quality isn't just about meeting specifications its about delivering solutions that perform flawlessly in real-world conditions, every single time.",
    },
    {
        title: "Sustainable Excellence",
        desc: "We build for the long term, creating solutions that benefit both your operations and the environment, proving that high performance and sustainability aren’t mutually exclusive.",
    },
];
