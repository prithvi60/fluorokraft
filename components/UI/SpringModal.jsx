"use client";
import { AnimatePresence, motion } from "framer-motion";
import { SectionPara1 } from "../layout/SectionComponents";

export const SpringModal = ({ isOpen, setIsOpen, data }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                        setIsOpen(false);
                    }}
                    className="fixed inset-0 !z-[9999] grid w-full h-full p-6 md:p-8 cursor-pointer bg-black/75 backdrop-blur place-items-center font-Montserrat"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-2xl bg-background rounded-lg cursor-default p-4 md:p-8 md:max-w-xl shadow-2xl"
                    >
                        <div className="block space-y-6 md:space-y-8 max-h-[420px] overflow-y-scroll h-full pb-5">
                            <h2 className="text-[clamp(1.125rem,3vw,2rem)] leading-6 MD:leading-10 tracking-wider capitalize">
                                {data.title}
                            </h2>
                            <div className="space-y-1">
                                <SectionPara1 text={data.detail1} />

                                {data.title === "DELRIN" && (
                                    <ul className="space-y-1 w-full list-disc pl-5 list-outside">
                                        {data.lists.map((list, idx) => (
                                            <li className="text-base" key={idx}>
                                                {list}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="space-y-1">
                                <SectionPara1 text={data.detail2} />
                                {data.title === "PEEK" && (
                                    <ul className="space-y-1 w-full list-disc pl-5 list-outside">
                                        {data.lists.map((list, idx) => (
                                            <li className="text-base" key={idx}>
                                                {list}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
