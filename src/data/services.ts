export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  highlights?: string[];
  image: string;
  icon?: string;
  label?: string;
}

export const services: ServiceData[] = [
  {
    id: "hospitality-development",
    slug: "property-development-consulting",
    title: "1. Hospitality Development & Project Advisory",
    shortDescription: "Partners with owners and investors to conceptualize and execute hospitality projects with strong market positioning.",
    description: "We partner with owners and investors to conceptualize and execute hospitality projects with strong market positioning and long-term value creation.",
    highlights: [
      "Project concept & positioning strategy",
      "Highest & best use analysis",
      "Development planning & structuring",
      "Market-driven asset positioning"
    ],
    features: ["Concept", "Positioning", "Advisory"],
    image: "/images/services/property_development.png",
    label: "Strategic"
  },
  {
    id: "architecture-design",
    slug: "property-development-consulting",
    title: "2. Architecture, Design & Technical Planning",
    shortDescription: "Aligning design excellence with operational efficiency to create scalable, guest-centric environments.",
    description: "We align design excellence with operational efficiency to create scalable, guest-centric hospitality environments.",
    highlights: [
      "Architectural planning & space optimization",
      "Interior design coordination",
      "Technical design review & validation",
      "Cost-efficient design solutions"
    ],
    features: ["Architecture", "Interior Design", "Validation"],
    image: "/images/services/brand_partnerships.png",
    label: "Design"
  },
  {
    id: "feasibility-budgeting",
    slug: "finance-accounting",
    title: "3. Feasibility, Budgeting & Financial Planning",
    shortDescription: "Ensuring project financial viability with structured planning and optimized capital deployment.",
    description: "We ensure your project is financially viable with structured planning and optimized capital deployment.",
    highlights: [
      "Financial feasibility analysis",
      "Budget planning & cost control",
      "ROI-driven financial structuring",
      "Risk assessment & mitigation"
    ],
    features: ["ROI", "Budgeting", "Risk Management"],
    image: "/images/services/finance_accounting.png",
    label: "Financial"
  },
  {
    id: "brand-strategy",
    slug: "brand-partnership-solutions",
    title: "4. Brand Strategy & Operator Alignment",
    shortDescription: "Help you select the right brand and operator to maximize asset value and performance.",
    description: "We help you select the right brand and operator to maximize asset value and long-term performance.",
    highlights: [
      "Brand positioning strategy",
      "Operator identification & evaluation",
      "Management contract advisory",
      "Brand-market fit alignment"
    ],
    features: ["Branding", "Operators", "Alignment"],
    image: "/images/services/hotel_operations.png",
    label: "Branding"
  },
  {
    id: "brand-collaboration",
    slug: "brand-partnership-solutions",
    title: "5. Brand Collaboration & Deal Structuring",
    shortDescription: "(Lease | Management Contract | Revenue Sharing) Strategic partnerships between property owners and hotel brands.",
    description: "We structure and close strategic partnerships between property owners and hotel brands, ensuring commercially viable and mutually beneficial agreements.",
    highlights: [
      "Lease model structuring (Fixed / Hybrid)",
      "Management contract negotiation",
      "Revenue share model structuring",
      "Owner–operator alignment & deal closure"
    ],
    features: ["Lease", "Management", "Revenue Share"],
    image: "/images/services/residential_luxe.png",
    label: "Deal Flow"
  },
  {
    id: "pre-opening",
    slug: "hotel-operations-management",
    title: "6. Pre-Opening, Training & Hotel Launch Management",
    shortDescription: "Managing team readiness, operational systems, and market entry for a flawless launch.",
    description: "We manage the entire pre-opening phase with a strong focus on team readiness, operational systems, and market entry.",
    highlights: [
      "Pre-opening planning & execution",
      "Talent acquisition & staffing solutions",
      "Staff training & standards implementation",
      "SOP development & launch strategy"
    ],
    features: ["Launch", "Staffing", "Training"],
    image: "/images/services/hr_talent.png",
    label: "Launch"
  },
  {
    id: "hotel-operations",
    slug: "hotel-operations-management",
    title: "7. Hotel Operations & Asset Management",
    shortDescription: "Structured operations and asset oversight focused on efficiency, control, and satisfaction.",
    description: "We deliver structured operations and asset oversight focused on efficiency, control, and guest satisfaction.",
    highlights: [
      "End-to-end hotel management",
      "Asset performance monitoring",
      "Operational systems & controls",
      "Guest experience management"
    ],
    features: ["Full Management", "Asset Monitoring", "Controls"],
    image: "/images/services/hotel_operations.png",
    label: "Management"
  },
  {
    id: "revenue-optimization",
    slug: "sales-marketing",
    title: "8. Revenue Optimization & Commercial Strategy",
    shortDescription: "Maximizing revenue through strategic pricing, distribution, and integrated sales & marketing.",
    description: "We maximize revenue through strategic pricing, distribution, and integrated sales & marketing.",
    highlights: [
      "Revenue management & pricing strategy",
      "Sales, marketing & branding execution",
      "Distribution & OTA optimization",
      "Demand generation & occupancy growth"
    ],
    features: ["Revenue", "Pricing", "Distribution"],
    image: "/images/services/sales_marketing.png",
    label: "Commercial"
  },
  {
    id: "performance-enhancement",
    slug: "finance-accounting",
    title: "9. Performance Enhancement & Audit Systems",
    shortDescription: "Transparency, accountability, and improvement through structured performance systems.",
    description: "We bring transparency, accountability, and continuous improvement through structured performance systems.",
    highlights: [
      "Performance management & KPI tracking",
      "Financial & operational audits",
      "Benchmarking & reporting systems",
      "Profitability enhancement strategies"
    ],
    features: ["KPIs", "Auditing", "Reporting"],
    image: "/images/services/commercial_space.png",
    label: "Performance"
  },
  {
    id: "architecture-interior-design",
    slug: "interior-design",
    title: "10. Architecture & Interior Concept",
    shortDescription: "Transforming spaces into curated sensory experiences. Beyond aesthetics, we design for depth and emotion.",
    description: "Vnexora's design-build division translates physical spaces into narratives of luxury. From tactile materiality to cinematic lighting, we build the soul of the asset.",
    highlights: [
      "Architectural planning & space optimization",
      "Sensory moodboarding & materiality",
      "Bespoke FF&E and furniture curation",
      "Concept-to-execution project management"
    ],
    features: ["Architecture", "Interior", "Narrative"],
    image: "/images/services/luxury_hotel_interior_hero.png",
    label: "Design-Build"
  },
  {
    id: "strategic-partnership",
    slug: "partner-with-us",
    title: "11. Strategic Institutional Partnership",
    shortDescription: "Scaling the next echelon of hospitality through collaborative capital, operational excellence, and brand synergy.",
    description: "We partner with owners, developers, and global brands to redefine the hospitality landscape through technical, operational, and financial frameworks.",
    highlights: [
      "Joint venture & equity participation",
      "Brand licensing & integration",
      "Third-party management mandates",
      "Development advisory & nexus growth"
    ],
    features: ["Nexus", "Synergy", "Capital"],
    image: "/images/services/brand_collab_hero.png",
    label: "Partnership"
  }
];
