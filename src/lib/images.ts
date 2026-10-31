import { SAMPLE_IMAGES, type ImageRole, type Product, type ProductImage } from "../data/products";

const sampleByRole: Record<string, string> = {
  "kalamkari-heritage-cream:front": SAMPLE_IMAGES.kalamkariCreamFront,
  "kalamkari-heritage-cream:back": SAMPLE_IMAGES.kalamkariCreamBack,
  "kalamkari-heritage-cream:detail": SAMPLE_IMAGES.kalamkariDetail,
  "kalamkari-heritage-cream:fabric": SAMPLE_IMAGES.fabricTexture,
  "kalamkari-heritage-cream:fit": SAMPLE_IMAGES.fitSide,
  "kalamkari-heritage-black:back": SAMPLE_IMAGES.kalamkariBlackBack,
  "kalamkari-heritage-black:front": SAMPLE_IMAGES.kalamkariBlackBack,
  "kalamkari-heritage-black:detail": SAMPLE_IMAGES.kalamkariDetail,
  "kalamkari-heritage-black:fabric": SAMPLE_IMAGES.fabricTexture,
  "kalamkari-heritage-black:fit": SAMPLE_IMAGES.fitSide,
};

const fieldByRole: Record<ImageRole, keyof Product> = {
  front: "image_front",
  back: "image_back",
  detail: "image_detail",
  fabric: "image_fabric",
  fit: "image_fit",
};

export function resolveImage(product: Product, role: ImageRole): string | null {
  const finalUrl = product[fieldByRole[role]];
  if (typeof finalUrl === "string" && finalUrl.trim()) return finalUrl.trim();
  return sampleByRole[`${product.slug}:${role}`] ?? null;
}

export function getProductImages(product: Product): ProductImage[] {
  const roles: ImageRole[] = ["back", "front", "detail", "fabric", "fit"];
  return roles.map((role) => ({
    role,
    src: resolveImage(product, role),
    alt: `${product.name} ${product.color.toLowerCase()} tee, ${role === "front" ? "front view" : role}`,
  }));
}
