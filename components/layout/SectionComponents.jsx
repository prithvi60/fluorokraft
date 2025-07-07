import React from "react";

export const SectionHeading1 = ({ text, color, center }) => {
    return (
        <h1
            className={`text-[clamp(1.8rem,5vw,4.25rem)] leading-10 sm:leading-12 xl:leading-20 ${color} ${center && "text-center"}`}
        >
            {text}
        </h1>
    );
};

export const SectionHeading2 = ({ text, color }) => {
    return (
        <h2
            className={`text-[clamp(1.5rem,5vw,2.25rem)] leading-10 sm:leading-12 xl:leading-14 ${color}`}
        >
            {text}
        </h2>
    );
};

export const SectionHeadingSmall = ({ text, color }) => {
    return (
        <small
            className={`font-medium font-mono text-[15px] tracking-wider ${color ? "text-background" : "text-foreground"} w-full`}
        >
            {text}
        </small>
    );
};

export const SectionPara1 = ({ text, color, hero, clamp }) => {
    return (
        <p
            className={`${hero ? "text-sm md:text-base font-medium" : "text-base md:text-lg"} ${color ? color : "text-foreground"} ${clamp ? "line-clamp-4" : ""}`}
        >
            {text}
        </p>
    );
};
