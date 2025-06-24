import AllPageHero from '@/components/layout/AllPageHero'
import Contact from '@/components/layout/Contact'
import ProductsSection from '@/components/layout/products/ProductsSection'
import WhyChooseFluoroProduct from '@/components/layout/products/WhyChooseFluoroProduct'

const Page = () => {
    return (
        <main>
            <AllPageHero text={"Products"} />
            <ProductsSection />
            <WhyChooseFluoroProduct />
            <Contact />
        </main>
    )
}

export default Page