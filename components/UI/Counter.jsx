"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stat = ({ num, suffix, decimals = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const formatIndianNumber = (value) => {
        return value.toLocaleString("en-IN");
    };

    useEffect(() => {
        if (!isInView) return;

        animate(0, num, {
            duration: 2.5,
            onUpdate(value) {
                if (!ref.current) return;
                ref.current.textContent = value.toFixed(decimals);
            },
        });
    }, [num, decimals, isInView]);

    return (
        <h1 className={`text-4xl md:text-6xl tracking-wider font-extrabold`}>
            <span ref={ref}>{num}</span>
            {suffix}
        </h1>
    );
};
