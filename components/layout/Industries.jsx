import Image from "next/image";
import React from "react";
import { industrialMaterials } from "@/utils/Data";
import Dropdown from "../UI/Dropdown";

const Industries = () => {
    return (
        <section className="w-full h-full padding flex justify-center items-center flex-wrap gap-20 relative max-w-[1240px] mx-auto mb-8 md:mb-10">
            {industrialMaterials.map((item, idx) => (
                <div className="block space-y-2 min-w-full mx-auto md:min-w-52 relative" key={idx}>
                    <Image
                        src={item.img}
                        alt={item.lists}
                        title={item.lists}
                        width={100}
                        height={100}
                        className="object-cover object-top h-48 w-full md:h-32 lg:size-44 xl:size-56 flex-shrink-0 clip-pathHero"
                        loading="lazy"
                    />
                    <Dropdown item={item} key={idx} index={idx} />
                </div>
            ))}
        </section>
    );
};

export default Industries;
