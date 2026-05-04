export interface WeddingVenue {
  id: string;
  slug: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  capacity: string;
  type: "Palace" | "Resort" | "Hotel" | "Garden";
  images: string[];
  description: string;
  features: string[];
  amenities: string[];
}

export const allWeddings: WeddingVenue[] = [
  {
    id: "1",
    slug: "royal-heritage-palace",
    name: "Royal Heritage Palace",
    location: "Varanasi, Cantt",
    rating: 4.9,
    price: "₹2,50,000",
    capacity: "500 - 2000 Guests",
    type: "Palace",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80"
    ],
    description: "Experience the grandeur of a royal wedding in our historic palace. With intricate architecture and vast courtyards, it's the perfect setting for your dream wedding.",
    features: ["Historic Architecture", "Grand Courtyard", "Vedic Pandal"],
    amenities: ["Catering", "Decoration", "Valet Parking", "Luxury Suites", "AC Ballroom"]
  },
  {
    id: "2",
    slug: "ganga-bliss-resort",
    name: "Ganga Bliss Resort",
    location: "Varanasi, Ghat Road",
    rating: 4.8,
    price: "₹1,80,000",
    capacity: "200 - 800 Guests",
    type: "Resort",
    images: [
      "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
    ],
    description: "A serene riverside resort offering breathtaking views of the Ganges. Perfect for intimate weddings and sunset ceremonies.",
    features: ["River View Deck", "Lush Lawns", "Sunset Point"],
    amenities: ["Infinity Pool", "Open Air Stage", "Sound System", "Bridal Room", "WiFi"]
  },
  {
    id: "3",
    slug: "the-grand-ballroom",
    name: "The Grand Ballroom",
    location: "Varanasi, Sigra",
    rating: 4.7,
    price: "₹1,20,000",
    capacity: "100 - 500 Guests",
    type: "Hotel",
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80"
    ],
    description: "Modern elegance in the heart of the city. Our grand ballroom features crystal chandeliers and a state-of-the-art sound system.",
    features: ["Crystal Chandeliers", "Central AC", "LED Wall"],
    amenities: ["In-house DJ", "Thematic Decor", "Buffet Service", "Guest Parking", "Security"]
  }
];
