export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice: number | null;
  badge: string | null;
  badgeClass: string;
  size: string;
  colors: string[];
  image: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Refugio 30L",
    category: "Everyday",
    description: "Versatile daypack with a laptop sleeve and two mesh side pockets.",
    price: 99,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "30L",
    colors: ["NAV", "BLK"],
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&fit=crop",
    inStock: true
  },
  {
    id: 2,
    name: "Black Hole Pack 32L",
    category: "Everyday / Travel",
    description: "Built from recycled polyester ripstop with a TPU laminate for serious weather protection. The main compartment swallows a full weekend's gear and the padded sleeve fits laptops up to 15 inches.",
    price: 169,
    originalPrice: null,
    badge: "Waterproof",
    badgeClass: "badge-waterproof",
    size: "32L",
    colors: ["BLK", "GRN"],
    image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=600&q=80&fit=crop",
    inStock: true
  },
  {
    id: 3,
    name: "Altvia 28L",
    category: "Hiking",
    description: "A clean, lightweight hiking pack.",
    price: 139,
    originalPrice: null,
    badge: "New",
    badgeClass: "badge-new",
    size: "28L",
    colors: ["GRN", "BLU"],
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 4,
    name: "Guidewater Backpack 29L",
    category: "Fishing / Kayaking",
    description: "Fully waterproof roll-top pack designed for fly fishing, kayaking, and any adventure where your gear absolutely cannot get wet. Features welded seams and a submersible closure system.",
    price: 219,
    originalPrice: null,
    badge: "Waterproof",
    badgeClass: "badge-waterproof",
    size: "29L",
    colors: ["OLV", "GRY"],
    image: "https://images.unsplash.com/photo-1611010344444-5f9e4d86a6e1?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 5,
    name: "Arbor Lid Pack 28L",
    category: "Everyday",
    description: "Heritage-inspired design meets modern functionality.",
    price: 119,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "28L",
    colors: ["TAN", "GRN"],
    image: "https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false
  },
  {
    id: 6,
    name: "Terravia Pack 36L — Alpine Edition",
    category: "Alpine / Hiking",
    description: "High-alpine pack built for multi-day ridge traverses. Includes a removable hip belt, dual ice axe loops, helmet carry system, and a body-mapped back panel for ventilation during sustained effort.",
    price: 249,
    originalPrice: null,
    badge: "Limited Edition",
    badgeClass: "badge-limited",
    size: "36L",
    colors: ["GRY", "BLK"],
    image: "https://images.unsplash.com/photo-1642375352634-ad952121fdb3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 7,
    name: "Atom Sling 8L",
    category: "Everyday",
    description: "Compact sling for everyday carry.",
    price: 69,
    originalPrice: null,
    badge: "New",
    badgeClass: "badge-new",
    size: "8L",
    colors: ["BLK", "NAV"],
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&q=80&fit=crop",
    inStock: true
  },
  {
    id: 8,
    name: "Descensionist 40L",
    category: "Backcountry / Skiing",
    description: "Ski touring pack with a diagonal ski carry system, avy tool pocket, and a hydration-compatible design. The back panel doubles as a sit pad for boot transitions at the trailhead.",
    price: 189,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "40L",
    colors: ["BLK", "BLU"],
    image: "https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 9,
    name: "Ultralight Black Hole Tote 27L",
    category: "Everyday / Travel",
    description: "Packs into its own pocket.",
    price: 79,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "27L",
    colors: ["BLK", "GRY"],
    image: "https://images.unsplash.com/photo-1528384483229-b4a97480dbea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 10,
    name: "Refugio 26L",
    category: "Everyday",
    description: "Slightly smaller sibling of the Refugio 30L. Same clean lines, same recycled fabric, same commuter-friendly organization — just trimmed down for lighter days or smaller frames.",
    price: 89,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "26L",
    colors: ["NAV", "RED"],
    image: "https://images.unsplash.com/photo-1621624959365-071359461b94?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false
  },
  {
    id: 11,
    name: "Black Hole MLC 45L",
    category: "Travel",
    description: "Maximum legal carry-on. Converts from backpack to suitcase. Three access points, lockable zippers, and enough internal organization to replace a packing cube system entirely.",
    price: 299,
    originalPrice: null,
    badge: "Limited Edition",
    badgeClass: "badge-limited",
    size: "45L",
    colors: ["BLK", "NAV"],
    image: "https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 12,
    name: "Arbor Roll Top 30L",
    category: "Everyday",
    description: "Roll-top commuter pack with a clean silhouette.",
    price: 109,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "30L",
    colors: ["OLV", "BLK"],
    image: "https://images.unsplash.com/photo-1736952323775-75714e0fdff5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 13,
    name: "Altvia 22L",
    category: "Trail Running",
    description: "Fast and light day hiker. Minimalist feature set — just a hydration port, two stretch side pockets, and a zippered hip belt pocket. Nothing more, nothing less.",
    price: 119,
    originalPrice: null,
    badge: "New",
    badgeClass: "badge-new",
    size: "22L",
    colors: ["GRN", "BLK"],
    image: "https://images.unsplash.com/photo-1624986616416-a2985fd8dcbe?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 14,
    name: "SnowDrifter 30L — Backcountry Touring Series",
    category: "Backcountry / Skiing",
    description: "Purpose-built for backcountry skiing with dedicated avy tool access, a diagonal or A-frame ski carry, and a fleece-lined goggle pocket. The back panel uses a channeled foam system for airflow when you're bootpacking uphill.",
    price: 199,
    originalPrice: null,
    badge: "Waterproof",
    badgeClass: "badge-waterproof",
    size: "30L",
    colors: ["BLU", "BLK"],
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false
  },
  {
    id: 15,
    name: "Atom 18L",
    category: "Everyday",
    description: "Daily driver.",
    price: 79,
    originalPrice: null,
    badge: null,
    badgeClass: "",
    size: "18L",
    colors: ["GRY", "BLK"],
    image: "https://images.unsplash.com/photo-1562546106-b9cb3a76a206?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  },
  {
    id: 16,
    name: "Guidewater Sling 15L",
    category: "Fishing",
    description: "Waterproof sling designed for wade fishing. Single-shoulder carry with a quick-access fly box pocket and a welded, roll-top main compartment that keeps everything dry even when you're waist-deep in a river.",
    price: 149,
    originalPrice: null,
    badge: "Waterproof",
    badgeClass: "badge-waterproof",
    size: "15L",
    colors: ["OLV", "GRY"],
    image: "https://images.unsplash.com/photo-1514524865930-188150490d83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true
  }
];