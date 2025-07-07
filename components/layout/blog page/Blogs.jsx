import Image from "next/image";
import React from "react";
import { ProductsSectionSideTabs } from "../products/ProductsSection";
import { AccordionSplitted } from "@/components/UI/AccordionSplitted";
import { UnderlineAnimation } from "@/components/UI/Button";
import { SectionPara1 } from "../SectionComponents";

const Blogs = ({ posts }) => {
    return (
        <section className="padding w-full flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-2/5 lg:w-1/5">
                <div className="space-y-6 md:space-y-9 hidden sm:block">
                    <ProductsSectionSideTabs color={true} data={recentLists[0]} blog={true} />
                </div>
                <div className="space-y-6 md:space-y-9 block sm:hidden">
                    <AccordionSplitted data={recentLists} />
                </div>
            </div>
            <div className="w-full lg:w-4/5 space-y-10 md:space-y-16">
                <div className="grid grid-cols-1 max-w-xs mx-auto sm:max-w-full md:grid-cols-2 place-content-center place-items-center xl:grid-cols-3 gap-8">
                    {posts.map((item, idx) => {
                        const formattedDate = new Date(item.publishedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        });

                        return (
                            <div className="w-full space-y-2.5 md:space-y-4" key={idx}>
                                <Image
                                    title={item.imageAlt}
                                    src={item.imageUrl}
                                    alt={item.imageAlt}
                                    width={100}
                                    height={100}
                                    className="object-cover object-top w-full h-full clip-pathHero"
                                    loading="lazy"
                                />
                                <h2 className="text-base font-medium tracking-wider md:text-lg">
                                    {formattedDate}
                                </h2>
                                <h3 className="font-medium capitalize text-lg md:text-xl tracking-wider">
                                    {item.title}
                                </h3>
                                <SectionPara1 text={item.blogShortRead} />
                                <p className="text-base text-foreground">{item.desc}</p>
                                <UnderlineAnimation text={"Read More"} href={`/blog/${item.slug.current}`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Blogs;

const recentLists = [
    {
        title: "Recent Posts",
        lists: [
            "Hospital CEOs:Are You Bleeding Money Without Knowing It?",
            "Is Your Costing Method Killing Profits Why Absorption Costing is Obsolete for Forging Units",
            "Are OEMs Exploiting Your Blind Spots You’re Under-pricing Every Job.",
            "Hospital CEOs:Are You Bleeding Money Without Knowing It?",
        ],
    },
]