"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function MultiLevelDropdown({ setIsActiveIndex, data }) {
    const [openIndex, setOpenIndex] = useState(null);
    const [openSubIndex, setOpenSubIndex] = useState(null);

    return (
        <div className="relative inline-block text-left">
            <ul className="bg-[#F6F6F5] shadow-lg rounded-md border max-w-72 2xl:max-w-full overflow-hidden">
                {data.map((mainItem, idx) => (
                    <li key={idx} className="border-b last:border-0 w-full">
                        <button
                            className={`w-full gap-3 flex justify-between items-center px-4 py-2 font-bold hover:bg-success/50 cursor-pointer`}
                            onClick={() => {
                                setOpenIndex(openIndex === idx ? null : idx);
                                setIsActiveIndex(mainItem.title);
                            }}
                        >
                            <span className="text-left">{mainItem.title}</span>
                            {mainItem.subItems && (
                                <motion.span
                                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <FaChevronDown />
                                </motion.span>
                            )}
                        </button>

                        <AnimatePresence initial={false}>
                            {openIndex === idx && mainItem.subItems && (
                                <motion.ul
                                    className=""
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                >
                                    {mainItem.subItems.map((subItem, subIdx) => (
                                        <li key={subIdx} className="relative">
                                            <button
                                                className={`w-full flex justify-between gap-3 items-center px-4 py-2 font-medium hover:bg-success/50 cursor-pointer`}
                                                onClick={() => {
                                                    setOpenSubIndex(
                                                        openSubIndex === subIdx ? null : subIdx
                                                    );
                                                    setIsActiveIndex(subItem.title);
                                                }}
                                            >
                                                <span className="text-left pl-2">{subItem.title}</span>
                                                {subItem.subItems && (
                                                    <motion.span
                                                        animate={{
                                                            rotate: openSubIndex === subIdx ? 180 : 0,
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <FaChevronDown />
                                                    </motion.span>
                                                )}
                                            </button>

                                            <AnimatePresence initial={false}>
                                                {openSubIndex === subIdx && subItem.subItems && (
                                                    <motion.ul
                                                        className="border-l"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                                    >
                                                        {subItem.subItems.map((nested, nestedIdx) => (
                                                            <li key={nestedIdx} className="">
                                                                <button
                                                                    onClick={() => setIsActiveIndex(nested.title)}
                                                                    className="block pr-4 py-2 hover:bg-success/50 pl-10 w-full text-left cursor-pointer"
                                                                >
                                                                    {nested.title}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </div>
    );
}
