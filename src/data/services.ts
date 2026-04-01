export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  icon?: string;
  label?: string;
}

export const services: ServiceData[] = [
  {
    id: "ai-guest-experience",
    slug: "ai-guest-experience-platform",
    title: "AI-Powered Guest Experience",
    shortDescription: "Next-gen AI assistant delivering the futuristic wow-factor to every guest interaction.",
    description: "Our proprietary AI Guest Experience Platform revolutionizes hospitality by integrating cutting-edge intelligence into every interaction, providing a seamless futuristic stay that guests will never forget.",
    features: [
      "24/7 AI Guest Assistant",
      "QR-Based Guest Interface",
      "Digital Check-in & Mobile Keys",
      "Multilingual Support",
      "Upselling Engine",
      "Guest Analytics"
    ],
    image: "/images/hero/hero_6.png",
    label: "Most Powerful"
  },
  {
    id: "sales-marketing",
    slug: "sales-marketing",
    title: "Revenue Growth & Market Positioning",
    shortDescription: "Instant answers to revenue growth with highly targeted booking strategies.",
    description: "Effective positioning and promotion are crucial. VNEXORA builds explosive sales strategies that blend local intelligence with global outreach to immediately drive direct bookings and boost visibility.",
    features: [
      "Direct Booking Growth",
      "OTA Optimization",
      "Campaign Management",
      "Brand Promotions"
    ],
    image: "/images/services/sales_marketing.jpg",
    label: "Revenue Focused"
  },
  {
    id: "hotel-operations",
    slug: "hotel-operations-management",
    title: "Operational Excellence Systems",
    shortDescription: "Flawless execution of daily operations ensuring maximum profitability.",
    description: "Operational excellence is the backbone of every successful hotel. VNEXORA provides hands-on daily management solutions across all departments to guarantee world-class guest satisfaction.",
    features: [
      "SOP Optimization",
      "Guest Experience Flow",
      "Staff Workflow Automation",
      "Daily Operations"
    ],
    image: "/images/services/hotel_operations.jpg",
    label: "Execution Engine"
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation-it",
    title: "Revenue Systems & Technology",
    shortDescription: "Robust system architecture and modern cloud integrations for cutting-edge properties.",
    description: "We leverage robust tech systems to streamline your operational foundation. From seamless PMS setup to secure cloud infrastructure, we ensure your property stays at the forefront of the digital landscape.",
    features: [
      "PMS Setup",
      "QR Systems",
      "Booking Engine",
      "Cloud Setup"
    ],
    image: "/images/services/sales_marketing.jpg"
  },
  {
    id: "finance-accounting",
    slug: "finance-accounting",
    title: "Financial Control & Profit Optimization",
    shortDescription: "Data-backed financial planning to secure and multiply your profit margins.",
    description: "Financial transparency and strategic control are vital. We offer full-suite financial planning designed specifically to maximize your bottom line and ensure robust, trackable profit generation.",
    features: [
      "Revenue Management",
      "Cost Control",
      "Financial Insights",
      "Profit Planning"
    ],
    image: "/images/services/finance_accounting.jpg"
  },
  {
    id: "human-resources",
    slug: "human-resource-talent-development",
    title: "Talent Performance & Service Excellence",
    shortDescription: "Building world-class staff by optimizing team workflows and talent acquisition.",
    description: "Our people-first philosophy ensures that we attract and nurture top talent, training your team to deliver exceptional guest handling and service aligned perfectly with elite standards.",
    features: [
      "Hiring & Training",
      "Performance Tracking",
      "Hospitality Skills",
      "Guest Handling"
    ],
    image: "/images/services/human_resources.jpg"
  },
  {
    id: "brand-partnership",
    slug: "brand-partnership-solutions",
    title: "Brand Partnership Solutions",
    shortDescription: "Grow your strategic alliances and secure powerful, high-impact franchise tie-ups.",
    description: "We bridge the gap between ambitious hotel owners and leading international brands, facilitating mutually beneficial brand affiliations that instantly elevate property tiering and positioning.",
    features: [
      "Franchise & Tie-ups",
      "Co-branding",
      "Strategic Alliances"
    ],
    image: "/images/services/brand_partnership.jpg"
  },
  {
    id: "asset-management",
    slug: "hospitality-asset-management",
    title: "Hospitality Asset Management",
    shortDescription: "Long-term strategic overwatch to aggressively protect and maximize your asset's ROI.",
    description: "We provide strategic overwatch to protect the long-term value of your hospitality investments. Our management team works relentlessly to ensure every property reaches its absolute maximum valuation.",
    features: [
      "Asset Monitoring",
      "ROI Optimization",
      "Investment Strategy"
    ],
    image: "/images/services/hotel_operations.jpg"
  },
  {
    id: "property-development",
    slug: "property-development-consulting",
    title: "Property Development & Consulting",
    shortDescription: "End-to-end guidance from initial ideation to physical execution for new developments.",
    description: "We support hospitality ventures from the ground up, offering comprehensive consulting services to guide investors and visionaries entirely through the complex phases of new hotel development.",
    features: [
      "Planning & Layout",
      "Interior Strategy",
      "Concept Development",
      "Execution"
    ],
    image: "/images/services/property_development.jpg"
  }
];
