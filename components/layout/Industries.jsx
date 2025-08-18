import Image from "next/image";
import React from "react";
import { industriesData } from "@/utils/Data";
import Link from "next/link";

const Industries = () => {
    return (
        <section className="w-full h-full padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative max-w-[1224px] mx-auto mb-8 md:mb-10">
            {industriesData.map((item, idx) => (
                <div className="block space-y-2 relative" key={idx}>
                    <Image
                        src={item.img}
                        alt={item.title}
                        title={item.title}
                        width={100}
                        height={100}
                        className="object-cover w-full h-64 xl:h-72 flex-shrink-0 clip-pathHero"
                        loading="lazy"
                    />
                    <div className="space-y-2 pt-3">
                        <h2 className="text-start text-xl md:text-2xl leading-6 md:leading-8 font-medium line-clamp-2 ">
                            {item.title}
                        </h2>
                        <p className={`text-base md:text-lg text-foreground line-clamp-3`}>
                            {item.para}
                        </p>
                        <Link
                            href={`/industries/${item.href}`}
                            className="underline text-[#417ea4] underline-offset-2 "
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Industries;
