import React from "react";
import { SectionHeading2, SectionPara1 } from "../SectionComponents";
import Image from "next/image";
import { ImageComponent } from "@/components/UI/ImageComponent";

const WhyChooseFluoroProduct = () => {
    return (
        <section className="w-full h-full padding space-y-8 md:space-y-16 xl:space-y-20">
            <SectionHeading2 text={"Why Choose Our Products"} />
            <div className="flex flex-col-reverse gap-16 md:gap-8 md:flex-row md:justify-between xl:gap-6">
                <div className="w-full md:w-3/5 text-center md:text-start">
                    <ul className="space-y-14 mx-auto md:mx-0 max-w-[420px]">
                        {data.map((list, idx) => (
                            <li className="space-y-1" key={idx}>
                                <h2
                                    className={`text-4xl md:text-6xl tracking-wider font-extrabold`}
                                >
                                    {list.count}
                                </h2>
                                <h3 className="text-xl md:text-2xl tracking-wide font-semibold">
                                    {list.title}
                                </h3>
                                <SectionPara1 text={list.desc} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-2/5">
                    <ImageComponent src={"/ourProduct.jpg"} alt={"product"} whyFluoro />
                    {/* <div className="h-[450px] w-full md:h-[480px] xl:h-[650px] relative clip-pathImg overflow-hidden group">
                        <Image
                            fill
                            src={"/ourProduct.jpg"}
                            alt={"why choose fluorokraft product"}
                            title={"why choose fluorokraft product"}
                            className="object-fill object-top group-hover:scale-110 transition-all duration-500"
                            sizes="(min-width: 780px) calc(40.14vw - 46px), calc(100vw - 40px)"
                            loading="lazy"
                        />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseFluoroProduct;

const data = [
    {
        count: "01",
        title: "Quality Assured",
        desc: "ISO 9001 certified manufacturing processes ensuring every component going through our stringent quality checks",
    },
    {
        count: "02",
        title: "Custom Solutions",
        desc: "Tailored engineering solutions meeting your exact specifications",
    },
    {
        count: "03",
        title: "Technical Support",
        desc: "Expert guidance and support throughout your project lifecycle",
    },
    {
        count: "04",
        title: "Global Delivery",
        desc: "Reliable worldwide shipping with comprehensive logistics support",
    },
];
