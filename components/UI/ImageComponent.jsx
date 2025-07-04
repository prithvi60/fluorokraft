"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const ImageComponent = ({ src, alt, whyFluoro }) => {
    const [dimensions, setDimensions] = useState({ width: 860, height: 600 });

    useEffect(() => {
        const img = new window.Image(); // Note: using window.Image
        img.onload = () => {
            setDimensions({
                width: img.naturalWidth,
                height: img.naturalHeight
            });
        };
    }, [src]);

    return (
        <div className={`${whyFluoro ? "w-full h-96 md:h-[480px] xl:h-[550px] 2xl:h-[650px]" : "w-full h-80 md:h-96 xl:size-[450px] 2xl:size-[530px]"} relative`}>
            <Image
                width={dimensions.width}
                height={dimensions.height}
                src={src}
                alt={alt}
                title={alt}
                className="group-hover:scale-110 transition-all duration-500 w-full h-full object-cover clip-pathImg"
                loading="lazy"
                sizes="(min-width: 1860px) calc(33.33vw - 37px), (min-width: 1540px) calc(15.33vw + 294px), (min-width: 780px) 430px, (min-width: 640px) 384px, (min-width: 440px) calc(100vw - 24px), calc(10vw + 354px)"
            />
        </div>
    )
}


// ${whyFluoro ? "w-full h-96 md:h-[480px] xl:h-[550px] 2xl:h-[650px]" : "w-full h-80 md:h-96 xl:size-[450px] 2xl:size-[530px]"}