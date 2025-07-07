"use client";
import Image from "next/image";
import Slider from "react-slick";
import { variousCategory } from "@/utils/Data";
import { GetStartButton } from "../UI/Button";

const CategorySlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // nextArrow: <SampleNextArrow loading={loading} />,
        // prevArrow: <SamplePrevArrow loading={loading} />,
    };

    return (
        <div className="slider-container relative">
            <Slider {...settings} className="portfolio">
                {variousCategory.map((image, index) => (
                    <div className="relative w-full h-full" key={index}>
                        <Image
                            width={1200}
                            height={860}
                            src={image.img}
                            alt={image.categoryName}
                            title={image.categoryName}
                            className="object-cover object-center w-full h-[90dvh] md:h-[80dvh] overflow-hidden clip-pathHero"
                            // priority
                            loading="lazy"
                            sizes="calc(100vw - 40px)"
                        />
                        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
                            <h1
                                className={`text-[clamp(1.8rem,5vw,4.15rem)] leading-10 sm:leading-12 xl:leading-16 text-background text-center w-11/12 md:w-3/4 mx-auto`}
                            >
                                Engineering Precision Polymer Components for Demanding
                                Applications
                            </h1>
                            {/* <SectionPara1 text={image.desc} color={"text-background "} /> */}
                            <p
                                className={`text-base md:text-lg text-background w-4/5 md:w-3/5 text-center mx-auto`}
                            >
                                {image.desc}
                            </p>
                            <div className="w-full flex justify-center items-center">
                                <GetStartButton href={image.href} text={image.categoryName} hero />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategorySlider

// function SampleNextArrow(props) {
//     const { onClick, loading } = props;
//     return (
//         <div
//             className={`${loading && "hidden"
//                 } absolute top-2 sm:top-28 lg:top-28 right-2 sm:right-4 xl:right-16 rounded-full p-2.5 cursor-pointer hover:bg-info bg-secondary backdrop-blur-xl`}
//             onClick={onClick}
//         >
//             <FaArrowRight className="text-xs sm:text-base xl:text-2xl text-white" />
//         </div>
//     );
// }

// function SamplePrevArrow(props) {
//     const { onClick, loading } = props;
//     return (
//         <div
//             className={`${loading && "hidden"
//                 } absolute p-2.5 cursor-pointer hover:bg-info top-2 sm:top-28 right-12 sm:right-16 xl:right-32 lg:top-28 rounded-full z-30 bg-secondary backdrop-blur-xl`}
//             onClick={onClick}
//         >
//             <FaArrowLeft className="text-xs sm:text-base xl:text-2xl text-white" />
//         </div>
//     );
// }


export const CategorySliderLoading = () => (
    <div className="slider-loading-container relative w-full h-[90dvh] md:h-[80dvh] bg-transparent">
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 flex items-center justify-center">
            <Image
                width={100}
                height={100}
                alt="Fluorokraft logo"
                priority
                loading="eager"
                quality={80}
                title={"logo"}
                src={"/fluorokraft-min-logo.svg"}
                className="object-contain object-center size-28 animate-pulse"
            />
            {/* <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-3/5 mx-auto"></div>
            <div className="w-full flex justify-center">
                <div className="h-10 bg-gray-200 rounded w-32"></div>
            </div> */}
        </div>
    </div>
);