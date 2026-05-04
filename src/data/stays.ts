export interface Property {
  id: number;
  slug: string;
  name: string;
  location: string;
  type: "Hotel" | "Homestay";
  category: string;
  price: string;
  rating: number;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  lat: number;
  lng: number;
  features: { title: string; desc: string }[];
}

export const allStays: Property[] = [
  {
    id: 1,
    slug: "banaras-kila",
    name: "Banaras Kila by Vnexora",
    location: "Varanasi, India",
    type: "Hotel",
    category: "Heritage",
    price: "₹12,500",
    rating: 4.9,
    image: "/images/reception_hero.jpg",
    images: ["/images/reception_hero.jpg", "/images/dark_room_hero.jpg", "/images/luxury_bedroom_hero.jpg"],
    description: "A sanctuary of institutional excellence nestled in the heart of the world's oldest living city. Banaras Kila combines the grandeur of heritage architecture with the precision of modern luxury management.",
    amenities: ["Wifi", "Pool", "Coffee", "AC"],
    lat: 25.3176,
    lng: 83.0062,
    features: [
      { title: "Heritage Soul", desc: "Original sandstone architecture preserved for centuries." },
      { title: "Modern Comfort", desc: "Smart room controls and AI-integrated guest services." },
      { title: "Ganga Proximity", desc: "Just 5 minutes from the sacred Dashashwamedh Ghat." }
    ]
  },
  {
    id: 2,
    slug: "heritage-kashinaama",
    name: "Heritage Kashinaama",
    location: "Varanasi, India",
    type: "Hotel",
    category: "Boutique",
    price: "₹8,900",
    rating: 4.8,
    image: "/images/dark_room_hero.jpg",
    images: ["/images/dark_room_hero.jpg", "/images/reception_hero.jpg", "/images/bar_hero.jpg"],
    description: "A boutique experience that redefined hospitality in Varanasi. Heritage Kashinaama is where bespoke design meets the atmospheric charm of the ancient city lanes.",
    amenities: ["Wifi", "Coffee", "AC"],
    lat: 25.2811,
    lng: 83.0095,
    features: [
      { title: "Curated Art", desc: "Featuring works from local Banarasi artisans." },
      { title: "Private Terrace", desc: "Uninterrupted views of the city skyline." },
      { title: "Bespoke Dining", desc: "A culinary journey through North Indian heritage." }
    ]
  },
  {
    id: 3,
    slug: "ganga-view-retreat",
    name: "Ganga View Retreat",
    location: "Assi Ghat, Varanasi",
    type: "Homestay",
    category: "Bespoke",
    price: "₹5,400",
    rating: 4.7,
    image: "/images/stays/luxury_homestay_kashi.png",
    images: ["/images/stays/luxury_homestay_kashi.png", "/images/luxury_bedroom_hero.jpg", "/images/bar_hero.jpg"],
    description: "Experience Varanasi like a local, with the luxury of a five-star stay. This bespoke homestay offers a direct view of the morning Aarti at Assi Ghat from your private balcony.",
    amenities: ["Wifi", "Coffee"],
    lat: 25.2897,
    lng: 83.0125,
    features: [
      { title: "River Front", desc: "Located directly on the banks of the river Ganga." },
      { title: "Home Kitchen", desc: "Authentic home-cooked Sattvic meals available on request." },
      { title: "Yoga Deck", desc: "Sunrise yoga sessions conducted by city experts." }
    ]
  },
  {
    id: 4,
    slug: "kashi-serene-villa",
    name: "Kashi Serene Villa",
    location: "Ramnagar, Varanasi",
    type: "Homestay",
    category: "Premium",
    price: "₹7,200",
    rating: 4.9,
    image: "/images/luxury_bedroom_hero.jpg",
    images: ["/images/luxury_bedroom_hero.jpg", "/images/reception_hero.jpg", "/images/dark_room_hero.jpg"],
    description: "A modern oasis on the quieter banks of the Ganga. Kashi Serene Villa is a masterpiece of contemporary architecture, offering peace and privacy just across the bridge from the main city.",
    amenities: ["Wifi", "AC", "Pool"],
    lat: 25.2677,
    lng: 83.0234,
    features: [
      { title: "Infinity Pool", desc: "Overlooking the Ramnagar Fort and the river." },
      { title: "Private Garden", desc: "A lush green sanctuary perfect for meditation." },
      { title: "Quiet Luxury", desc: "Absolute silence and privacy guaranteed." }
    ]
  },
  {
    id: 5,
    slug: "ghatside-manor",
    name: "The Ghatside Manor",
    location: "Dashashwamedh, Varanasi",
    type: "Homestay",
    category: "Heritage",
    price: "₹6,800",
    rating: 4.6,
    image: "/images/bar_hero.jpg",
    images: ["/images/bar_hero.jpg", "/images/dark_room_hero.jpg", "/images/reception_hero.jpg"],
    description: "Step into history at The Ghatside Manor. This restored merchant's house offers an unparalleled heritage stay, with thick stone walls and ornate wooden balconies.",
    amenities: ["Wifi", "Coffee", "AC"],
    lat: 25.3077,
    lng: 83.0105,
    features: [
      { title: "Stairway to Ganga", desc: "Private access to one of the most vibrant ghats." },
      { title: "Ancient Architecture", desc: "Stay in a structure dating back to the 18th century." },
      { title: "Central Hub", desc: "Walking distance to the Kashi Vishwanath Temple." }
    ]
  }
];
