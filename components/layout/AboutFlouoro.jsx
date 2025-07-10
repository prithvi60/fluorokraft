"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const AboutFlouoro = () => {
    const text =
        "Fluorokraft is a trusted global partner in precision polymer engineering, delivering high-performance PTFE components through advanced infrastructure, co-engineered innovation, and ISO-certified quality systems with near-zero defect reliability.";
    const words = text.split(" ");
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            controls.start("animate");
        } else {
            controls.start("initial");
        }
    }, [isInView, controls]);

    return (
        <section className="w-full h-full padding bg-primary">
            <motion.div
                ref={ref}
                initial="initial"
                animate={controls}
                className="mx-auto max-w-7xl text-center"
            >
                <h2
                    className={`text-[clamp(1.5rem,5vw,2.25rem)] leading-10 sm:leading-12 xl:leading-14 text-background py-24`}
                >
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "6px" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h2>
            </motion.div>
        </section>
    );
};

export default AboutFlouoro;

const wordVariants = {
    initial: (i) => ({
        opacity: 0,
        y: 20,
        transition: {
            delay: i * 0.03,
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }),
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    }),
};
