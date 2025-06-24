import AllPageHero from "@/components/layout/AllPageHero";
import Contact from "@/components/layout/Contact";
import AboutProduct from "@/components/layout/products/specificProduct/AboutProduct";
import Benefits from "@/components/layout/products/specificProduct/Benefits";
import Variations from "@/components/layout/products/specificProduct/Variations";
import WhatMakesDiff from "@/components/layout/products/specificProduct/WhatMakesDiff";
import React from "react";

const Page = async ({ params }) => {
    const { product } = await params;
    const filteredProductName = product.replace(/-/g, " ");
    return (
        <main className="">
            <AllPageHero
                text={
                    filteredProductName === "O rings" ? "O-rings" : filteredProductName
                }
            />
            <AboutProduct />
            <Benefits />
            <WhatMakesDiff />
            <Variations />
            <Contact />
        </main>
    );
};

export default Page;
