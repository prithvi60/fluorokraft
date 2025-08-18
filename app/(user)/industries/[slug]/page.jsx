import AllPageHero from "@/components/layout/AllPageHero"
import Contact from "@/components/layout/Contact"
import { SectionHeading2, SectionPara1 } from "@/components/layout/SectionComponents"
import { industriesData } from "@/utils/Data"

const Page = async ({ params }) => {
    const { slug } = await params

    const filteredData = industriesData.find(val => val.href === slug)

    return (
        <main>
            <AllPageHero text={filteredData.title} />
            <section className="padding w-full h-full space-y-8 ">
                <p className={`text-base md:text-lg text-foreground`}>
                    {filteredData.para}
                </p>
                <SectionWrapper
                    title={filteredData.category.note}
                    data={filteredData.category.lists}
                />
                <SectionWrapper
                    title={filteredData.RelevantProducts.note}
                    data={filteredData.RelevantProducts.lists}
                    bg
                />
            </section>
            <Contact />
        </main>
    )
}

export default Page


export const SectionWrapper = ({ title, data, bg }) => {
    return (
        <>
            {
                data.length > 0 && (
                    <div className="w-full space-y-5">
                        <p className={`text-base md:text-lg text-foreground ${bg && "font-semibold"}`}>
                            {title}
                        </p>
                        <div className="w-full flex justify-between gap-10 lg:gap-20">
                            <ul className="block space-y-1 list-['-'] list-outside">
                                {data.map((item, index) => (
                                    <li className="pl-2 ml-2.5" key={index}>
                                        <SectionPara1 text={item} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    );
};