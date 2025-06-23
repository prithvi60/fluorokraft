import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";

export const navLinks = [
    { menu: "about", link: "/about" },
    { menu: "why fluoroKraft", link: "/why-fluoroKraft" },
    { menu: "products", link: "/products" },
    { menu: "materials", link: "/materials" },
    { menu: "contact us", link: "/contact" },
];

export const footerLinks = [
    { menu: "Home", href: "/" },
    { menu: "About", href: "/about" },
    { menu: "Why Fluorokraft", href: "/why-fluoroKraft" },
    { menu: "Products", href: "/products" },
    { menu: "Materials", href: "/materials" },
    { menu: "Contact Us", href: "/contact" },
    { menu: "Terms of use", href: "/terms" },
    { menu: "Privacy Policy", href: "/privacy-policy" },
    { menu: "Cookie Policy", href: "/cookie-policy" },
];

export const socialLinks = [
    {
        icon: (
            <FaFacebook className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaTwitter className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaInstagram className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaLinkedinIn className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
    {
        icon: (
            <FaYoutube className="text-xl md:text-3xl text-[#90ADEC] hover:animate-pulse" />
        ),
        href: "#",
    },
];

export const categories = [
    {
        categoryName: "Products",
        img: "/product-card.png",
        href: "/products",
        desc: "Near-zero defects across millions of components with Green Channel Vendor status that that proves the trust placed by global OEMs on Fluorokraft",
    },
    {
        categoryName: "Materials",
        img: "/materials-card.jpg",
        href: "/materials",
        desc: "98% on-time delivery performance with 100% customer retention and partnerships spanning over three decades.",
    },
    {
        categoryName: "Process and Quality",
        img: "/PQ-card.jpg",
        href: "#innovation",
        desc: "Co-engineering solutions that extend equipment lifecycles by 40% and reduce downtime costs by 70% through custom polymer formulations.",
    },
];

export const qualityLists = [
    {
        title: "Proven Excellence",
        desc: "Advanced quality systems delivering ±0.05 mm precision with systematic in-process monitoring and laser-based verification across every component.",
    },
    {
        title: "Trusted Partnership",
        desc: "Green Channel Vendor authorization empowers us with full quality responsibility, enabling OEMs to eliminate incoming inspections and streamline operations.",
    },
    {
        title: "Mission-Critical Standards",
        desc: "Components engineered for chemical resistance, thermal stability up to 260°C, and ultra-low friction performance in aerospace, oil and gas, and valve, pump and cylinder applications.",
    },
];

export const reliabilityLists = [
    {
        title: "Predictable Performance",
        desc: "98% on-time delivery with standard 4-5 week schedules and emergency response capability for rush orders within 1-2 weeks.",
    },
    {
        title: "Enduring Relationships",
        desc: "100% customer retention with 90% of clients maintaining partnerships exceeding five years and many relationships spanning over three decades.",
    },
    {
        title: "Supply Chain Excellence",
        desc: "Stock-and-serve strategy with intelligent demand forecasting ensures uninterrupted production capabilities and rapid emergency response.",
    },
];

export const innovationLists = [
    {
        title: "Co-Engineering Results",
        desc: "Collaborative partnerships that extend conveyor system uptime by 40% and reduce downtime costs by 70% through custom material solutions.",
    },
    {
        title: "Technical Leadership",
        desc: "Three decades of polymer engineering expertise specializing in complex part development, reverse-engineering, and exotic material integration.",
    },
    {
        title: "Custom Solutions",
        desc: "Breakthrough formulations like custom Teflon blends that extend high-wear component lifecycles from weeks to months while reducing costs.",
    },
];

export const leadershipTeam = [
    {
        name: "Maheshmoorthy V",
        position: "Plastic Engineer, Partner and Director",
    },
    {
        name: "Srinivasan Subramanian",
        position: "CA, Partner and Director",
    },
    {
        name: "Brahadeesh Srinivasan",
        position: "Assistant Director",
    },
];

export const whyFluorokraftFaqs = [
    {
        ques: "Zero-Risk Quality Partnership",
        shortAns:
            "Near-zero defects across millions of deliveries with 100 customer retention and no attrition among ongoing clients. Green Channel Vendor status means OEMs trust us with full quality responsibility, eliminating their inspection overhead.",
        lists: [
            {
                title: "Proven Performance:",
                points: [
                    "Near-zero defect rates across millions of component deliveries",
                    "98% on-time delivery performance with 4-5 week standard schedules",
                    "100% customer retention with zero attrition among ongoing clients",
                ],
            },
            {
                title: "Global OEM Trust:",
                points: [
                    "Green Channel Vendor status with full quality responsibility",
                    "Self-certified supplier eliminating incoming inspections",
                    "25+ years of industry presence with 20+ year client relationships",
                ],
            },
        ],
        para: "Advanced quality systems include complete supply chain traceability, laser-based dimensional analysis, and systematic in-process monitoring every 100-1,000 parts. Components deliver chemical resistance against aggressive acids, thermal stability from cryogenic to 260°C, and ±0.05 mm dimensional precision on soft polymers for aerospace, oil &amp; gas, and submersible applications.",
    },
    {
        ques: "Unmatched Reliability & Speed",
        shortAns:
            "98% on-time delivery with standard 4-5 week schedules, plus emergency response capability delivering rush orders in 1-2 weeks without quality compromise. 90% of clients maintain 5+ year partnerships, with many exceeding 20 years.",
        lists: [
            {
                title: "Manufacturing Excellence:",
                points: [
                    "Ultra-precision CNC infrastructure achieving ±0.05 mm accuracy",
                    "Stock-and-serve strategy with pre-positioned inventory",
                    "Emergency response capability with 1-2 week rush fulfillment",
                ],
            },
            {
                title: "Partnership Foundation:",
                points: [
                    "90% of clients maintain 5+ year partnerships",
                    "Collaborative planning with procurement teams",
                    "2024 “Reliable Business Partner” award recognition",
                ],
            },
        ],
        para: "Strategic supply chain architecture includes intelligent demand forecasting and data-driven inventory management. Disciplined production planning maintains standard 4-5 week delivery timelines with agile accommodation for rush orders. Comprehensive joint planning processes ensure transparency and seamless transition from engineering consultation to steady supply execution.",
    },
    {
        ques: "Innovation That Delivers Results",
        shortAns:
            "Co-engineering partnerships that extend equipment uptime by 40% and reduce downtime costs by 70%. Three decades of polymer expertise transforming complex challenges into cost-effective solutions with precision down to 0.05 mm tolerances.",
        lists: [
            {
                title: "High-Performance Specialization:",
                points: [
                    "PTFE, PEEK, polyamide, UHMWPE, polyurethane, and exotic materials",
                    "Applications: Oil &amp; gas valve seats, aerospace bushings, submersible seals",
                    "Manufacturing tolerances down to 0.05 mm for precision-critical environments",
                ],
            },
            {
                title: "Innovation Results:",
                points: [
                    "Extended conveyor system uptime by 40% through a new material",
                    "Reduced downtime costs by 70% with custom Teflon blends",
                    "Cost-effective alternatives to proprietary components",
                ],
            },
        ],
        para: "Led by 30+ years polymer engineering expertise, our R&amp;D team specializes in complex part development, reverse-engineering, and integration of rare materials sourced globally. Co-engineering partnerships with client NPD teams deliver custom material formulation, scalable manufacturing solutions, and performance optimization from low-volume prototypes to high-volume production.",
    },
];
