import React from 'react'
import { SectionHeading2 } from './SectionComponents'
import AccordionBorder from '../UI/AccordionBorder'
import { whyFluorokraftFaqs } from '@/utils/Data'
import { ImageComponent } from '../UI/ImageComponent'

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
                <ImageComponent src={"/whyFlourokraft.png"} alt={"why Fluorokraft"} whyFluoro />
            </div>
        </section>
    )
}

export default WhyFluorokraft