import React from "react";
import { SectionPara1 } from "./SectionComponents";
import { UnderlineAnimation } from "../UI/Button";
import Image from "next/image";

const ListOfCategory = ({ title, desc, data, href, image }) => {
    return (
        <div className={`block w-full h-full space-y-8 md:space-y-12 ${title === "Innovation" ? "text-background" : ""}`}>
            <div className="w-full flex items-center gap-3">
                <Image
                    width={50}
                    height={50}
                    src={image}
                    alt={title}
                    title={title}
                    className="object-cover object-center size-8 md:size-12 clip-pathHero"
                    loading="lazy"
                />
                <h2 className="text-[clamp(1.5rem,5vw,2.85rem)] leading-10 sm:leading-12 xl:leading-20 font-bold">
                    {title}
                </h2>
            </div>
            <div className="w-full md:w-3/4">
                <SectionPara1 text={desc} color={title === "Innovation" && "text-background"} />
            </div>
            <ul className="space-y-3 md:space-y-6 w-full lg:w-3/5">
                {data.map((list, idx) => (
                    <li className="space-y-1" key={idx}>
                        <h3 className="text-xl md:text-2xl font-semibold tracking-wide capitalize">
                            {list.title}
                        </h3>
                        <p className="text-base font-normal">{list.desc}</p>
                    </li>
                ))}
            </ul>
            <div>
                <UnderlineAnimation text={"Know More"} href={href} opt={title === "Innovation"} />
            </div>
        </div>
    );
};

export default ListOfCategory;
