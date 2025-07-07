"use client"
import React from "react";
import dynamic from "next/dynamic";
import { CategorySliderLoading } from "./CategorySlider";
const CategorySliderComponent = dynamic(() => import('./CategorySlider'), {
    loading: () => <CategorySliderLoading />,
    ssr: false // Optional: Disable server-side rendering for this component
});

const HomeHero = () => {
    return (
        <section className="w-full h-full bg-[#2C3E50] p-5">
            <CategorySliderComponent />
            {/* <div className="w-full h-full padding space-y-4 md:space-y-8 pb-5 border-b-2 border-zinc-600">
                <div className="w-full md:w-3/5">
                    <SectionHeading1
                        text={"Engineering Precision Polymer Components"}
                        color={"text-background"}
                    />
                </div>
                <SectionPara1
                    text={
                        "Fluorokraft engineers mission-critical polymer components with zero-defect precision for the worlds most demanding applications, delivering measurable results that extend equipment lifecycles by 40% and reduce operational costs by 70% . Trusted by global OEMs for over  solutions that keep critical systems running from aerospace to deep-sea operations."
                    }
                    color={"text-background "}
                    hero
                />
            </div> */}
            {/* <div className="w-full h-full p-5">
                <CategorySlider />
                <Image
                    width={1200}
                    height={860}
                    src={"/hero-bg.jpg"}
                    alt="fluorokraft product"
                    title="fluorokraft product"
                    className="object-cover object-center w-full h-[420px] md:h-[80dvh] overflow-hidden clip-pathHero"
                    priority
                    loading="eager"
                    sizes="calc(100vw - 40px)"
                />
            </div> */}
        </section>
    );
};

export default HomeHero;
