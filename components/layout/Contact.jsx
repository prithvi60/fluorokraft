import React from "react";
import { ContactForm } from "@/components/features/ContactForm";
import { SectionHeading2, SectionPara1 } from "./SectionComponents";

const Contact = () => {
    return (
        <section className="w-full relative padding flex flex-col gap-10 lg:gap-0 md:flex-row items-start justify-between bg-[#F6F6F6]">
            <div className="w-full md:w-1/5 lg:w-2/5 space-y-5 px-5 md:px-0">
                <div className="w-full md:w-2/5 lg:w-[30%]">
                    <SectionHeading2 text={"Request a Quote"} />
                </div>
            </div>
            <div className="space-y-4 md:space-y-10 w-full md:w-4/5 lg:w-3/5 px-5 md:px-0">
                <ContactForm />
                <div className="pt-5">
                    <SectionPara1 text={"Reach out directly at"} color={"text-foreground"} />
                    <SectionPara1 text={"info@fluorokraft.com"} color={"text-foreground font-semibold tracking-wider"} />
                </div>
            </div>
        </section>
    );
};

export default Contact;
