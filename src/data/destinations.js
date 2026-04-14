export const destinations = [
  {
    id: "kyoto",
    name: "Kyoto",
    slug: "kyoto",
    tagline: "Kyoto's Silent Bloom",
    description: "Experience the gentle art of stillness. Enter a world where golden hour illuminates centuries-old gardens and the stories of the Geisha district. Every temple tells a story of a thousand years, waiting for the right light to be heard.",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop",
    highlights: [
      { title: "Bamboo Groves", image: "https://images.unsplash.com/photo-1542052125323-e69ad37a47c2?q=80&w=2670&auto=format&fit=crop" },
      { title: "Kinkaku-ji", image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=2670&auto=format&fit=crop" },
      { title: "Geisha District", image: "https://images.unsplash.com/photo-1528684497677-4cbeeb0678d2?q=80&w=2670&auto=format&fit=crop" }
    ],
    packages: [
      { id: "kyoto-1", name: "The Inner Bloom", duration: "7 Days / 6 Nights", price: "₹3,24,000", features: ["Tea House & Meditation", "Original Geisha Art Styling", "Intimate Zen Gardens", "Private Kaiseki Dining"] }
    ]
  },
  {
    id: "venice",
    name: "Venice",
    slug: "venice",
    tagline: "Venetian Gold",
    description: "Floating palaces painted in the soft hues of the Italian sun. Venice is not just a city; it's a dream of water and stone, where every canal holds a secret and every bridge leads to another century.",
    heroImage: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2670&auto=format&fit=crop",
    highlights: [
      { title: "Grand Canal", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2666&auto=format&fit=crop" },
      { title: "St. Mark's Basilica", image: "https://images.unsplash.com/photo-1589574163013-0941a5d62d29?q=80&w=2670&auto=format&fit=crop" },
      { title: "Rialto Dusk", image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2670&auto=format&fit=crop" }
    ],
    packages: [
      { id: "venice-1", name: "Venetian Heritage", duration: "10 Days", price: "₹4,12,000", features: ["Canal Tour", "Private Gondola", "Artisan Workshops", "Hidden Palace Access"] }
    ]
  },
  {
    id: "yosemite",
    name: "Yosemite",
    slug: "yosemite",
    tagline: "High Sierra",
    description: "Granite walls and towering pines bathed in dramatic dusk. A wilderness of scale and majesty, where the roar of the falls is the only music and the stars are the only lights you'll ever need.",
    heroImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop",
    highlights: [
      { title: "Half Dome", image: "https://images.unsplash.com/photo-1563814408643-d86bdecbbf33?q=80&w=2664&auto=format&fit=crop" },
      { title: "El Capitan", image: "https://images.unsplash.com/photo-1542159823-3dbd1cbdf8fb?q=80&w=2670&auto=format&fit=crop" }
    ],
    packages: [
      { id: "yosemite-1", name: "High Sierra Explorer", duration: "8 Days", price: "₹2,80,000", features: ["Glamping", "Guided Hike", "Photography Tour", "Starlit Dining"] }
    ]
  },
  {
    id: "serengeti",
    name: "Serengeti",
    slug: "serengeti",
    tagline: "Serengeti Silence",
    description: "The golden savanna under an endless African sky. Experience the raw pulse of nature in its most ancient form, where the horizon never ends and the silence is a symphony of its own.",
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
    highlights: [
      { title: "Savanna Sunset", image: "https://images.unsplash.com/photo-1523800378286-dae1f0dae656?q=80&w=2670&auto=format&fit=crop" },
      { title: "Wildlife Watch", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2670&auto=format&fit=crop" }
    ],
    packages: [
      { id: "serengeti-1", name: "The Great Migration", duration: "8 Days", price: "₹2,82,000", features: ["Luxury Tented Camp", "Private Safari Drive", "Bush Breakfast", "Balloon Safari"] }
    ]
  },
  {
    id: "amalfi",
    name: "Amalfi Coast",
    slug: "amalfi-coast",
    tagline: "Amalfi Drift",
    description: "Cliffside luxury overlooking the sparkling Mediterranean sea. Positano's colors dance in the sun, while the scent of lemons and the sound of waves create a rhythm that only the heart can follow.",
    heroImage: "https://images.unsplash.com/photo-1620959074092-be29f7962451?q=80&w=2662&auto=format&fit=crop",
    highlights: [
      { title: "Positano View", image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2670&auto=format&fit=crop" },
      { title: "Mediterranean Blue", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2670&auto=format&fit=crop" }
    ],
    packages: [
      { id: "amalfi-1", name: "Cliffside Retreat", duration: "10 Days", price: "₹4,12,000", features: ["Private Yacht Charter", "Cliffside Villa Stay", "Coastal Drive", "Limoncello Tour"] }
    ]
  }
];

export const signaturePackages = [
  {
    id: "pkg-1",
    name: "Serengeti Silence",
    destinationSlug: "serengeti",
    duration: "8 Days",
    lodging: "Luxury Tented Camp",
    feature: "Private Safari Drive",
    price: "₹2,82,000",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop",
    isFeatured: false
  },
  {
    id: "pkg-2",
    name: "Bali: The Inner Bloom",
    destinationSlug: "bali",
    duration: "7 Days",
    lodging: "Tea House & Meditation",
    feature: "Private Sanctuary Access",
    price: "₹3,24,000",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2668&auto=format&fit=crop",
    isFeatured: true
  },
  {
    id: "pkg-3",
    name: "Amalfi Drift",
    destinationSlug: "amalfi-coast",
    duration: "10 Days",
    lodging: "Private Yacht Charter",
    feature: "Cliffside Villa Stay",
    price: "₹4,12,000",
    image: "https://images.unsplash.com/photo-1620959074092-be29f7962451?q=80&w=2662&auto=format&fit=crop",
    isFeatured: false
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "What sets Aurora apart is their acute understanding of quiet luxury. It's not just about the destination, it's about the feeling of arriving.",
    name: "Elena Ross",
    role: "Travel Journalist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Our trip to Kyoto was a masterclass in curation. They didn't just book a hotel; they designed an entire sensory experience for us.",
    name: "Mark & Sarah T.",
    role: "Art Collectors",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Aurora doesn't just plan trips, they architect memories. Breathtaking from start to finish.",
    name: "David Chen",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop"
  }
];
