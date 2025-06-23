import OurLeadership from '@/components/layout/about/OurLeadership'
import OurMission from '@/components/layout/about/OurMission'
import OurStory from '@/components/layout/about/OurStory'
import AllPageHero from '@/components/layout/AllPageHero'
import Contact from '@/components/layout/Contact'
import GetQuote from '@/components/layout/GetQuote'


const Page = () => {
    return (
        <main>
            <AllPageHero text={"Three Decades of Innovation. Fulfilling Precision Custom Requirements."} />
            <OurStory />
            <OurMission />
            <OurLeadership />
            <GetQuote />
            <Contact />
        </main>
    )
}

export default Page
