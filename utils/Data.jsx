import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";

export const navLinks = [
    { menu: "Home", link: "/" },
    { menu: "about", link: "/about" },
    { menu: "why fluoroKraft", link: "/why-fluoroKraft" },
    { menu: "products", link: "/products" },
    { menu: "materials", link: "/materials" },
    { menu: "industries", link: "/industries" },
    { menu: "infrastructure", link: "/infrastructure" },
    { menu: "contact us", link: "/contact" },
];

export const footerLinks = [
    { menu: "Home", href: "/" },
    { menu: "About", href: "/about" },
    { menu: "Why Fluorokraft", href: "/why-fluoroKraft" },
    { menu: "Products", href: "/products" },
    { menu: "Materials", href: "/materials" },
    { menu: "Industries", href: "/industries" },
    { menu: "Infrastructure", href: "/infrastructure" },
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

export const variousCategory = [
    {
        img: "/slider/product-hero.png",
        categoryName: "Product",
        href: "/products",
        desc: "Fluorokraft is among the leading manufacturers of custom polymer precision machined components like Seals, Valve seats, O-Rings, Packings, Washers using PTFE and other specialized plastics.",
    },
    {
        img: "/slider/quality-hero.png",
        categoryName: "Quality",
        href: "/innovation",
        desc: "Fluorokraft, an ISO 9001:2015 certified manufacturer, delivers near-zero defect precision PTFE components—trusted globally with Green Channel Vendor status for consistent quality across millions of parts.",
    },
    {
        img: "/slider/reliability-hero.png",
        categoryName: "Reliability",
        href: "/why-fluoroKraft",
        desc: "98% on-time delivery, 100% customer retention, and decades-long partnerships—Fluorokraft delivers predictable performance and supply chain confidence, every time.",
    },
    {
        img: "/slider/material.jpg",
        categoryName: "Materials",
        href: "/materials",
        desc: "Fluorokraft specializes in precision machining of advanced materials like PTFE, PEEK, PCTFE, Delrin, and Nylon 6,6—engineered for durability, chemical resistance, and extreme performance.",
    },
    {
        img: "/slider/innovation-hero.jpg",
        categoryName: "Innovation",
        href: "#innovation",
        desc: "Fluorokraft drives breakthrough results through co-engineered polymer solutions along with clients focusing on boosting equipment lifecycles and cutting downtime costs with custom material formulations and decades of expertise.",
    },
    {
        img: "/slider/infrastructure-hero.jpg",
        categoryName: "World-Class Infrastructure",
        href: "/infrastructure",
        desc: "Fluorokraft’s advanced CNC and molding capabilities, ISO-certified quality systems, and agile production planning deliver consistent, high-tolerance polymer components—trusted by global OEMs for performance at scale.",
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
    {
        ques: "Precision Infrastructure for Polymer Excellence",
        shortAns:
            "At Fluorokraft, infrastructure is more than machinery—it's the foundation of precision, reliability, and innovation. Our advanced manufacturing ecosystem is designed to meet the exacting demands of global OEMs across industries, ensuring every component we produce meets the highest standards of performance and consistency.",
        lists: [
            {
                title: "",
                points: [
                    "Built for Performance, Trusted WorldwidePrecision-Driven ManufacturingEquipped with advanced CNC and VMC machines capable of maintaining tolerances as tight as ±0.05 mm—even for soft, high-performance polymers.Hydraulic molding presses and specialized tooling systems enable scalable production of complex geometries and custom profiles. Engineered to handle materials like PTFE, PEEK, UHMWPE, and polyacetal, ensuring durability and chemical resistance in harsh environments.",
                    "Integrated Quality & Delivery Systems ISO 9001:2015 certified processes ensure rigorous quality control from raw material sourcing to final inspection. In-process inspections and laser-based dimensional analysis guarantee profile integrity and zero-defect deliveries. A disciplined planning and scheduling framework enables predictable lead times, with agile capacity for urgent orders without compromising quality.",
                    "Fluorokraft’s infrastructure is not just built for scale—it’s built for trust. From co-engineering innovation to flawless execution, our systems empower long-term partnerships with global OEMs. Whether it’s a single high-value prototype or a high-volume production run, our infrastructure ensures every part delivers on precision, reliability, and performance—every time.",
                ],
            },
        ],
        para: "",
    },
    {
        ques: "Co-Engineering Approach To Delivering Solutions",
        shortAns:
            "At Fluorokraft, co-engineering is more than collaboration—it’s a strategic partnership that transforms complex challenges into high-performance solutions. By working closely with our clients’ design and engineering teams, we develop custom polymer components that enhance durability, reduce downtime, and extend product lifecycles. Whether it’s optimizing material blends or reimagining part geometries, our co-engineering approach combines deep polymer expertise with precision manufacturing to deliver measurable value across industries.",
        lists: [
            {
                title: "Doubling Valve Lifespan Through Co-Engineered PTFE Innovation",
                points: [
                    "For over three decades, Fluorokraft has partnered with a leading industrial valve manufacturer to enhance product durability and performance. Through collaborative engineering, Fluorokraft developed a custom PTFE-based component tailored to the client’s demanding operating conditions. The result: valve lifespan increased from 5 years to an impressive 10 years. This breakthrough not only reduced replacement frequency but also strengthened the client’s product reputation in global markets—demonstrating how material innovation can drive long-term reliability.",
                ],
            },
            {
                title:
                    "Reducing Downtime Costs by 70% with PTFE-Enhanced Conveyor Components",
                points: [
                    "In a high-impact industrial application, a client faced frequent conveyor failures every 6 months, leading to costly downtime. Fluorokraft stepped in with a co-engineered solution—introducing a PTFE layer in the conveyor’s moving parts to reduce friction and wear. The outcome was transformative: mean time between failures (MTBF) extended to 9 months, and downtime costs dropped by 70%. This success showcases Fluorokraft’s ability to turn operational challenges into performance gains through precision polymer engineering.",
                ],
            },
        ],
        para: "",
    },
];

export const materialCards = [
    {
        title: "PTFEE",
        detail1:
            "Most PTFE seals, in order to retain their toughness and flexibility, are fortified with short glass fiber, bronze flashes, carbon, graphite, or a combination of these fillers. Because of a lack of resilience (memory) in PTFE, an energizer is most often employed to obtain the desired fit. Benefits are chemical inertness, high heat resistance, low temperature flexibility, low running friction, and non-adhesive characteristics. Temperatures to +500Â° F are obtainable but are often reduced by the filler or energizer employed.",
        detail2:
            "PTFE is used in high heat applications because it is inflammable. They can be used in cryogenic as well as high temperatures (up to 300 ºC). A wide variety of fillings like carbon, glass fiber, polymers, and more can be made available with PTFE seals. PTFE seals offer thermal stability, the lowest known coefficient of friction (of nay solid), and extreme chemical resistance.",
    },
    {
        title: "Nylon 6,6",
        detail1:
            "Nylon 6,6 is a high-performance engineering thermoplastic known for its excellent mechanical strength, rigidity, and wear resistance. It is commonly reinforced with fillers such as glass fiber, carbon, or minerals to enhance its load-bearing capacity and dimensional stability under heat. Due to its high crystallinity, Nylon 6,6 offers superior tensile strength, excellent abrasion resistance, and good fatigue endurance. However, like many polyamides, it is hygroscopic—absorbing moisture from the environment—which can slightly affect its mechanical properties and dimensions in humid conditions.",
        detail2:
            "Nylon 6,6 components are widely used in automotive, industrial, and electrical applications for their ability to withstand continuous service temperatures up to 150 ºC and short-term peaks up to 200 ºC. The material maintains structural integrity in harsh operating environments and is known for its high melting point and self-lubricating characteristics. It provides good chemical resistance to hydrocarbons, solvents, and alkalies, though its resistance to acids is limited. Fluorokraft offers Nylon 6,6-based solutions with custom fillers and formulations to meet varied application needs requiring durability, thermal resistance, and precision in dynamic conditions.",
    },
    {
        title: "Nitrile Rubber",
        detail1:
            "Nitrile Rubber is usually considered as the backbone of the industrial and automotive rubber products industries. Nitrile Rubber is actually a complex family of unsaturated synthetic rubber copolymers of acrylonitrile (ACN) and butadiene. The physical and chemical properties of Nitrile Rubber depend on the percentage of acrylonitrile in the base polymer. Generally, this type of synthetic rubber is resistant to oil, fuel, grease, water, air and flame retardant liquids (HFA, HFB, HFC).",
        detail2:
            "Today, Nitrile Rubber is one of the most popular sealing elements due to its strong engineering properties. Nitrile rubber seals can be used in hydraulic liquid, gas oil, silicon oil, animal and vegetable oils and fats as well as hot and cold water.",
    },
    {
        title: "DELRIN",
        detail1:
            "Commonly called POM, it is a thermoplastic with high strength and stiffness. As a semi-crystalline material, Acetal offers excellent dimensional stability. It is also characterized by a low coefficient of friction. Great temperature range (-49 F to + 212 F)",
        lists: [
            "Easily machinable",
            "Low moisture absorption",
            "Good wear and abrasion resistance",
            "FDA grades readily available",
        ],
        detail2:
            "POM is an extremely string material having very high impact resistance. The resistance to fatigue is so high in this material that it is considered equivalent to metal. It is used in place of metal in applications that require a lighter alternative. It is used in applications like gears, fasteners, bearings, and more.",
    },
    {
        title: "PEEK",
        detail1:
            "PEEK (polyetheretherketone) is a high strength alternative to fluoropolymers with an upper continuous-use temperature of 250Â°C (480Â°F). PEEK exhibits excellent mechanical and thermal properties, chemical inertness, creep resistance at high temperatures, low flammability, hydrolysis resistance, and radiation resistance. These properties make PEEK a preferred product in the aircraft, automotive, semiconductor, and chemical processing industries. PEEK is used for wear and load bearing applications, such as, valve seats, pump gears, and compressor valve plates.",
        detail2:
            "A high performance engineered thermoplastic. Used continuously to 480 F (250 C) in hot water or steam without permanent loss in physical properties.",
        lists: [
            "Excellent chemical resistance",
            "Low moisture absorption",
            "Good wear and abrasion resistance",
            "FDA approval (unfilled)",
        ],
    },
    {
        title: "PCTFE",
        detail1:
            "PCTFE is a high-performance fluoropolymer known for its exceptional chemical resistance, low moisture absorption, and superior gas barrier properties. As a thermoplastic, it maintains excellent dimensional stability across a broad temperature range, typically from -240°C to +150°C. PCTFE also features a low coefficient of thermal expansion, making it ideal for applications requiring tight tolerances. It is non-flammable, resistant to UV radiation, and does not absorb significant amounts of water, making it well-suited for use in aerospace, cryogenics, and precision instrumentation.",
        detail2:
            "PCTFE offers a unique combination of mechanical strength and non-stick properties, while still being easier to machine than many other fluoropolymers. Although not as flexible as PTFE, it surpasses it in tensile strength, clarity, and creep resistance. It is often used in applications such as valve seats, gaskets, seals, film liners, and insulation for electronic components, especially where low permeability to moisture and gases is critical. Fluorokraft offers PCTFE-based sealing and structural solutions where extreme performance and long-term reliability are non-negotiable.",
    },
    {
        title: "PP",
        detail1:
            "Polypropylene is a versatile, semi-crystalline thermoplastic known for its light weight, chemical resistance, and excellent fatigue endurance. It offers a good balance of mechanical strength and flexibility, making it suitable for a wide range of industrial applications. PP is particularly resistant to acids, bases, and organic solvents, and is non-hygroscopic, meaning it absorbs very little moisture. With a continuous use temperature range from 0°C to 100°C, and short-term tolerance up to 130°C, it is ideal for applications that require resistance to chemical attack and environmental stress cracking.",
        detail2:
            "Polypropylene is easily fabricated, weldable, and widely used in both sheet and molded form. Though not as rigid as engineering plastics like Nylon or Delrin, PP is often chosen for its low cost, light weight, and ability to withstand repeated flexing—a property known as 'living hinge' behavior. Common applications include chemical tanks, laboratory equipment, seals, packaging components, and automotive interior parts. Fluorokraft provides customized PP-based components for industries requiring chemical durability, ease of fabrication, and economical performance.",
    },
    {
        title: "LDPE / HDPE",
        detail1:
            "Polyethylene, available in two primary forms—LDPE (Low-Density Polyethylene) and HDPE (High-Density Polyethylene)—is a widely used thermoplastic known for its excellent chemical resistance, low moisture absorption, and lightweight nature. Both grades are non-toxic, UV-stabilizable, and offer good electrical insulation properties. LDPE is more flexible and impact-resistant, making it suitable for applications that require pliability, while HDPE is stronger and more rigid, ideal for structural components and high-load environments. Both materials are available in FDA-compliant grades for food and medical uses.",
        detail2:
            "Polyethylene materials perform well in a temperature range of approximately -50°C to +120°C, depending on the grade and formulation. They resist corrosion from acids, bases, and alcohols, making them ideal for use in chemical tanks, piping, seals, liners, packaging, and industrial containers. Fluorokraft offers tailored LDPE and HDPE solutions based on specific mechanical, thermal, or fabrication requirements—delivering durable, cost-effective performance across various industries.",
    },
];

export const materialCardsLists = [
    {
        title: "Fluoropolymers",
        lists: ["PTFEE", "PCTFE"],
    },
    {
        title: "Engineering Thermoplastics",
        lists: ["Nylon 6,6", "DELRIN", "PEEK"],
    },
    {
        title: "Elastomers / Rubber",
        lists: ["Nitrile Rubber"],
    },
    {
        title: "Polyolefins",
        lists: ["PP", "LDPE / HDPE"],
    },
];

export const productsTabsLists = [
    {
        title: "Precision Components",
        lists: [
            "O-rings",
            "Gaskets",
            "Custom Seals",
            "Plain Bearings",
            "Thrust Washers",
            "Bearing Strips",
        ],
    },
    {
        title: "Custom Components",
        lists: ["Machined Parts", "Molded Components", "Assemblies"],
    },
    {
        title: "Isostatic and Transfer Moulded Components",
        lists: [
            "Isostatic Press parts",
            "Transfer Moulded Components",
            "Complex Geometries",
        ],
    },
];

export const fluoroProducts = [
    {
        img: "/products/product-1.png",
        title: "O-rings",
        desc: "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line.",
        href: "/products/O-rings",
    },
    {
        img: "/products/product-2.png",
        title: "Gaskets",
        desc: "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line.",
        href: "/products/gaskets",
    },
    {
        img: "/products/product-3.png",
        title: "Custom Seals",
        desc: "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line.",
        href: "/products/custom-seals",
    },
    {
        img: "/products/product-4.png",
        title: "Bearing Strips",
        desc: "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line.",
        href: "/products/bearing-strips",
    },
    {
        img: "/products/product-5.png",
        title: "Thrust Washers",
        desc: "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line.",
        href: "/products/thrust-washers",
    },
    {
        img: "/products/product-6.png",
        title: "Plain Bearings",
        desc: "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line.",
        href: "/products/plain-bearings",
    },
];

export const industrialMaterials = [
    {
        img: "/industries/Automotives.jpg",
        title: "Automotives",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/HEI.jpg",
        title: "Heavy Electrical Insulation",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/Infrastructure.jpg",
        title: "Infrastructure",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/FHS.jpg",
        title: "Fluid handling Systems",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/MT.jpg",
        title: "Machine tool",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/chemical.jpg",
        title: "Chemical",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/aerospace.jpg",
        title: "Aerospace",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/OG.jpg",
        title: "Oil and Gas",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/biotech.jpg",
        title: "Biotech, Pharma and Healthcare",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
    {
        img: "/industries/railways.jpg",
        title: "Railways",
        lists: [
            "Despite having the finest low torque gasket on the market, we set out to make it even better with the new Energizer™ gaskets product line",
        ],
    },
];

export const infraCategory = [
    { img: "/infra/mould.svg", title: "Moulding Shop" },
    { img: "/infra/machine.svg", title: "Machine Shop" },
    // { img: "/infra/skiving.svg", title: "Skiving Unit" },
    // { img: "/infra/extraction.svg", title: "Extrusion Plant" },
    { img: "/infra/inspection.svg", title: "Inspection Facility" },
    { img: "/infra/ePTFE.svg", title: "ePTFE Unit" },
];

export const infrastructureCategoryDetail = [
    {
        title: "Moulding Shop",
        para: (
            <>
                Fluorokraft operates a fully equipped moulding facility capable of processing both PTFE and PEEK materials with precision. The shop features hydraulic presses ranging from small to high tonnage, enabling the production of components across a wide range of sizes and specifications. PTFE is shaped using a cold forming technique prior to sintering, ensuring dimensional accuracy and material integrity.
                <br />
                <br />
                For PEEK, a combined moulding and thermal processing approach is employed to achieve optimal mechanical properties. Additionally, Fluorokraft offers in-house blending of customized PTFE and PEEK compounds, allowing tailored solutions for specific performance requirements across industries.
            </>
        ),
        points: [
            "Compression moulding capability for both PTFE and PEEK in-house",
            "Hydraulic presses ranging from 50 tonnes to 200 tonnes",
            "Cold moulding of PTFE before the sintering process",
            "Moulding cum heating process for PEEK",
            "Blending for customised compounds in PTFE and PEEK in-house",
        ],
        img: "/infra/mould-bg.png",
        inHouseLists: [""],
    },
    {
        title: "Precision machining facilities",
        para: (
            <>
                Fluorokraft’s machining division is equipped with advanced CNC systems, operated by skilled programmers specializing in high-accuracy component production. The facility includes a range of turning, milling, and multi-axis machining centers capable of handling complex geometries and tight tolerances.
                <br />
                <br />
                In addition to CNC capabilities, the shop features conventional machining setups for specialized tasks, along with custom tooling and fixture design to support unique part requirements. The team ensures consistent performance through precise tool calibration and wear monitoring, enabling reliable output across varied production volumes.

            </>
        ),
        points: [
            "Turning centres",
            "Turn-mill centres",
            "Vertical milling centres",
            "Conventional machine shop",
            "Tool and design facilities for specialised fixtures",
        ],
        img: "/infra/machine-bg.png",
        inHouseLists: [""],
    },
    {
        title: "ePTFE Unit",
        para: (
            <>
                Fluorokraft’s isostatic moulding infrastructure is designed for precision and consistency in PTFE and PFA components. Advanced moulding systems ensure uniform pressure, producing parts with consistent density and minimal internal stress—crucial for high-performance applications involving corrosive fluids, heat, and mechanical loads.
                <br />
                <br />
                The facility includes specialized cold moulding equipment for PTFE and integrated heating for PEEK, enabling tailored processing. In-house compound blending allows precise control over material properties. With skilled technicians and strict quality protocols, Fluorokraft delivers complex, high-tolerance components for industries like chemical processing, oil & gas, pharmaceuticals, and aerospace.
            </>
        ),
        points: [
            "Custom-built, CNC-controlled ePTFE stretching machine to meet global quality norms",
            "Enhanced capability to manufacture expanded PTFE tapes in thicknesses of 0.5mm to 15mm",
            "In-house extrusion and tooling expertise to allow for unique profiles",
        ],
        img: "/infra/ePTFE.png",
        inHouseLists: [""],
    },
    {
        title: "Inspection Facility",
        para: (
            <>
                Fluorokraft maintains stringent quality control through continuous in-process monitoring, ensuring every PTFE component meets tight dimensional tolerances—down to 0.05 mm. Skilled technicians oversee each stage of production to maintain consistency and precision.
                <br />
                <br />
                Final inspections are carried out using advanced video-based measurement systems that accurately validate intricate geometries and surface profiles. Every production batch is fully traceable, supported by detailed dimensional reports and certified material test documentation to guarantee compliance and performance.

            </>
        ),
        points: [
            "Fully-equipped inspection and testing facilities to verify dimensions and material properties",
            "Rapid-I inspection system for non-contact dimensional inspection",
            "Customised gauges for inspection of large volume parts",
            "In-house capacity to test properties such as:",
        ],
        img: "/infra/INSPECTION-BG.png",
        inHouseLists: [
            "Tensile strength",
            "Elongation",
            "Specific gravity",
            "Breakdown voltage",
            "Coefficients of linear thermal expansion",
            "Wear resistance K-Factor",
            "Coefficients of friction",
            "Compressive strength",
        ],
    },
];

export const productCategoryData = [
    {
        title: "Precision PTFE Components",
        subItems: [
            {
                title: "Chemical Processing Valve Seats and Seals",
                subItems: [
                    { title: "Seat Rings" },
                    { title: "Seals" },
                    { title: "Anti Extrusion Rings" },
                    { title: "Gaskets" },
                ],
            },
            {
                title: "High-Purity Fluid Handling Fittings and Connectors",
                subItems: [
                    { title: "Support Rings" },
                    { title: "Guide Components" },
                    { title: "Wipers" },
                    { title: "Duct Support" },
                ],
            },
            {
                title: "Pharmaceutical Processing Gaskets and O-Rings",
                subItems: [
                    { title: "Gaskets" },
                    { title: "Seals" },
                    { title: "Washers" },
                ],
            },
            {
                title: "Linings for Unequal Tee, Elbow, and Other Fittings",
                subItems: [{ title: "Strips and Liners" }, { title: "Base Plates" }],
            },
            {
                title: "Assembly and Structural Components",
                subItems: [
                    { title: "Head Pieces" },
                    { title: "Inserts" },
                    { title: "Electrical Components" },
                ],
            },
        ],
    },
    {
        title: "Custom Solutions and components",
        subItems: [
            { title: "Sealing Solutions" },
            { title: "Motion Control Components" },
            { title: "Structural Components" },
            { title: "Wear Protection" },
            { title: "Fluid Handling" },
            { title: "Assembly Components" },
            { title: "Electrical Accessories" },
            { title: "Fastening Components" },
        ],
    },
    {
        title: "Iso-static Moulded Components",
        subItems: [
            { title: "Butterfly Valve PTFE Seats" },
            { title: "PTFE Encapsulated Discs" },
            { title: "PTFE Sleeved Plug Valves" },
            { title: "AODD Pump PTFE Parts" },
            { title: "Control Valve PTFE Parts" },
            { title: "Diaphragm Valve PTFE Parts" },
            { title: "PTFE Lined Tees and Joints" },
            { title: "PTFE Automotive Seals" },
            { title: "PFA Lined Open Impellers" },
            { title: "SS Lined Unequal Cross" },
            { title: "Isostatically Moulded PTFE Expansion Joint" },
            { title: "PFA Lined Control Valve Body" },
        ],
    },
];

const SpanTag = ({ tag }) => {
    return <span className="font-semibold">{tag}</span>;
};

export const productCategorySpecificDetails = [
    {
        title: "Precision PTFE Components",
        mainTitle: "Chemical Processing Valve Seats and Seals",
        mainImg: "/products/product-3.png",
        subTitle: "Seat Rings",
        desc: "Engineered from high-performance PTFE, Fluorokraft’s precision seat rings ensure leak-proof sealing and extended durability in aggressive chemical processing environments. Seats can be made in multiple diameters as per requirement.",
        sliderImgs: [
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Superior chemical resistance"} /> for harsh environments
            </>,
            <>
                <SpanTag tag={"Leak-proof sealing"} /> with precision-engineered fit
            </>,
            <>
                <SpanTag tag={"High temperature tolerance"} /> for extreme conditions
            </>,
            <>
                <SpanTag tag={"Low friction and wear"} /> for extended valve life
            </>,
            <>
                <SpanTag tag={"Custom sizes and materials"} /> for diverse applications
            </>,
        ],
        applications: [
            <>
                Ideal for <SpanTag tag={"high and low temperature"} /> operations
            </>,
            <>
                Suitable for <SpanTag tag={"static and dynamic sealing systems"} />
            </>,
            <>
                Performs under <SpanTag tag={"high and low pressure"} /> conditions
            </>,
            <>
                Reliable in <SpanTag tag={"corrosive chemical environments"} />
            </>,
            <>
                Effective for <SpanTag tag={"large tolerance gap surfaces"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Chemical Processing Valve Seats and Seals",
        mainImg: "/products/product-1.png",
        subTitle: "Seals",
        desc: "High-performance PTFE seals engineered for reliable, leak-proof operation in demanding chemical processing environments.",
        sliderImgs: [
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
        ],

        benefits: [
            <>
                <SpanTag tag={"Excellent chemical resistance"} /> for aggressive media
            </>,
            <>
                <SpanTag tag={"Leak-proof sealing"} /> in high-performance valves
            </>,
            <>
                <SpanTag tag={"Durable"} /> under extreme temperatures and pressures
            </>,
            <>
                <SpanTag tag={"Low friction and wear"} /> for long service life
            </>,
            <>
                <SpanTag tag={"Custom-engineered"} /> for precise fit and function
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"high and low temperature"} /> chemical processes
            </>,
            <>
                Suitable for <SpanTag tag={"static and dynamic sealing systems"} />
            </>,
            <>
                Performs reliably under <SpanTag tag={"high and low pressure"} />{" "}
                conditions
            </>,
            <>
                Ideal for{" "}
                <SpanTag tag={"corrosive and aggressive chemical environments"} />
            </>,
            <>
                Effective in{" "}
                <SpanTag tag={"deep well drilling and unconventional operations"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Chemical Processing Valve Seats and Seals",
        mainImg: "/products/product-4.png",
        subTitle: "Anti Extrusion Rings",
        desc: "Robust PTFE anti-extrusion rings designed to prevent seal deformation and ensure reliable performance in high-pressure chemical processing systems.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Prevents seal extrusion"} /> under extreme pressure
                conditions
            </>,
            <>
                <SpanTag tag={"Enhances sealing integrity"} /> and system reliability
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to chemicals and aggressive media
            </>,
            <>
                <SpanTag tag={"Performs"} /> in high-temperature and high-pressure
                environments
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for various valve and seal
                configurations
            </>,
        ],
        applications: [
            <>
                Ideal for <SpanTag tag={"high-pressure chemical processing systems"} />
            </>,
            <>
                Suitable for <SpanTag tag={"static and dynamic sealing applications"} />
            </>,
            <>
                Performs in <SpanTag tag={"high and low temperature"} /> environments
            </>,
            <>
                Used in <SpanTag tag={"corrosive and abrasive media handling"} />
            </>,
            <>
                Effective in{" "}
                <SpanTag tag={"deep well and unconventional drilling operations"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Chemical Processing Valve Seats and Seals",
        mainImg: "/products/product-2.png",
        subTitle: "Gaskets",
        desc: "High-performance PTFE gaskets designed for secure, leak-proof sealing in chemically aggressive and high-pressure environments.",
        sliderImgs: [
            { img: "/products/product-2.png", alt: "product" },
            { img: "/products/product-2.png", alt: "product" },
            { img: "/products/product-2.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Excellent chemical resistance"} /> for harsh media
            </>,
            <>
                <SpanTag tag={"Reliable sealing"} /> under extreme conditions
            </>,
            <>
                <SpanTag tag={"Thermally stable"} /> across wide temperature ranges
            </>,
            <>
                <SpanTag tag={"Low friction and wear"} /> for long-lasting performance
            </>,
            <>
                <SpanTag tag={"Custom-fit designs"} /> for various industrial
                applications
            </>,
        ],
        applications: [
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> operations
            </>,
            <>
                Performs in <SpanTag tag={"static and dynamic sealing systems"} />
            </>,
            <>
                Ideal for <SpanTag tag={"high and low pressure"} /> environments
            </>,
            <>
                Effective in <SpanTag tag={"corrosive chemical processing setups"} />
            </>,
            <>
                Used in{" "}
                <SpanTag tag={"deep well drilling and unconventional systems"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "High-Purity Fluid Handling Fittings and Connectors",
        mainImg: "/products/product-1.png",
        subTitle: "Support Rings",
        desc: "Durable PTFE support rings designed to reinforce sealing systems and maintain structural integrity in high-purity fluid handling applications.",
        sliderImgs: [
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Prevents seal deformation"} /> under pressure
            </>,
            <>
                <SpanTag tag={"Enhances mechanical stability"} /> of fittings and
                connectors
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to chemicals and high-purity fluids
            </>,
            <>
                <SpanTag tag={"Performs reliably"} /> across temperature extremes
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for various system configurations
            </>,
        ],
        applications: [
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> fluid systems
            </>,
            <>
                Performs in <SpanTag tag={"static and dynamic sealing environments"} />
            </>,
            <>
                Ideal for <SpanTag tag={"high-pressure and vacuum applications"} />
            </>,
            <>
                Used in <SpanTag tag={"corrosive and ultra-clean fluid processes"} />
            </>,
            <>
                Effective in <SpanTag tag={"systems with wide tolerance gaps"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "High-Purity Fluid Handling Fittings and Connectors",
        mainImg: "/products/product-6.png",
        subTitle: "Guide Components",
        desc: "Precision-engineered PTFE guide components that ensure accurate alignment and smooth operation in high-purity fluid systems.",
        sliderImgs: [
            { img: "/products/product-6.png", alt: "product" },
            { img: "/products/product-6.png", alt: "product" },
            { img: "/products/product-6.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Ensures precise alignment"} /> of moving parts
            </>,
            <>
                <SpanTag tag={"Reduces wear and friction"} /> in dynamic systems
            </>,
            <>
                <SpanTag tag={"Chemically inert"} /> for high-purity applications
            </>,
            <>
                <SpanTag tag={"Performs"} /> under thermal and pressure extremes
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for various fluid handling setups
            </>,
        ],
        applications: [
            <>
                Ideal for <SpanTag tag={"static and dynamic fluid systems"} />
            </>,
            <>
                Performs in <SpanTag tag={"high and low temperature"} /> environments
            </>,
            <>
                Suitable for <SpanTag tag={"high-pressure and vacuum operations"} />
            </>,
            <>
                Used in <SpanTag tag={"corrosive and ultra-clean processing lines"} />
            </>,
            <>
                Effective in{" "}
                <SpanTag tag={"systems requiring precise motion control"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "High-Purity Fluid Handling Fittings and Connectors",
        mainImg: "/products/product-5.png",
        subTitle: "Wipers",
        desc: "PTFE wipers designed to maintain shaft cleanliness and protect sealing systems in high-purity dynamic fluid handling assemblies.",
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Removes contaminants"} /> from reciprocating shafts and
                rods
            </>,
            <>
                <SpanTag tag={"Protects internal seals"} /> from external debris and
                wear
            </>,
            <>
                <SpanTag tag={"Maintains system purity"} /> in ultra-clean environments
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to chemicals and high temperatures
            </>,
            <>
                <SpanTag tag={"Improves seal longevity"} /> and overall system
                reliability
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"dynamic fluid handling systems"} /> with
                reciprocating motion
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> operations
            </>,
            <>
                Performs under <SpanTag tag={"high-pressure and vacuum conditions"} />
            </>,
            <>
                Ideal for <SpanTag tag={"corrosive and high-purity environments"} />
            </>,
            <>
                Integrated into{" "}
                <SpanTag
                    tag={"actuators, guide assemblies, and motion control setups"}
                />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "High-Purity Fluid Handling Fittings and Connectors",
        mainImg: "/products/product-4.png",
        subTitle: "Duct Support",
        desc: "Precision PTFE duct supports designed to stabilize and secure fluid transport lines in high-purity processing environments.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Provides structural support"} /> for ducting and tubing
                systems
            </>,
            <>
                <SpanTag tag={"Minimizes vibration and movement"} /> during operation
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to corrosion and chemical exposure
            </>,
            <>
                <SpanTag tag={"Maintains alignment"} /> in high-purity fluid pathways
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for various duct sizes and layouts
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"static and dynamic fluid transport systems"} />
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> environments
            </>,
            <>
                Performs under <SpanTag tag={"high-pressure and vacuum conditions"} />
            </>,
            <>
                Ideal for{" "}
                <SpanTag tag={"corrosive and ultra-clean processing setups"} />
            </>,
            <>
                Effective in{" "}
                <SpanTag
                    tag={"semiconductor, pharmaceutical, and biotech facilities"}
                />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Pharmaceutical Processing Gaskets and O-Rings",
        mainImg: "/products/product-2.png",
        subTitle: "Gaskets",
        desc: "High-purity PTFE gaskets engineered for sterile, leak-proof sealing in pharmaceutical processing systems.",
        sliderImgs: [
            { img: "/products/product-2.png", alt: "product" },
            { img: "/products/product-2.png", alt: "product" },
            { img: "/products/product-2.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Chemically inert"} /> and non-reactive with
                pharmaceutical media
            </>,
            <>
                <SpanTag tag={"Compliant"} /> with FDA and USP Class VI standards
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to high temperatures and aggressive
                cleaning agents
            </>,
            <>
                <SpanTag tag={"Ensures leak-proof sealing"} /> in critical process
                connections
            </>,
            <>
                <SpanTag tag={"Low extractables"} /> for contamination-free performance
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"flange connections"} /> of reactors, tanks, and
                piping
            </>,
            <>
                Ideal for{" "}
                <SpanTag
                    tag={"clean-in-place (CIP) and steam-in-place (SIP) systems"}
                />
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> pharmaceutical
                processes
            </>,
            <>
                Performs in <SpanTag tag={"static sealing"} /> of sterile fluid transfer
                systems
            </>,
            <>
                Applied in{" "}
                <SpanTag tag={"biotech, injectable, and API manufacturing lines"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Pharmaceutical Processing Gaskets and O-Rings",
        mainImg: "/products/product-3.png",
        subTitle: "Seals",
        desc: "High-purity PTFE seals engineered for leak-proof performance in sterile pharmaceutical processing systems.",
        sliderImgs: [
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Chemically inert"} /> and compatible with pharmaceutical
                media
            </>,
            <>
                <SpanTag tag={"Compliant"} /> with FDA and USP Class VI standards
            </>,
            <>
                <SpanTag tag={"Withstands"} /> high temperatures and aggressive cleaning
                cycles
            </>,
            <>
                <SpanTag tag={"Ensures reliable sealing"} /> in dynamic and static
                applications
            </>,
            <>
                <SpanTag tag={"Minimizes contamination risk"} /> with low extractables
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"valves, pumps, and mixers"} /> in sterile
                processing lines
            </>,
            <>
                Ideal for <SpanTag tag={"dynamic sealing"} /> in reciprocating and
                rotating equipment
            </>,
            <>
                Performs in <SpanTag tag={"CIP/SIP systems"} /> and high-temperature
                sterilization
            </>,
            <>
                Suitable for <SpanTag tag={"aseptic fluid transfer and containment"} />
            </>,
            <>
                Applied in{" "}
                <SpanTag tag={"biotech, injectable, and API manufacturing systems"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Pharmaceutical Processing Gaskets and O-Rings",
        mainImg: "/products/product-4.png",
        subTitle: "Washers",
        desc: "High-purity PTFE washers designed to ensure secure, contamination-free connections in pharmaceutical processing systems.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Chemically inert"} /> and non-reactive with
                pharmaceutical substances
            </>,
            <>
                <SpanTag tag={"Compliant"} /> with FDA and USP Class VI standards
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to high temperatures and sterilization
                processes
            </>,
            <>
                <SpanTag tag={"Provides uniform load distribution"} /> in bolted
                assemblies
            </>,
            <>
                <SpanTag tag={"Minimizes contamination risk"} /> with low extractables
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"instrumentation fittings and filter housings"} />
            </>,
            <>
                Ideal for <SpanTag tag={"static sealing"} /> in sterile fluid systems
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> environments
            </>,
            <>
                Performs in <SpanTag tag={"CIP/SIP"} /> and high-pressure cleaning
                cycles
            </>,
            <>
                Applied in{" "}
                <SpanTag
                    tag={"biotech, injectable, and pharmaceutical production lines"}
                />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Linings for Unequal Tee, Elbow, and Other Fittings",
        mainImg: "/products/product-5.png",
        subTitle: "Strips and Liners",
        desc: "PTFE strips and liners engineered to protect and enhance the performance of complex fluid handling fittings in corrosive and high-purity environments.",
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Provides chemical resistance"} /> to aggressive media
            </>,
            <>
                <SpanTag tag={"Protects internal surfaces"} /> of elbows, tees, and
                custom fittings
            </>,
            <>
                <SpanTag tag={"Ensures smooth flow paths"} /> and reduces contamination
                risk
            </>,
            <>
                <SpanTag tag={"Thermally stable"} /> across wide temperature ranges
            </>,
            <>
                <SpanTag tag={"Custom-fit designs"} /> for complex geometries and
                transitions
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"lined piping systems"} /> for chemical and
                pharmaceutical processing
            </>,
            <>
                Ideal for{" "}
                <SpanTag tag={"unequal tees, elbows, reducers, and custom fittings"} />
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> fluid
                transport
            </>,
            <>
                Performs in <SpanTag tag={"corrosive and ultra-clean environments"} />
            </>,
            <>
                Applied in{" "}
                <SpanTag
                    tag={"semiconductor, biotech, and specialty chemical systems"}
                />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Linings for Unequal Tee, Elbow, and Other Fittings",
        mainImg: "/products/product-5.png",
        subTitle: "Base Plates",
        desc: "PTFE base plates designed to provide stable, corrosion-resistant support and sealing surfaces in complex fluid handling fittings.",
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Offers structural reinforcement"} /> for lined fittings
                and assemblies
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to aggressive chemicals and high
                temperatures
            </>,
            <>
                <SpanTag tag={"Ensures secure sealing"} /> at junctions and transitions
            </>,
            <>
                <SpanTag tag={"Maintains dimensional stability"} /> under pressure and
                thermal stress
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for varied fitting geometries and
                system layouts
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"lined elbows, tees, and reducers"} /> for
                chemical and pharmaceutical systems
            </>,
            <>
                Ideal for <SpanTag tag={"flange interfaces and support points"} /> in
                piping assemblies
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> fluid handling
                environments
            </>,
            <>
                Performs in{" "}
                <SpanTag tag={"corrosive and ultra-clean processing setups"} />
            </>,
            <>
                Applied in{" "}
                <SpanTag
                    tag={"semiconductor, specialty chemical, and biotech installations"}
                />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Assembly and Structural Components",
        mainImg: "/products/product-3.png",
        subTitle: "Head Pieces",
        desc: "PTFE head pieces engineered for reliable sealing and corrosion protection in structural and assembly components across high-purity systems.",
        sliderImgs: [
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Excellent chemical resistance"} /> for aggressive media
            </>,
            <>
                <SpanTag tag={"Provides secure sealing"} /> in flanged and assembled
                units
            </>,
            <>
                <SpanTag tag={"Thermally stable"} /> across wide temperature ranges
            </>,
            <>
                <SpanTag tag={"Supports structural integrity"} /> in demanding
                environments
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for varied assembly configurations
            </>,
        ],
        applications: [
            <>
                Used in{" "}
                <SpanTag
                    tag={"pressure vessels, valve heads, and flanged assemblies"}
                />
            </>,
            <>
                Ideal for{" "}
                <SpanTag tag={"chemical, pharmaceutical, and biotech systems"} />
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> operations
            </>,
            <>
                Performs in <SpanTag tag={"corrosive and ultra-clean environments"} />
            </>,
            <>
                Applied in{" "}
                <SpanTag
                    tag={
                        "reactor heads, containment systems, and custom structural fittings"
                    }
                />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Assembly and Structural Components",
        mainImg: "/products/product-4.png",
        subTitle: "Inserts",
        desc: "PTFE inserts designed to provide chemical shielding and dimensional stability within structural and fluid handling assemblies.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Protects internal surfaces"} /> from chemical exposure
            </>,
            <>
                <SpanTag tag={"Improves wear resistance"} /> in high-contact areas
            </>,
            <>
                <SpanTag tag={"Maintains dimensional accuracy"} /> under thermal stress
            </>,
            <>
                <SpanTag tag={"Compatible"} /> with high-purity and corrosive
                environments
            </>,
            <>
                <SpanTag tag={"Custom-fit"} /> for complex geometries and cavities
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"valve bodies, housings, and custom fittings"} />
            </>,
            <>
                Ideal for{" "}
                <SpanTag tag={"chemical, pharmaceutical, and biotech systems"} />
            </>,
            <>
                Suitable for <SpanTag tag={"high and low temperature"} /> operations
            </>,
            <>
                Performs in <SpanTag tag={"static and dynamic assemblies"} />
            </>,
            <>
                Applied in{" "}
                <SpanTag tag={"fluid contact zones and structural interfaces"} />
            </>,
        ],
    },
    {
        title: "Precision PTFE Components",
        mainTitle: "Assembly and Structural Components",
        mainImg: "/products/product-5.png",
        subTitle: "Electrical Components",
        desc: "PTFE electrical components engineered for insulation, chemical resistance, and reliability in sensitive and corrosive environments.",
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],

        benefits: [
            <>
                <SpanTag tag={"Excellent dielectric properties"} /> for electrical
                insulation
            </>,
            <>
                <SpanTag tag={"Resistant"} /> to chemicals and moisture
            </>,
            <>
                <SpanTag tag={"Stable"} /> under high temperatures and voltages
            </>,
            <>
                <SpanTag tag={"Low surface energy"} /> prevents contamination buildup
            </>,
            <>
                <SpanTag tag={"Customizable"} /> for sensors, bushings, and spacers
            </>,
        ],
        applications: [
            <>
                Used in <SpanTag tag={"instrumentation panels and sensor housings"} />
            </>,
            <>
                Ideal for <SpanTag tag={"electrically sensitive fluid systems"} />
            </>,
            <>
                Suitable for <SpanTag tag={"high-purity and corrosive environments"} />
            </>,
            <>
                Performs in <SpanTag tag={"control systems and monitoring equipment"} />
            </>,
            <>
                Applied in{" "}
                <SpanTag
                    tag={"semiconductor, pharmaceutical, and chemical facilities"}
                />
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-1.png",
        subTitle: "Sealing Solutions",
        desc: "Precision-engineered seals offering exceptional chemical resistance, thermal stability, and leak-proof performance. Designed for static and dynamic sealing in aggressive and sterile environments.",
        sliderImgs: [
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
        ],

        benefits: [
            `Excellent chemical and thermal resistance`,
            `Leak-proof performance in static and dynamic systems`,
            `Low friction and wear for extended service life`,
            `FDA and USP Class VI compliant for clean applications`,
            `Customizable for complex geometries and pressure ratings`,
        ],
        applications: [
            <>
                <SpanTag tag={"Pharmaceutical and biotech processing"} />: sterile
                sealing in CIP/SIP systems
            </>,
            <>
                <SpanTag tag={"Chemical manufacturing"} />: leak-proof seals for
                corrosive media
            </>,
            <>
                <SpanTag tag={"Oil & gas"} />: high-pressure seals in valves and pumps
            </>,
            <>
                <SpanTag tag={"Food & beverage"} />: hygienic seals in fluid transfer
                systems
            </>,
            <>
                <SpanTag tag={"Semiconductor"} />: ultra-clean sealing in wafer
                processing equipment
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-5.png",
        subTitle: "Motion Control Components",
        desc: "Low-friction, wear-resistant parts that ensure smooth and precise movement in mechanical systems. Suitable for actuators, guide assemblies, and high-purity motion control setups.",
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],

        benefits: [
            `Low-friction surfaces for smooth, precise movement`,
            `High wear resistance under continuous operation`,
            `Dimensional stability across temperature variations`,
            `Suitable for clean room and high-purity environments`,
            `Custom-fit for actuators, guides, and sliding systems`,
        ],
        applications: [
            <>
                <SpanTag tag={"Automation and robotics"} />: low-friction guides and
                bushings
            </>,
            <>
                <SpanTag tag={"Medical devices"} />: precision movement in diagnostic
                equipment
            </>,
            <>
                <SpanTag tag={"Aerospace"} />: wear-resistant components in control
                systems
            </>,
            <>
                <SpanTag tag={"Packaging machinery"} />: smooth motion in high-speed
                operations
            </>,
            <>
                <SpanTag tag={"Laboratory equipment"} />: sliding and rotating parts in
                clean environments
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-5.png",
        subTitle: "Structural Components",
        desc: "Robust and chemically inert structural elements that provide mechanical support and long-term durability. Used in assemblies exposed to corrosive media and extreme temperatures.",
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],
        benefits: [
            `High mechanical strength and rigidity`,
            `Corrosion-resistant in aggressive chemical environments`,
            `Lightweight alternative to metal components`,
            `Thermally stable for demanding process conditions`,
            `Custom-machined for complex assemblies and supports`,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical reactors and vessels"} />: corrosion-resistant
                supports
            </>,
            <>
                <SpanTag tag={"Pharmaceutical skids and frames"} />: non-metallic
                structural parts
            </>,
            <>
                <SpanTag tag={"Semiconductor fabrication"} />: cleanroom-compatible
                assemblies
            </>,
            <>
                <SpanTag tag={"Water treatment systems"} />: structural elements in
                corrosive zones
            </>,
            <>
                <SpanTag tag={"Food processing lines"} />: hygienic structural supports
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-6.png",
        subTitle: "Wear Protection",
        desc: "Advanced polymer linings and inserts that reduce abrasion and extend equipment life. Ideal for high-contact surfaces in fluid, mechanical, and particulate handling systems.",
        sliderImgs: [
            { img: "/products/product-6.png", alt: "product" },
            { img: "/products/product-6.png", alt: "product" },
            { img: "/products/product-6.png", alt: "product" },
        ],
        benefits: [
            `Reduces abrasion and surface damage in high-contact areas`,
            `Extends equipment life and reduces maintenance downtime`,
            `Chemically inert and non-stick surface properties`,
            `Performs under high loads and sliding speeds`,
            `Ideal for lining chutes, valves, and moving parts`,
        ],
        applications: [
            <>
                <SpanTag tag={"Bulk material handling"} />: liners for chutes and
                hoppers
            </>,
            <>
                <SpanTag tag={"Mining and minerals"} />: abrasion-resistant surfaces
            </>,
            <>
                <SpanTag tag={"Chemical processing"} />: protective layers in high-flow
                zones
            </>,
            <>
                <SpanTag tag={"Pharma and biotech"} />: wear pads in fluid systems
            </>,
            <>
                <SpanTag tag={"Automotive"} />: anti-friction components in moving
                assemblies
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-4.png",
        subTitle: "Fluid Handling",
        desc: "Components designed to ensure clean, efficient, and contamination-free fluid transport. Includes liners, fittings, and supports for high-purity and corrosive fluid systems.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            `fluid transport`,
            `Resistant Ensures clean, contamination-free to aggressive chemicals and solvents`,
            `Maintains integrity under pressure and temperature extremes`,
            `Smooth internal surfaces reduce flow resistance and buildup`,
            `Customizable for fittings, liners, and duct supports`,
        ],
        applications: [
            <>
                <SpanTag tag={"Pharmaceutical and biotech"} />: sterile fluid transfer
                systems
            </>,
            <>
                <SpanTag tag={"Chemical plants"} />: lined fittings and ducts for
                corrosive fluids
            </>,
            <>
                <SpanTag tag={"Semiconductor"} />: ultrapure water and chemical
                distribution
            </>,
            <>
                <SpanTag tag={"Food & beverage"} />: hygienic piping and connectors
            </>,
            <>
                <SpanTag tag={"Water purification"} />: non-reactive fluid pathways
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-4.png",
        subTitle: "Assembly Components",
        desc: "Precision-molded parts that enhance the integrity and performance of complex assemblies. Used in flanged joints, housings, and multi-part structural systems.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            `Enhances sealing and structural integrity in assemblies`,
            `Chemically inert and thermally stable`,
            `Precision-molded for tight tolerances and repeatability`,
            `Compatible with high-purity and sterile systems`,
            `Supports modular and complex system integration`,
        ],
        applications: [
            <>
                <SpanTag tag={"Instrumentation and control panels"} />: precision-fit
                parts
            </>,
            <>
                <SpanTag tag={"Valve and pump assemblies"} />: sealing and support
                elements
            </>,
            <>
                <SpanTag tag={"Medical devices"} />: modular components for sterile
                systems
            </>,
            <>
                <SpanTag tag={"Lab equipment"} />: cleanroom-compatible assembly parts
            </>,
            <>
                <SpanTag tag={"Process skids"} />: integration of multiple functional
                units
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-3.png",
        subTitle: "Electrical Accessories",
        desc: "High-performance insulating components with excellent dielectric properties and chemical resistance. Ideal for instrumentation, sensor housings, and control systems in harsh environments.",
        sliderImgs: [
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
        ],
        benefits: [
            `Excellent dielectric strength and insulation properties`,
            `Chemically resistant for harsh environments`,
            `Stable under high voltage and temperature conditions`,
            `Low moisture absorption for consistent performance`,
            `Customizable for sensors, bushings, and terminal supports`,
        ],
        applications: [
            <>
                <SpanTag tag={"Semiconductor equipment"} />: insulators and sensor
                housings
            </>,
            <>
                <SpanTag tag={"Pharmaceutical automation"} />: dielectric components in
                control systems
            </>,
            <>
                <SpanTag tag={"Chemical plants"} />: corrosion-resistant electrical
                interfaces
            </>,
            <>
                <SpanTag tag={"Medical electronics"} />: non-reactive insulating parts
            </>,
            <>
                <SpanTag tag={"Industrial instrumentation"} />: bushings and terminal
                supports
            </>,
        ],
    },
    {
        mainTitle: "Custom Solutions and components",
        mainImg: "/products/product-4.png",
        subTitle: "Fastening Components",
        desc: "Corrosion-resistant fasteners and spacers designed for secure, stable connections in chemically aggressive and sterile setups. Customizable for various mechanical and fluid systems.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            `Corrosion-resistant in chemically aggressive environments`,
            `Lightweight and non-conductive alternatives to metal fasteners`,
            `Maintains strength and shape under thermal stress`,
            `Ideal for sterile and cleanroom applications`,
            `Custom sizes and geometries for secure, reliable assembly`,
        ],
        applications: [
            <>
                <SpanTag tag={"Cleanroom assemblies"} />: non-metallic fasteners for
                sterile environments
            </>,
            <>
                <SpanTag tag={"Chemical processing"} />: corrosion-resistant bolts and
                spacers
            </>,
            <>
                <SpanTag tag={"Pharma skids and frames"} />: hygienic fastening
                solutions
            </>,
            <>
                <SpanTag tag={"Electronics"} />: non-conductive fasteners in sensitive
                systems
            </>,
            <>
                <SpanTag tag={"Food processing"} />: easy-to-clean fastening components
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-1.png",
        subTitle: "Butterfly Valve PTFE Seats and PTFE Encapsulated Discs",
        desc2:
            "ISO-static moulded PTFE seats and encapsulated discs offer superior sealing and corrosion resistance in butterfly valves, combining the chemical inertness of PTFE with the strength of metal cores. Thesecomponents ensure reliable performance in high-pressure, chemically aggressive environments across various industries.",
        desc: (
            <>
                ISO-static moulded PTFE seats and encapsulated discs offer superior
                sealing and corrosion resistance in butterfly valves, combining the
                chemical inertness of PTFE with the strength of metal cores. These
                components ensure reliable performance in high-pressure, chemically
                aggressive environments across various industries.
                <br />
                <br />
                <SpanTag tag={"PTFE Seats:"} /> ISO static moulding creates PTFE seats
                with uniform density and no voids, ensuring a perfect seal. These seats
                are capable of withstanding high pressures and aggressive chemicals.
                <br />
                <br />
                <SpanTag tag={"Encapsulated Discs:"} /> PTFE encapsulated discs are
                produced by coating a metal core with PTFE through ISO static moulding.
                This provides the strength of metal combined with the chemical
                resistance of PTFE, ensuring durability and reliability in corrosive
                environments.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Uniform Density & No Voids"} />: Ensures perfect sealing
                and eliminates weak points
            </>,
            <>
                <SpanTag tag={"High Chemical Resistance"} />: Withstands aggressive
                fluids without degradation
            </>,
            <>
                <SpanTag tag={"Superior Mechanical Strength"} />: Combines PTFE’s
                resilience with metal core durability
            </>,
            <>
                <SpanTag tag={"Low Friction & Wear"} />: Enhances valve life and reduces
                maintenance
            </>,
            <>
                <SpanTag tag={"Thermal Stability"} />: Performs reliably under extreme
                temperature conditions
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Processing Plants"} />: For handling corrosive
                media
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Manufacturing"} />: Ensures sterile and
                leak-proof flow control
            </>,
            <>
                <SpanTag tag={"Water Treatment Systems"} />: Reliable sealing in fluid
                regulation
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Hygienic flow control with
                non-reactive surfaces
            </>,
            <>
                <SpanTag tag={"Oil & Gas Pipelines"} />: Durable sealing under high
                pressure and temperature
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-3.png",
        subTitle: "PTFE Sleeved Plug Valves",
        desc2:
            "Precision-engineered for smooth, leak-free operation in corrosive and high-temperature environments, PTFE sleeved plug valves offer unmatched durability and chemical resistance. ISO-static moulded PTFE sleeves ensure uniformity, enhancing valve performance and longevity.",
        desc: (
            <>
                Precision-engineered for smooth, leak-free operation in corrosive and
                high-temperature environments, PTFE sleeved plug valves offer unmatched
                durability and chemical resistance. ISO-static moulded PTFE sleeves
                ensure uniformity, enhancing valve performance and longevity.
                <br />
                <br />
                Plug valves control fluid flow by rotation of a cylindrical or tapered
                plug. PTFE sleeved plug valves utilize a PTFE sleeve to provide a tight
                seal and smooth operation.
                <br />
                <br />
                PTFE Sleeves: The ISO static moulding process ensures that the PTFE
                sleeve is uniformly dense and free of imperfections. This enhances the
                valve’s performance by reducing friction and wear, and providing
                superior chemical resistance, making it ideal for use in harsh
                environments.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Superior Sealing"} />: PTFE sleeves provide tight,
                leak-proof seals even under high pressure
            </>,
            <>
                <SpanTag tag={"Chemical Resistance"} />: Ideal for aggressive media due
                to PTFE’s inert nature
            </>,
            <>
                <SpanTag tag={"Low Friction Operation"} />: Smooth surface finish
                reduces wear and energy consumption
            </>,
            <>
                <SpanTag tag={"Thermal Stability"} />: Maintains integrity across wide
                temperature ranges
            </>,
            <>
                <SpanTag tag={"Durability"} />: ISO-static moulding enhances mechanical
                strength and service life
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Processing Plants"} />: Handles corrosive fluids
                safely
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Manufacturing"} />: Ensures
                contamination-free flow control
            </>,
            <>
                <SpanTag tag={"Oil & Gas Industry"} />: Suitable for harsh and
                high-pressure environments
            </>,
            <>
                <SpanTag tag={"Water Treatment Facilities"} />: Reliable in handling
                treated and untreated water
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Maintains hygiene and
                resists chemical cleaning agents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-6.png",
        subTitle: "AODD Pump PTFE Parts",
        desc2:
            "Engineered for durability and chemical resilience, ISO-static moulded PTFE components in AODD pumps ensure consistent performance in the most demanding fluid handling environments. Precision-moulded diaphragms, valve balls, and seats offer superior sealing, flexibility, and longevity.",
        desc: (
            <>
                Engineered for durability and chemical resilience, ISO-static moulded
                PTFE components in AODD pumps ensure consistent performance in the most
                demanding fluid handling environments. Precision-moulded diaphragms,
                valve balls, and seats offer superior sealing, flexibility, and
                longevity.
                <br />
                <br />
                Air-operated double diaphragm (AODD) pumps are used in applications
                requiring robust and reliable performance in aggressive chemical
                environments.
                <br />
                <br />
                PTFE Parts: Critical components like diaphragms, valve balls, and seats
                are moulded using ISO static techniques to achieve consistent material
                properties. This ensures excellent chemical compatibility, flexibility,
                and longevity, critical for maintaining the pump’s performance and
                reliability.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-6.png", alt: "product" },
            { img: "/products/product-6.png", alt: "product" },
            { img: "/products/product-6.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Exceptional Chemical Resistance"} />: Withstands
                aggressive acids, solvents, and corrosive fluids
            </>,
            <>
                <SpanTag tag={"High Mechanical Strength"} />: ISO-static moulding
                enhances durability and load-bearing capacity
            </>,
            <>
                <SpanTag tag={"Reliable Sealing"} />: Minimizes leakage with
                precision-fit components
            </>,
            <>
                <SpanTag tag={"Thermal Stability"} />: Performs consistently across wide
                temperature ranges
            </>,
            <>
                <SpanTag tag={"Low Friction & Wear"} />: Smooth surfaces reduce energy
                loss and extend service life
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Transfer Systems"} />: Ideal for handling
                corrosive and hazardous fluids
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Production"} />: Ensures purity and
                reliability in sterile environments
            </>,
            <>
                <SpanTag tag={"Food & Beverage Processing"} />: Maintains hygiene and
                resists cleaning chemicals
            </>,
            <>
                <SpanTag tag={"Mining & Slurry Handling"} />: Durable under abrasive and
                high-solid conditions
            </>,
            <>
                <SpanTag tag={"Wastewater Treatment"} />: Reliable in pumping sludge,
                chemicals, and effluents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-5.png",
        subTitle: "Control Valve PTFE Parts",
        desc2:
            "ISO-static moulded PTFE components in control valves deliver precision, durability, and chemical resilience, ensuring optimal flow regulation even in extreme process conditions. Seats, diaphragms, and packing rings offer low friction, tight sealing, and long-term reliability.",
        desc: (
            <>
                ISO-static moulded PTFE components in control valves deliver precision,
                durability, and chemical resilience, ensuring optimal flow regulation
                even in extreme process conditions. Seats, diaphragms, and packing rings
                offer low friction, tight sealing, and long-term reliability.
                <br />
                <br />
                Control valves regulate flow or pressure in process systems, often under
                extreme conditions.
                <br />
                <br />
                PTFE Parts: ISO static moulding is used to produce components such as
                valve seats, diaphragms, and packing rings. These PTFE parts are crucial
                for ensuring precise control and long-term reliability by providing low
                friction, excellent sealing, and resistance to wear and chemical attack.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Superior Sealing Integrity"} />: Minimizes leakage and
                ensures accurate flow control
            </>,
            <>
                <SpanTag tag={"Chemical Resistance"} />: Withstands aggressive media
                across a wide pH range
            </>,
            <>
                <SpanTag tag={"Low Friction Operation"} />: Enhances valve
                responsiveness and reduces wear
            </>,
            <>
                <SpanTag tag={"Thermal Stability"} />: Maintains performance under
                fluctuating temperatures
            </>,
            <>
                <SpanTag tag={"Extended Service Life"} />: ISO-static moulding ensures
                consistent quality and durability
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Petrochemical Plants"} />: Reliable in handling corrosive
                and high-temperature fluids
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Manufacturing"} />: Ensures precision and
                contamination-free control
            </>,
            <>
                <SpanTag tag={"Power Generation"} />: Performs under high pressure and
                thermal stress
            </>,
            <>
                <SpanTag tag={"Water & Wastewater Treatment"} />: Effective in
                regulating diverse fluid types
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Maintains hygiene and
                resists chemical cleaning agents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-3.png",
        subTitle: "Diaphragm Valve PTFE Parts",
        desc2:
            "ISO-static moulded PTFE diaphragms deliver exceptional chemical resistance, flexibility, and sealing performance, making them ideal for demanding flow control in corrosive and slurry-based environments. Uniform thickness and material integrity ensure long-term reliability and consistent valve operation.",
        desc: (
            <>
                ISO-static moulded PTFE diaphragms deliver exceptional chemical
                resistance, flexibility, and sealing performance, making them ideal for
                demanding flow control in corrosive and slurry-based environments.
                Uniform thickness and material integrity ensure long-term reliability
                and consistent valve operation.
                <br />
                <br />
                Diaphragm valves are ideal for handling corrosive fluids and slurries,
                commonly used in industries such as chemical processing and
                pharmaceuticals.
                <br />
                <br />
                PTFE Diaphragms: Moulded using the ISO static process, PTFE diaphragms
                offer outstanding chemical resistance. This method ensures uniform
                thickness and properties, which is essential for the reliable operation
                of diaphragm valves.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
            { img: "/products/product-3.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Outstanding Chemical Resistance"} />: Handles aggressive
                acids, alkalis, and solvents
            </>,
            <>
                <SpanTag tag={"Superior Flexibility"} />: Maintains responsiveness and
                sealing under dynamic conditions
            </>,
            <>
                <SpanTag tag={"Uniform Thickness"} />: Ensures consistent performance
                and reduces failure risk
            </>,
            <>
                <SpanTag tag={"Low Friction & Wear"} />: Enhances valve life and
                operational efficiency
            </>,
            <>
                <SpanTag tag={"Thermal Stability"} />: Performs reliably across wide
                temperature ranges
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Processing"} />: Ideal for corrosive fluid
                handling and dosing systems
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Manufacturing"} />: Ensures sterile and
                precise flow control
            </>,
            <>
                <SpanTag tag={"Mining & Slurry Transport"} />: Withstands abrasive and
                particulate-laden media
            </>,
            <>
                <SpanTag tag={"Water Treatment Plants"} />: Effective in handling
                aggressive and variable fluids
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Maintains hygiene and
                resists cleaning agents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-4.png",
        subTitle: "PTFE Lined Tees and Joints",
        desc2:
            "ISO-static moulded PTFE linings in tees and joints provide a seamless, corrosion-resistant barrier, ensuring long-lasting protection and leak-free performance in aggressive chemical piping systems. These components enhance system integrity while reducing maintenance and downtime.",
        desc: (
            <>
                ISO-static moulded PTFE linings in tees and joints provide a seamless,
                corrosion-resistant barrier, ensuring long-lasting protection and
                leak-free performance in aggressive chemical piping systems. These
                components enhance system integrity while reducing maintenance and
                downtime.
                <br />
                <br />
                PTFE lined tees and joints are essential for piping systems transporting
                aggressive chemicals, offering a protective barrier against corrosion.
                <br />
                <br />
                Lined Components: ISO static moulding produces PTFE linings that are
                dense and free from defects. These linings protect the underlying metal
                from corrosion, extend the service life of the piping components, and
                ensure leak-free operation in challenging environments.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Superior Corrosion Resistance"} />: Shields metal
                surfaces from aggressive chemicals
            </>,
            <>
                <SpanTag tag={"Uniform Lining Quality"} />: ISO-static moulding ensures
                defect-free, dense linings
            </>,
            <>
                <SpanTag tag={"Leak-Free Operation"} />: Excellent sealing performance
                under pressure and temperature variations
            </>,
            <>
                <SpanTag tag={"Extended Service Life"} />: Reduces wear and degradation
                in harsh environments
            </>,
            <>
                <SpanTag tag={"Low Maintenance"} />: Minimizes downtime and replacement
                frequency
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Processing Plants"} />: For safe transport of
                corrosive fluids
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Pipelines"} />: Ensures purity and
                chemical compatibility
            </>,
            <>
                <SpanTag tag={"Acid Handling Systems"} />: Withstands highly acidic and
                oxidizing agents
            </>,
            <>
                <SpanTag tag={"Water Treatment Facilities"} />: Resists scaling and
                chemical attack
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Maintains hygiene and
                resists cleaning agents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-1.png",
        subTitle: "PTFE Automotive Seals",
        desc2:
            "ISO-static moulded PTFE seals offer unmatched durability, chemical resistance, and low friction, making them ideal for high-performance automotive systems. Their precision and reliability ensure optimal sealing in demanding thermal and mechanical environments.",
        desc: (
            <>
                ISO-static moulded PTFE seals offer unmatched durability, chemical
                resistance, and low friction, making them ideal for high-performance
                automotive systems. Their precision and reliability ensure optimal
                sealing in demanding thermal and mechanical environments.
                <br />
                <br />
                PTFE seals are widely used in automotive and various other industrial
                applications due to their exceptional properties. When manufactured
                using the ISO static moulding process, PTFE seals gain additional
                benefits, making them even more suitable for demanding environments.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
            { img: "/products/product-1.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"High Wear Resistance"} />: Withstands continuous motion
                and mechanical stress
            </>,
            <>
                <SpanTag tag={"Low Friction"} />: Enhances fuel efficiency and reduces
                component wear
            </>,
            <>
                <SpanTag tag={"Thermal Stability"} />: Performs reliably across extreme
                temperature ranges
            </>,
            <>
                <SpanTag tag={"Chemical Compatibility"} />: Resists oils, fuels,
                coolants, and additives
            </>,
            <>
                <SpanTag tag={"Dimensional Accuracy"} />: Ensures tight sealing and
                consistent performance
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Engine Systems"} />: Seals for oil, coolant, and fuel
                circuits
            </>,
            <>
                <SpanTag tag={"Transmission Assemblies"} />: Reliable sealing under high
                pressure and temperature
            </>,
            <>
                <SpanTag tag={"Brake Systems"} />: Maintains integrity in hydraulic and
                pneumatic setups
            </>,
            <>
                <SpanTag tag={"EV Battery Packs"} />: Chemical-resistant seals for
                thermal management systems
            </>,
            <>
                <SpanTag tag={"Fuel Injection Systems"} />: Precision sealing for
                high-pressure fuel delivery
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-2.png",
        subTitle: "PFA Lined Open Impellers",
        desc2:
            "ISO-static moulded PFA linings on open impellers deliver superior corrosion resistance and hydraulic efficiency, making them ideal for aggressive fluid handling in demanding industrial environments. These impellers combine chemical durability with optimized flow dynamics for long-term performance.",
        desc: (
            <>
                ISO-static moulded PFA linings on open impellers deliver superior
                corrosion resistance and hydraulic efficiency, making them ideal for
                aggressive fluid handling in demanding industrial environments. These
                impellers combine chemical durability with optimized flow dynamics for
                long-term performance.
                <br />
                <br />
                PFA lined open impellers are a type of centrifugal pump impeller
                designed to provide exceptional corrosion resistance and efficiency in
                harsh industrial environments.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-2.png", alt: "product" },
            { img: "/products/product-2.png", alt: "product" },
            { img: "/products/product-2.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Exceptional Corrosion Resistance"} />: Protects against
                acids, alkalis, and solvents
            </>,
            <>
                <SpanTag tag={"Smooth Flow Path"} />: Enhances pump efficiency and
                reduces energy consumption
            </>,
            <>
                <SpanTag tag={"Uniform Lining Quality"} />: ISO-static moulding ensures
                defect-free, dense linings
            </>,
            <>
                <SpanTag tag={"Extended Service Life"} />: Minimizes wear and
                degradation in harsh conditions
            </>,
            <>
                <SpanTag tag={"Low Maintenance"} />: Reduces downtime and operational
                costs
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Processing Plants"} />: Ideal for corrosive
                fluid transfer
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Manufacturing"} />: Ensures purity and
                compatibility with reactive substances
            </>,
            <>
                <SpanTag tag={"Wastewater Treatment"} />: Handles aggressive and
                variable effluents
            </>,
            <>
                <SpanTag tag={"Mining Operations"} />: Suitable for abrasive slurry and
                chemical handling
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Maintains hygiene and
                resists cleaning agents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-5.png",
        subTitle: "SS Lined Unequal Cross",
        desc2:
            "ISO-static moulded lining within stainless steel unequal crosses ensures uniform thickness, corrosion resistance, and durability—ideal for precision flow measurement in aggressive and high-purity fluid systems. Combining structural strength with chemical protection, these components support long-term, leak-free operation.",
        desc: (
            <>
                ISO-static moulded lining within stainless steel unequal crosses ensures
                uniform thickness, corrosion resistance, and durability—ideal for
                precision flow measurement in aggressive and high-purity fluid systems.
                Combining structural strength with chemical protection, these components
                support long-term, leak-free operation.
                <br />
                <br />
                A stainless steel electromagnetic flow meter body with an
                isostatic moulded lining. The isostatic moulding process ensures uniform
                thickness and high durability of the lining, making it ideal for
                applications in corrosive and high-purity fluid handling.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
            { img: "/products/product-5.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Uniform Lining Thickness"} />: Ensures consistent
                performance and minimizes weak points
            </>,
            <>
                <SpanTag tag={"Superior Corrosion Resistance"} />: Protects against
                aggressive chemicals and fluids
            </>,
            <>
                <SpanTag tag={"High Mechanical Strength"} />: Stainless steel body
                supports pressure and load
            </>,
            <>
                <SpanTag tag={"Leak-Free Operation"} />: Precision lining enhances
                sealing and flow accuracy
            </>,
            <>
                <SpanTag tag={"Extended Service Life"} />: Reduced wear and degradation
                in harsh environments
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Electromagnetic Flow Meters"} />: Accurate measurement in
                corrosive media
            </>,
            <>
                <SpanTag tag={"Chemical Processing Pipelines"} />: Reliable flow control
                in reactive systems
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Fluid Handling"} />: Maintains purity and
                process integrity
            </>,
            <>
                <SpanTag tag={"Water Treatment Systems"} />: Handles variable and
                aggressive effluents
            </>,
            <>
                <SpanTag tag={"Food & Beverage Processing"} />: Ensures hygiene and
                resists cleaning agents
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-4.png",
        subTitle: "Isostatically Moulded PTFE Expansion Joint",
        desc2:
            "Designed to absorb thermal movement, vibration, and misalignment, isostatically moulded PTFE expansion joints offer unmatched chemical resistance and flexibility in demanding pipeline systems. The uniform lining ensures long-term reliability and performance in corrosive and high-purity fluid applications.",
        desc: (
            <>
                Designed to absorb thermal movement, vibration, and misalignment,
                isostatically moulded PTFE expansion joints offer unmatched chemical
                resistance and flexibility in demanding pipeline systems. The uniform
                lining ensures long-term reliability and performance in corrosive and
                high-purity fluid applications.
                <br />
                <br />
                An isostatically moulded PTFE expansion joint is a flexible piping
                component designed to absorb thermal expansion, vibrations, and
                mechanical misalignments in pipeline systems. The PTFE
                (Polytetrafluoroethylene) lining provides exceptional chemical
                resistance, making it ideal for handling corrosive and high-purity
                fluids.
            </>
        ),
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Excellent Chemical Resistance"} />: Ideal for aggressive
                and high-purity media
            </>,
            <>
                <SpanTag tag={"Superior Flexibility"} />: Absorbs thermal expansion,
                vibration, and misalignment
            </>,
            <>
                <SpanTag tag={"Uniform Wall Thickness"} />: Ensures consistent
                mechanical performance and durability
            </>,
            <>
                <SpanTag tag={"High Temperature Tolerance"} />: Maintains integrity
                under thermal cycling
            </>,
            <>
                <SpanTag tag={"Leak-Free Operation"} />: Precision moulding enhances
                sealing and system safety
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Processing Plants"} />: For corrosive and
                reactive fluid handling
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Manufacturing"} />: Maintains purity in
                sterile environments
            </>,
            <>
                <SpanTag tag={"Semiconductor Industry"} />: Suitable for ultra-pure
                chemical transport
            </>,
            <>
                <SpanTag tag={"Power Generation"} />: Handles thermal stress in
                high-temperature lines
            </>,
            <>
                <SpanTag tag={"Water & Wastewater Treatment"} />: Absorbs movement in
                chemically treated systems
            </>,
        ],
    },
    {
        mainTitle: "Iso-static Moulded Components",
        mainImg: "/products/product-4.png",
        subTitle: "PFA Lined Control Valve Body",
        desc2:
            "Engineered for precision flow control, PFA-lined control valve bodies offer exceptional resistance to corrosive and high-purity fluids, ensuring long-term reliability in demanding process environments. The ISO-static moulded PFA lining provides uniform protection against aggressive media like acids, alkalis, and solvents.",
        desc: "Engineered for precision flow control, PFA-lined control valve bodies offer exceptional resistance to corrosive and high-purity fluids, ensuring long-term reliability in demanding process environments. The ISO-static moulded PFA lining provides uniform protection against aggressive media like acids, alkalis, and solvents.<br/>A PFA-lined control valve body is designed to regulate the flow of highly corrosive, abrasive, or high-purity fluids in industrial processes. The PFA lining provides superior chemical resistance, ensuring durability and protection against aggressive media like acids, alkalis, and solvents.",
        sliderImgs: [
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
            { img: "/products/product-4.png", alt: "product" },
        ],
        benefits: [
            <>
                <SpanTag tag={"Superior Chemical Resistance"} />: Withstands highly
                corrosive and reactive fluids
            </>,
            <>
                <SpanTag tag={"Uniform Lining Integrity"} />: ISO-static moulding
                ensures defect-free, dense linings
            </>,
            <>
                <SpanTag tag={"Extended Service Life"} />: Minimizes wear and
                degradation over time
            </>,
            <>
                <SpanTag tag={"Leak-Free Operation"} />: Enhances sealing and flow
                accuracy
            </>,
            <>
                <SpanTag tag={"Thermal and Mechanical Stability"} />: Performs reliably
                under fluctuating conditions
            </>,
        ],
        applications: [
            <>
                <SpanTag tag={"Chemical Manufacturing"} />: For precise control of
                aggressive process fluids
            </>,
            <>
                <SpanTag tag={"Pharmaceutical Production"} />: Maintains purity and
                resists contamination
            </>,
            <>
                <SpanTag tag={"Semiconductor Fabrication"} />: Suitable for ultra-pure
                chemical flow systems
            </>,
            <>
                <SpanTag tag={"Water Treatment Plants"} />: Handles corrosive and
                variable effluents
            </>,
            <>
                <SpanTag tag={"Food & Beverage Industry"} />: Ensures hygiene and
                resists cleaning agents
            </>,
        ],
    },
];
