import AllPageHero from '@/components/layout/AllPageHero'
import Contact from '@/components/layout/Contact'
import WhyFluorokraft from '@/components/layout/WhyFluorokraft'
import React from 'react'

const Page = () => {
    return (
        <main>
            <AllPageHero text={"Zero-defect precision, predictable delivery, measurable results"} />
            <WhyFluorokraft />
            {/* <GetQuote /> */}
            <Contact />
        </main>
    )
}

export default Page