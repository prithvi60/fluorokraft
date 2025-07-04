"use client";
import Link from "next/link";
import Loader from "./Loader";

export const GetStartButton = ({ text, href = "#", status, type }) => {
    return (
        <button
            type={type ? "submit" : "button"}
            title={text}
            aria-label={`${text} page`}
            className={`before:absolute z-10 before:content-[''] w-max before:-z-10 relative before:-top-1.5 before:left-1/2 before:-translate-x-1/2 before:bg-success clip-pathHero2 before:w-full before:min-h-14 before:py-3 hover:before:w-[125%] cursor-pointer before:transition-[width] before:duration-300 min-h-12 px-6 py-3 text-white`}
        >
            {type ? (
                <span>{status ? <Loader /> : "Submit"}</span>
            ) : (
                <Link
                    aria-label={`${text} page`}
                    title={`${text} page`}
                    href={href}
                    className="font-semibold capitalize text-sm md:text-base min-h-[48px] py-2"
                >
                    {text}
                </Link>
            )}
        </button>
    );
};

export const UnderlineAnimation = ({ text, href, opt }) => {
    return (
        <Link
            passHref
            role="button"
            aria-label="CTA Button"
            href={href}
            className={`relative w-fit inline-block pb-0.5 overflow-hidden group capitalize text-base md:text-lg font-medium`}
        >
            {text}
            <div
                className={`absolute bottom-0 left-0 w-[250%] h-0.5 transition-transform duration-400 ease-in -translate-x-[60%] group-hover:translate-x-0 clip-path-cut ${opt ? "bg-background" : "bg-foreground"}`}
            />
        </Link>
    );
};
