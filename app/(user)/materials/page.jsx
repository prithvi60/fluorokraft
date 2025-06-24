import AllPageHero from '@/components/layout/AllPageHero'
import Contact from '@/components/layout/Contact'
import GetQuote from '@/components/layout/GetQuote'
import MaterialsCard from '@/components/layout/MaterialsCard'
import React from 'react'

const Page = () => {
    return (
        <main>
            <AllPageHero text={"Materials we work with"} />
            <MaterialsCard />
            <GetQuote />
            <Contact />
        </main>
    )
}

export default Page