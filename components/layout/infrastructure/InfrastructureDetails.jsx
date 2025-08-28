import { ImageComponent } from "@/components/UI/ImageComponent";
import React from "react";
import { SectionPara1 } from "../SectionComponents";

const InfrastructureDetails = ({ data }) => {
    return (
        <>
            {data.map((item, id) => (
                <section
                    className="w-full h-full padding flex flex-col gap-5 md:flex-row md:justify-between xl:gap-6 "
                    key={id}
                >
                    <div className="w-full md:w-3/5 lg:ml-12">
                        <div
                            className={`block w-full h-full space-y-8 md:space-y-12 text-foreground`}
                        >
                            <h2 className="text-[clamp(1.5rem,5vw,2.85rem)] leading-10 sm:leading-12 xl:leading-20 font-bold">
                                {item.title}
                            </h2>
                            <p className="text-base text-foreground w-full">{item.para}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5 md:pt-20">
                        <ImageComponent src={item.img} alt={item.title} />
                    </div>
                </section>
            ))}
        </>
    );
};

export default InfrastructureDetails;
