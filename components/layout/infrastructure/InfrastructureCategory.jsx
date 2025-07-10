import React from 'react'
import Image from 'next/image'
import { infraCategory } from '@/utils/Data'

const InfrastructureCategory = () => {
    return (
        <section className="w-full h-full padding relative flex justify-center flex-wrap lg:flex-nowrap items-center gap-10 sm:gap-16 xl:gap-40">
            {infraCategory.map((item, idx) => (
                <div className='space-y-2 max-w-72' key={idx}>
                    <Image
                        src={item.img}
                        alt={item.title}
                        title={item.title}
                        width={100}
                        height={100}
                        className="object-contain object-top size-16 md:w-full md:h-24 lg:size-20 xl:size-24 flex-shrink-0 clip-pathHero mx-auto"
                        loading="lazy"
                    />
                    <h2
                        className={`text-[clamp(1rem,1.25vw,1.75rem)] leading-6 sm:leading-7 text-foreground font-normal  capitalize tracking-wider text-center`}
                    >
                        {item.title}
                    </h2>
                </div>
            ))}
        </section>
    )
}

export default InfrastructureCategory