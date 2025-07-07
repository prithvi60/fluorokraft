import AllPageHero from '@/components/layout/AllPageHero'
import InfrastructureCategory from '@/components/layout/infrastructure/InfrastructureCategory'
import InfrastructureDetails from '@/components/layout/infrastructure/InfrastructureDetails'
import { infrastructureCategoryDetail } from '@/utils/Data'
import React from 'react'

const Page = () => {
    return (
        <main>
            <AllPageHero text={"Infrastructure"} />
            <InfrastructureCategory />
            <InfrastructureDetails data={infrastructureCategoryDetail} />
        </main>
    )
}

export default Page