import Image from 'next/image'
import React from 'react'
import { SectionHeading2 } from './SectionComponents'
import AccordionBorder from '../UI/AccordionBorder'
import { whyFluorokraftFaqs } from '@/utils/Data'

const WhyFluorokraft = () => {
    return (
        <section className="w-full relative padding flex flex-col gap-10 md:gap-7 lg:gap-16 md:flex-row items-start justify-between">
            <div className="w-full md:w-1/2 lg:w-3/5 space-y-8">
                <SectionHeading2
                    text={"Why Fluorokraft ?"}
                />
                <section className='w-full space-y-8 flex flex-col justify-center items-center'>
                    <AccordionBorder items={whyFluorokraftFaqs} />
                </section>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="w-full h-80 md:h-[480px] xl:h-[550px] 2xl:h-[650px] relative clip-pathImg overflow-hidden group">
                    <Image
                        fill
                        src={"/whyFlourokraft.png"}
                        alt={"our story"}
                        title={"our story"}
                        className="object-cover object-center group-hover:scale-110 transition-all duration-500"
                        sizes="(min-width: 1540px) 530px, (min-width: 1280px) 450px, (min-width: 1040px) calc(40vw - 32px), (min-width: 780px) calc(9.58vw + 278px), (min-width: 420px) calc(100vw - 24px), calc(82vw + 48px)"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyFluorokraft