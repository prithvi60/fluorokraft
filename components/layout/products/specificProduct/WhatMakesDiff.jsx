import { SectionHeading2, SectionHeadingSmall, SectionPara1 } from '../../SectionComponents'
import Image from 'next/image'

const WhatMakesDiff = () => {
    return (
        <section className="w-full relative padding flex flex-col gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between">
            <div className="w-full md:w-3/5 space-y-8 md:space-y-16">
                <div className='space-y-5'>
                    <SectionHeadingSmall text={"01"} />
                    <SectionHeading2
                        text={"What makes it different?"}
                    />
                </div>
                <div className="w-full flex justify-between gap-10 lg:gap-20">
                    <SectionHeadingSmall text={"Process"} />
                    <div className="block space-y-4">
                        <SectionPara1 text={"Our customers demand innovation. That’s why, despite having the finest low torque gasket available, we set out to make it even better. The new Energizer™ utilizes a “no-seam” shield providing the thickest protection on the market. For even more demanding applications, we now offer a TFM® shield. Not familiar with the fantastic permeation and compression properties of TFM®? For the finest low torque gasket ever created, look no further than CTG."} />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/5">
                <div className="w-full h-80 md:h-96 xl:size-[450px] 2xl:size-[530px] relative clip-pathImg overflow-hidden group">
                    <Image
                        fill
                        src={"/makesDiff.jpg"}
                        alt={"what makes us different"}
                        title={"what makes us different"}
                        className="object-fill object-center group-hover:scale-110 transition-all duration-500"
                        sizes="(min-width: 1540px) 530px, (min-width: 1340px) 450px, (min-width: 780px) 33.52vw, calc(100vw - 40px)"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhatMakesDiff