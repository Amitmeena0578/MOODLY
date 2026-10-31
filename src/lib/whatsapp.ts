import { BRAND } from "../data/products";

const WA_BASE = `https://wa.me/${BRAND.whatsappNumber}`;

export function waLink(text: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(text)}`;
}

export function productOrderText(name: string, color: string, size: string): string {
  return [
    "Hi Moodly",
    "Order:",
    `— ${name} (${color})`,
    `— Size: ${size}`,
    "— Qty: 1",
    "— Delivery: Jaipur pickup / Ship to ______",
  ].join("\n");
}

export const headerChatText = ["Hi Moodly", "I have a question about the drop."].join("\n");

export function printYourMoodText(color: string, size: string, placement: string): string {
  return [
    "Hi Moodly — Print Your Mood",
    `Size: ${size}`,
    `Color: ${color}`,
    `Placement: ${placement}`,
    "(I will send the file next.)",
  ].join("\n");
}
