"use client"
import React, { useState } from "react";
import { SectionHeading2, SectionPara1 } from "../SectionComponents";
import { leadershipTeam } from "@/utils/Data";

const OurLeadership = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="w-full relative padding flex flex-col gap-10 lg:gap-20 md:flex-row items-start justify-between">
            <div className="w-full md:w-2/5 space-y-8 md:space-y-14">
                <SectionHeading2
                    text={"Our Leadership Team"}
                />
                <SectionPara1
                    text={
                        "Led by seasoned industry veterans our leadership team brings together a team having 600 years of collective engineering expertise, having spent 3 decades mastering the art of precision polymer manufacturing for the worlds most demanding applications—with an unwavering track record of delivering exceptional quality, on time, every time."
                    }
                />
            </div>
            <div className="w-full md:w-3/5 space-y-8 md:space-y-14">
                {leadershipTeam.map((leader, index) => (
                    <div
                        className={`flex flex-col w-full items-end border-b-2 border-info/50 pb-8 px-6 transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-25" : "opacity-100 transition-colors duration-500 ease-in-out"
                            }`}
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="block">
                            <h2 className="text-[clamp(1.25rem,5vw,2rem)] leading-8 sm:leading-10 tracking-wider capitalize">
                                {leader.name}
                            </h2>
                            <SectionPara1 text={leader.position} color={hoveredIndex === index ? "opacity-100" : "opacity-50"} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurLeadership;
