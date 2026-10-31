export type ImageRole = "back" | "front" | "detail" | "fabric" | "fit";

export interface ProductImage {
  role: ImageRole;
  src: string | null;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  color: "Cream" | "Black";
  role: string;
  price: number;
  gsm: 240;
  fit: string;
  sizes: string[];
  printMethod: string;
  image_front?: string;
  image_back?: string;
  image_detail?: string;
  image_fabric?: string;
  image_fit?: string;
  description: string[];
  relatedSlug?: string;
  active?: boolean;
  soldOut?: boolean;
}

const configuredWhatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();

if (!configuredWhatsappNumber && import.meta.env.PROD) {
  throw new Error("VITE_WHATSAPP_NUMBER must be configured for production.");
}

if (!configuredWhatsappNumber && import.meta.env.DEV) {
  console.warn("VITE_WHATSAPP_NUMBER is not set; using the local development placeholder.");
}

export const BRAND = {
  name: "MOODLY",
  tagline: "Wear your mood.",
  secondary: "Clothes that match your mood.",
  city: "Jaipur",
  instagram: "@get.moodly",
  whatsappNumber: configuredWhatsappNumber || "91XXXXXXXXXX",
  shippingText: "Shipping cost confirmed on WhatsApp before you pay.",
  productionText: "Production usually 2–5 days after payment.",
};

// SAMPLE_IMAGES are temporary featured assets until product image fields / Supabase URLs are set.
export const SAMPLE_IMAGES = {
  kalamkariCreamFront: "https://i.ibb.co/PG6kP6qG/kalamkari-cream-front.jpg",
  kalamkariCreamBack: "https://i.ibb.co/QRFSMFt/kalamkari-cream-back.jpg",
  kalamkariBlackBack: "https://i.ibb.co/v6bsRgg7/kalamkari-black-back.jpg",
  kalamkariDetail: "https://i.ibb.co/d0ZGXNXB/kalamkari-detail.jpg",
  fabricTexture: "https://i.ibb.co/hFpsTD5k/fabric-texture.jpg",
  fitSide: "https://i.ibb.co/8nZsrYS6/fit-side.jpg",
  printBlanks: "https://i.ibb.co/chXbHf0W/print-your-mood-blanks.jpg",
} as const;

export const products: Product[] = [
  {
    slug: "kalamkari-heritage-cream",
    name: "Kalamkari Heritage",
    color: "Cream",
    role: "Hero / bestseller",
    price: 699,
    gsm: 240,
    fit: "Unisex oversized drop-shoulder",
    sizes: ["S", "M", "L", "XL", "XXL"],
    printMethod: "Premium print (DTF)",
    image_front: "",
    image_back: "",
    image_detail: "",
    image_fabric: "",
    image_fit: "",
    description: [
      "Hand-inspired kalamkari on 240 GSM cotton.",
      "Drop-shoulder cut.",
      "Printed to order in Jaipur.",
    ],
    relatedSlug: "kalamkari-heritage-black",
  },
  {
    slug: "kalamkari-heritage-black",
    name: "Kalamkari Heritage",
    color: "Black",
    role: "Hero colorway",
    price: 699,
    gsm: 240,
    fit: "Unisex oversized drop-shoulder",
    sizes: ["S", "M", "L", "XL", "XXL"],
    printMethod: "Premium print (DTF)",
    image_front: "",
    image_back: "",
    image_detail: "",
    image_fabric: "",
    image_fit: "",
    description: [
      "Hand-inspired kalamkari on 240 GSM cotton.",
      "Drop-shoulder cut.",
      "Printed to order in Jaipur.",
    ],
    relatedSlug: "kalamkari-heritage-cream",
  },
  {
    slug: "moodly-essential-black",
    name: "Moodly Essential",
    color: "Black",
    role: "Quiet wordmark/chest",
    price: 699,
    gsm: 240,
    fit: "Unisex oversized drop-shoulder",
    sizes: ["S", "M", "L", "XL", "XXL"],
    printMethod: "Premium print (screen)",
    image_front: "",
    image_detail: "",
    image_fabric: "",
    image_fit: "",
    description: [
      "Quiet Moodly mark.",
      "Same 240 GSM blank.",
      "For days you want less noise.",
    ],
    relatedSlug: "moodly-essential-cream",
  },
  {
    slug: "moodly-essential-cream",
    name: "Moodly Essential",
    color: "Cream",
    role: "Quiet colorway",
    price: 699,
    gsm: 240,
    fit: "Unisex oversized drop-shoulder",
    sizes: ["S", "M", "L", "XL", "XXL"],
    printMethod: "Premium print (screen)",
    image_front: "",
    image_detail: "",
    image_fabric: "",
    image_fit: "",
    description: [
      "Quiet Moodly mark.",
      "Same 240 GSM blank.",
      "For days you want less noise.",
    ],
    relatedSlug: "moodly-essential-black",
  },
  {
    slug: "statement-impact-black",
    name: "Statement Tee",
    color: "Black",
    role: "Single graphic statement",
    price: 699,
    gsm: 240,
    fit: "Unisex oversized drop-shoulder",
    sizes: ["S", "M", "L", "XL", "XXL"],
    printMethod: "Premium print (DTF)",
    image_front: "",
    image_detail: "",
    image_fabric: "",
    image_fit: "",
    description: ["One graphic for days that need to say more.", "Same heavyweight 240 GSM blank."],
  },
];

export const activeProducts = products.filter((product) => product.active !== false);
export const getProduct = (slug: string) => activeProducts.find((p) => p.slug === slug);
