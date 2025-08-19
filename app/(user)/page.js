import AboutFlouoro from "@/components/layout/AboutFlouoro";
import Contact from "@/components/layout/Contact";
import HomeHero from "@/components/layout/HomeHero";
import InnovationSection from "@/components/layout/InnovationSection";
import QualitySection from "@/components/layout/QualitySection";
import ReliabilitySection from "@/components/layout/ReliabilitySection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fluorokraft",
    // image: "https://ik.imagekit.io/webibee/aspiire%20logo.png?updatedAt=1744800414967",
    description: "Fluorokraft",
    url: "https://fluorokraft.vercel.app/",
  };
  const jsonLdLocal = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fluorokraft",
    // image:"https://ik.imagekit.io/webibee/aspiire%20logo.png?updatedAt=1744800414967",
    url: "https://fluorokraft.vercel.app/",
    telephone: "+91 44 2454 1067",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "19:30",
    },
  };
  return (
    <main className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
      />
      <HomeHero />
      {/* <CategoryCard /> */}
      <ReliabilitySection />
      <QualitySection />
      <AboutFlouoro />
      <InnovationSection />
      {/* <GetQuote /> */}
      <Contact />
    </main>
  );
}
