import React from "react";
import {
    SectionHeading2,
    SectionHeadingSmall,
    SectionPara1,
} from "../SectionComponents";
import Image from "next/image";

const OurStory = () => {
    return (
        <section className="w-full relative padding flex flex-col gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between">
            <div className="w-full md:w-3/5 space-y-8">
                <SectionHeading2
                    text={"Established Strength Guiding the Next Industrial Wave"}
                />
                <div className="w-full flex justify-between gap-10 lg:gap-20">
                    <SectionHeadingSmall text={"Our Story"} />
                    <div className="block space-y-4">
                        {data.map((item, index) => (
                            <SectionPara1 text={item} key={index} color={"text-foreground"} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/5">
                <div className="w-full h-80 md:h-96 xl:size-[450px] 2xl:size-[530px] relative clip-pathImg overflow-hidden group">
                    <Image
                        fill
                        src={"/story-img.png"}
                        alt={"our story"}
                        title={"our story"}
                        className="object-cover object-center group-hover:scale-110 transition-all duration-500"
                        sizes="(min-width: 1540px) 530px, (min-width: 1280px) 450px, (min-width: 1040px) calc(40vw - 32px), (min-width: 780px) calc(9.58vw + 278px), (min-width: 420px) calc(100vw - 24px), calc(82vw + 48px)"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurStory;

const data = [
    "In 1989, a young plastic engineer in Chennai faced a problem that would spark a revolution. While working on a critical aerospace component, he discovered that traditional materials simply couldnt withstand the extreme conditions required. After months of experimenting in a small garage workshop, mixing polymers with help of friendly suppliers, he created a breakthrough solution that not only met the specifications but exceeded them by 200%.",
    "That engineer was our founder, and that garage became the birthplace of Fluorokraft.",
    "What started as one person’s refusal to accept impossible has grown into a leading precision polymer component manufacturer trusted by industries across the globe. For over 35 years, we’ve maintained that same spirit of relentless problem-solving, turning complex challenges into elegant solutions that our clients didn’t even know were possible.",
    "Every component we manufacture today carries the DNA of that first breakthrough the belief that there is always a better way, and we wont stop until we find it.",
];
