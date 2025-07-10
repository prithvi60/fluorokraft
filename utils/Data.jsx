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
        title: "LDPE or HDPE",
        detail1:
            "Polyethylene, available in two primary forms—LDPE (Low-Density Polyethylene) and HDPE (High-Density Polyethylene)—is a widely used thermoplastic known for its excellent chemical resistance, low moisture absorption, and lightweight nature. Both grades are non-toxic, UV-stabilizable, and offer good electrical insulation properties. LDPE is more flexible and impact-resistant, making it suitable for applications that require pliability, while HDPE is stronger and more rigid, ideal for structural components and high-load environments. Both materials are available in FDA-compliant grades for food and medical uses.",
        detail2:
            "Polyethylene materials perform well in a temperature range of approximately -50°C to +120°C, depending on the grade and formulation. They resist corrosion from acids, bases, and alcohols, making them ideal for use in chemical tanks, piping, seals, liners, packaging, and industrial containers. Fluorokraft offers tailored LDPE and HDPE solutions based on specific mechanical, thermal, or fabrication requirements—delivering durable, cost-effective performance across various industries.",
    },
];

export const materialCardsLists = [
    {
        title: "Fluoropolymers",
        lists: ["PTFE", "PCTFE"],
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
        title: "Machine Shop",
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
