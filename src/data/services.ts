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
    id: "development-advisory",
    slug: "hospitality-development-advisory",
    title: "Hospitality Development & Project Advisory",
    shortDescription: "We partner with owners and investors to conceptualize and execute hospitality projects with strong market positioning.",
    description: "Our development advisory services provide a strategic roadmap for new hospitality ventures, ensuring every project is built on a foundation of market intelligence and long-term value creation.",
    highlights: [
      "Project concept & positioning strategy",
      "Highest & best use analysis",
      "Development planning & structuring",
      "Market-driven asset positioning"
    ],
    features: [
      "Concept Development",
      "Market Analysis",
      "Strategic Planning",
      "Asset Positioning"
    ],
    image: "/images/hero/hero_1.png",
    label: "Strategic"
  },
  {
    id: "architecture-design",
    slug: "architecture-design-planning",
    title: "Architecture, Design & Technical Planning",
    shortDescription: "Aligning design excellence with operational efficiency to create guest-centric environments.",
    description: "We bridge the gap between aesthetic vision and operational reality, creating spaces that are both beautiful and highly functional for staff and guests.",
    highlights: [
      "Architectural planning & space optimization",
      "Interior design coordination",
      "Technical design review & validation",
      "Cost-efficient design solutions"
    ],
    features: [
      "Space Optimization",
      "Interior Coordination",
      "Technical Review",
      "Efficient Design"
    ],
    image: "/images/hero/hero_2.png",
    label: "Design Ledger"
  },
  {
    id: "feasibility-financial",
    slug: "feasibility-financial-planning",
    title: "Feasibility, Budgeting & Financial Planning",
    shortDescription: "Ensuring project financial viability with structured planning and optimized capital deployment.",
    description: "Data-driven financial models that provide clarity on ROI, capital requirements, and long-term sustainability for your hospitality investment.",
    highlights: [
      "Financial feasibility analysis",
      "Budget planning & cost control",
      "ROI-driven financial structuring",
      "Risk assessment & mitigation"
    ],
    features: [
      "ROI Analysis",
      "Budget Control",
      "Financial Structuring",
      "Risk Mitigation"
    ],
    image: "/images/hero/hero_3.png",
    label: "Performance"
  },
  {
    id: "brand-strategy",
    slug: "brand-strategy-concept-development",
    title: "Brand Strategy, Positioning & Concept Development",
    shortDescription: "Defining unique brand identities that resonate with target audiences and drive premium pricing.",
    description: "We help you create a brand that stands out in a crowded market, focusing on unique value propositions and emotional guest connections.",
    highlights: [
      "Brand identity & story crafting",
      "Unique value proposition (UVP)",
      "Target audience segmentation",
      "Competitive benchmarking"
    ],
    features: [
      "Brand Story",
      "UVP Definition",
      "Market Segmentation",
      "Benchmarking"
    ],
    image: "/images/hero/hero_4.png",
    label: "Creative"
  },
  {
    id: "pre-opening",
    slug: "pre-opening-management-launch",
    title: "Pre-Opening Management & Launch Strategy",
    shortDescription: "Comprehensive countdown management to ensure a flawless and profitable property opening.",
    description: "From hiring to operational readiness, we manage the critical path to opening, ensuring your property is ready to deliver excellence from day one.",
    highlights: [
      "Critical path management",
      "Operational readiness testing",
      "Pre-opening marketing & PR",
      "Staff recruitment & training"
    ],
    features: [
      "Launch Readiness",
      "Staffing",
      "Marketing Launch",
      "SOP Implementation"
    ],
    image: "/images/hero/hero_5.png",
    label: "Execution"
  },
  {
    id: "hotel-operations",
    slug: "hotel-operations-management",
    title: "Comprehensive Hotel Operations & Management",
    shortDescription: "Full-scale operational management focused on bottom-line growth and guest loyalty.",
    description: "We handle the complexities of daily operations, allowing owners to focus on higher-level strategy while we ensure peak performance at every level.",
    highlights: [
      "Daily operational oversight",
      "Service quality & standard control",
      "P&L management & optimization",
      "Guest experience engineering"
    ],
    features: [
      "Full Management",
      "P&L Oversight",
      "Guest Loyalty",
      "Quality Control"
    ],
    image: "/images/hero/hero_6.png",
    label: "Core Service"
  },
  {
    id: "sales-marketing-revenue",
    slug: "sales-marketing-revenue-optimization",
    title: "Sales, Marketing & Revenue Optimization",
    shortDescription: "Aggressive revenue strategies that blend digital marketing with advanced yield management.",
    description: "We don't just fill rooms; we optimize every available dollar through intelligent pricing and high-impact digital presence.",
    highlights: [
      "Dynamic pricing & yield management",
      "Direct booking & OTA strategy",
      "Digital marketing & CRM",
      "Corporate & B2B sales"
    ],
    features: [
      "Yield Management",
      "Direct Bookings",
      "Digital CRM",
      "B2B Sales"
    ],
    image: "/images/hero/hero_7.png",
    label: "Revenue"
  },
  {
    id: "audit-enhancement",
    slug: "operational-audit-performance-enhancement",
    title: "Operational Audit & Performance Enhancement",
    shortDescription: "Identifying leakages and inefficiencies to turn underperforming assets into market leaders.",
    description: "A deep dive into your current operations to uncover hidden potentials and fix systemic issues affecting your profitability.",
    highlights: [
      "Gap analysis & mystery shopping",
      "Operational efficiency deep-dives",
      "Process re-engineering",
      "Performance KPIs & tracking"
    ],
    features: [
      "Operational Audit",
      "Process Fixes",
      "Mystery Shopping",
      "KPI Tracking"
    ],
    image: "/images/hero/hero_8.png",
    label: "Optimization"
  },
  {
    id: "asset-management",
    slug: "hospitality-asset-management-roi",
    title: "Hospitality Asset Management & ROI Tracking",
    shortDescription: "Acting as the owner's representative to safeguard long-term investment value and maximize ROI.",
    description: "We provide the strategic oversight necessary to ensure your hotel or resort continues to appreciate in value and generate strong returns.",
    highlights: [
      "Owner's representation",
      "Long-term CAPEX planning",
      "Asset valuation enhancement",
      "Strategic exit planning"
    ],
    features: [
      "ROI Safeguard",
      "CAPEX Planning",
      "Valuation Growth",
      "Strategic Exit"
    ],
    image: "/images/services/hotel_operations.jpg",
    label: "Investment"
  },
  {
    id: "ai-transformation",
    slug: "ai-digital-transformation-guest-experience",
    title: "AI-Driven Digital Transformation & Guest Experience",
    shortDescription: "Integrating next-gen AI guest solutions to lead the market in technical innovation.",
    description: "Future-proof your property with our proprietary AI Guest Management Platform, designed to wow modern travelers.",
    highlights: [
      "AI Guest Assistant integration",
      "Contactless guest journey",
      "Automated upsell engines",
      "Predictive guest analytics"
    ],
    features: [
      "AI Assistant",
      "Contactless Service",
      "Automated Upsells",
      "Guest Analytics"
    ],
    image: "/images/hero/hero_9.png",
    label: "Innovation"
  }
];
