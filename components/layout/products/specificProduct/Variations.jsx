import React from 'react'
import { SectionHeading2 } from '../../SectionComponents'
import { fluoroProducts } from '@/utils/Data'
import Image from 'next/image'
import { UnderlineAnimation } from '@/components/UI/Button'

const Variations = () => {
    return (
        <section className="w-full h-full padding space-y-8 md:space-y-16">
            <SectionHeading2 text={"Variations"} />
            <div className="w-full space-y-6 md:space-y-9 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center gap-8">
                {fluoroProducts.slice(0, 3).map((item, index) => (
                    <div className="w-full h-fit space-y-2.5 max-w-sm" key={index}>
                        <Image
                            src={item.img}
                            alt={item.title}
                            title={item.title}
                            width={100}
                            height={100}
                            className="object-contain object-top size-full lg:size-80 xl:size-96"
                            loading="lazy"
                        />
                        <h1 className="font-medium text-lg md:text-xl tracking-wider">
                            {item.title}
                        </h1>
                        <p className="text-base text-foreground">{item.desc}</p>
                        <UnderlineAnimation text={"Know More"} href={item.href} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Variations