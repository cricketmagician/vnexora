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
    id: "hotel-operations",
    slug: "hotel-operations-management",
    title: "Hotel Operations & Management",
    shortDescription: "Remastering the operational core of your hospitality asset for peak performance.",
    description: "Vnexora delivers institutional-grade management for luxury hotels and resorts. Our focus is on P&L optimization, service excellence, and guest loyalty engineering.",
    highlights: [
      "Daily Operational Oversight",
      "Service Quality Engineering",
      "P&L Management & Growth",
      "Guest Experience Auditing"
    ],
    features: ["Full Management", "SOP Development", "Yield Control", "Staff Training"],
    image: "/images/services/hotel_operations.png",
    label: "Core Service"
  },
  {
    id: "property-development",
    slug: "property-development-consulting",
    title: "Property Development & Consulting",
    shortDescription: "Architecting the future of hospitality through strategic site advisory.",
    description: "We provide the strategic roadmap for new hospitality ventures, ensuring projects are built on a foundation of market intelligence and long-term value.",
    highlights: [
      "Site Selection & Assessment",
      "Concept Development",
      "Technical Advisory",
      "Project Lifecycle Management"
    ],
    features: ["Planning", "Technical Briefs", "Site Auditing", "Feasibility"],
    image: "/images/services/property_development.png",
    label: "Advisory"
  },
  {
    id: "brand-partnerships",
    slug: "brand-partnership-solutions",
    title: "Brand Partnership Solutions",
    shortDescription: "Aligning global hospitality brands with high-value owners.",
    description: "Vnexora bridges the gap between global hospitality operators and asset owners, facilitating long-term, high-value management agreements.",
    highlights: [
      "Operator Sourcing",
      "Contract Negotiations",
      "Brand Alignment Strategy",
      "Market Feasibility"
    ],
    features: ["Negotiation", "Networking", "Brand Standard Review", "HMA Structuring"],
    image: "/images/services/brand_partnerships.png",
    label: "Partnership"
  },
  {
    id: "sales-marketing",
    slug: "sales-marketing",
    title: "Sales, Marketing & Revenue",
    shortDescription: "Aggressive revenue strategies built for the digital luxury age.",
    description: "We optimize every available dollar through intelligent pricing, direct booking growth, and high-impact digital presence.",
    highlights: [
      "Revenue Yield Management",
      "Digital Marketing Strategy",
      "Direct Booking Capture",
      "Distribution Auditing"
    ],
    features: ["Pricing", "Digital Growth", "OTA Strategy", "Sales Alignment"],
    image: "/images/services/sales_marketing.png",
    label: "Revenue"
  },
  {
    id: "finance-accounting",
    slug: "finance-accounting",
    title: "Finance & Accounting",
    shortDescription: "Institutional financial oversight for high-value assets.",
    description: "Transparent, rigorous financial management that ensures zero leakage and maximizes owner returns through precision auditing.",
    highlights: [
      "Centralized Accounting",
      "Operational Auditing",
      "Financial Reporting",
      "Cash Flow Optimization"
    ],
    features: ["Bookkeeping", "Strategic Audit", "Reporting", "Cost Control"],
    image: "/images/services/finance_accounting.png",
    label: "Performance"
  },
  {
    id: "human-resource",
    slug: "human-resource-talent-development",
    title: "HR & Talent Development",
    shortDescription: "Building the teams that deliver super-premium guest experiences.",
    description: "We source, train, and retain the elite talent necessary to sustain a world-class hospitality operation in the luxury sector.",
    highlights: [
      "Executive Recruitment",
      "Cultural Training",
      "Performance Management",
      "Talent Pipelines"
    ],
    features: ["Staffing", "Soft Skills", "Retention Strategy", "HIRING"],
    image: "/images/services/hr_talent.png",
    label: "Human Capital"
  },
  {
    id: "hotel-brokerage",
    slug: "hotels-resorts-buy-sell",
    title: "Hotels & Resorts Buy/Sell",
    shortDescription: "Discrete asset brokerage for high-value hospitality transactions.",
    description: "Expert guidance on the acquisition and disposition of off-market hospitality assets globally, ensuring total confidentiality.",
    highlights: [
      "Off-Market Listings",
      "Investment Analysis",
      "Transaction Management",
      "Due Diligence"
    ],
    features: ["Brokerage", "Valuation", "Exit Planning", "Acquisition"],
    image: "/images/services/hotel_brokerage.png",
    label: "Transaction"
  },
  {
    id: "commercial-brokerage",
    slug: "commercial-space-buy-sell-lease",
    title: "Commercial Space Buy/Sell/Lease",
    shortDescription: "Institutional placement for Grade-A commercial portfolios.",
    description: "Managing the lifecycle of high-value commercial assets, focusing on occupancy yield and discrete disposition strategy.",
    highlights: [
      "Global Tenant Sourcing",
      "Portfolio Management",
      "Structural Due Diligence",
      "Buy/Sell Mandates"
    ],
    features: ["Commercial Sourcing", "Lease Admin", "Asset Growth", "Valuation"],
    image: "/images/services/commercial_space.png",
    label: "Real Estate"
  },
  {
    id: "residential-brokerage",
    slug: "residential-buy-sell",
    title: "Residential Buy/Sell",
    shortDescription: "Concierge acquisition and sale of legacy luxury estates.",
    description: "Bespoke brokerage for the world's most prestigious residential addresses, focusing on UHNW client networks.",
    highlights: [
      "Legacy Estate Sourcing",
      "UHNW Networking",
      "Private Sales Strategy",
      "Full Transaction Handling"
    ],
    features: ["Villas", "Penthouses", "Private Sales", "Global Desk"],
    image: "/images/services/residential_luxe.png",
    label: "Luxury"
  }
];
