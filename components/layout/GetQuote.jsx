import React from "react";
import { SectionHeading2, SectionPara1 } from "./SectionComponents";
import { GetStartButton } from "../UI/Button";

const GetQuote = () => {
    return (
        <section className="w-full h-full padding flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="w-full md:w-2/5">
                <SectionHeading2
                    text={"Get Quote For Your Custom Requirement"}
                    color={"text-foreground"}
                />
            </div>
            <div className="w-full md:w-3/5 flex flex-col items-start md:items-center md:flex-row md:justify-between gap-8 md:gap-3">
                <SectionPara1
                    text={
                        "Reach out to explore pricing, timelines, and solutions built for your needs."
                    }
                    color={"text-foreground"}
                />
                <GetStartButton href={"/contact"} text={"Contact us"} />
            </div>
        </section>
    );
};

export default GetQuote;
