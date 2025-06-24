"use client";
import { useState } from "react";
import { SectionPara1 } from "./SectionComponents";
import { SpringModal } from "../UI/SpringModal";
import { materialCards } from "@/utils/Data";

const MaterialsCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isActiveIndex, setIsActiveIndex] = useState(null);
    console.log(isActiveIndex);

    return (
        <div className="w-full h-full padding grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 relative">
            {materialCards.map((item, index) => (
                <div
                    className="block space-y-6 md:space-y-8 max-w-sm sm:p-6"
                    key={index}
                >
                    <h2 className="text-[clamp(1.125rem,3vw,2rem)] leading-6 MD:leading-10 tracking-wider capitalize">
                        {item.title}
                    </h2>
                    <SectionPara1 text={item.detail1} clamp />
                    <button
                        role="button"
                        type={"button"}
                        title={"Read More"}
                        className={`before:absolute z-10 before:content-[''] w-max before:-z-10 relative before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-success clip-pathHero2 before:w-full before:h-14 before:py-3 hover:before:w-[125%] cursor-pointer before:transition-[width] before:duration-300 h-12 px-6 text-white`}
                        onClick={() => {
                            setIsOpen(true);
                            setIsActiveIndex(index);
                        }}
                    >
                        Read More
                    </button>
                </div>
            ))}
            <SpringModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                data={materialCards[isActiveIndex] || {}}
            />
        </div>
    );
};

export default MaterialsCard;
