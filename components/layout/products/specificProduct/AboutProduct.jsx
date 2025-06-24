import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    SectionHeading2,
    SectionHeadingSmall,
    SectionPara1,
} from "../../SectionComponents";

const AboutProduct = () => {
    return (
        <section className="w-full relative padding flex flex-col-reverse gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between">
            <div className="block space-y-6 md:space-y-8 max-w-sm w-full md:w-1/2 relative">
                <div className="space-y-5">
                    <SectionHeadingSmall text={"Industrial Seals and Bearings"} />
                    <SectionHeading2 text={"Plain Bearings"} />
                </div>
                <SectionPara1
                    text={
                        "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line."
                    }
                    clamp
                />
                <button
                    role="button"
                    type={"button"}
                    title={"Read More"}
                    className={`before:absolute z-10 before:content-[''] w-max before:-z-10 relative before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-success clip-pathHero2 before:w-full before:h-14 before:py-3 hover:before:w-[125%] cursor-pointer before:transition-[width] before:duration-300 h-12 px-6 text-white`}
                >
                    <Link href={"/contact"}>Request Quote</Link>
                </button>
            </div>
            <div className="w-full md:w-1/2 relative flex flex-col md:flex-row items-center justify-center gap-5">
                <Image
                    src={"/products/product-6.png"}
                    alt={"Plain Bearings"}
                    title={"Plain Bearings"}
                    width={100}
                    height={100}
                    className="object-contain object-top h-80 w-full md:w-60 md:h-56 lg:w-80 lg:h-80 xl:size-96"
                    loading="lazy"
                />
                <div className="flex flex-row justify-center items-center gap-5 md:flex-col">
                    <Image
                        src={"/products/product-6.png"}
                        alt={"Plain Bearings"}
                        title={"Plain Bearings"}
                        width={100}
                        height={100}
                        className="object-contain object-top size-24 md:w-full md:h-20 lg:size-32 xl:size-36 flex-shrink-0"
                        loading="lazy"
                    />
                    <Image
                        src={"/products/product-6.png"}
                        alt={"Plain Bearings"}
                        title={"Plain Bearings"}
                        width={100}
                        height={100}
                        className="object-contain object-top size-24 md:w-full md:h-20 lg:size-32 xl:size-36 flex-shrink-0"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutProduct;
