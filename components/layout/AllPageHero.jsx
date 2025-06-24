import React from 'react'
import { SectionHeading1 } from './SectionComponents'

const AllPageHero = ({ text }) => {
    return (
        <section className='w-full relative padding bg-info clip-pathHeroBottom capitalize'>
            <SectionHeading1 text={text} color={"text-background"} />
        </section>
    )
}

export default AllPageHero