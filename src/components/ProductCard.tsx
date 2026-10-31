import { useState } from "react";
import type { Product } from "../data/products";
import { useRouter } from "../lib/router";
import { PrimaryButton } from "./Buttons";
import { getProductImages } from "../lib/images";
import { SafeImage } from "./SafeImage";

export function ProductCard({ product }: { product: Product }) {
  const { navigate } = useRouter();
  const [hover, setHover] = useState(false);

  const images = getProductImages(product);
  const front = images.find((i) => i.role === "front") ?? images[0];
  const back = images.find((i) => i.role === "back");
  const shown = hover && front?.src ? front : back ?? front;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-[#E5DED3] bg-[#FFFCF7]">
      <a
        href={`#/p/${product.slug}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/p/${product.slug}`);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={() => setHover((h) => !h)}
        className="block aspect-[4/5] overflow-hidden bg-[#EFE8DB]"
      >
        {product.soldOut && (
          <span className="absolute z-10 m-3 rounded-md bg-[#141414] px-2 py-1 text-xs font-medium text-white">
            Sold out
          </span>
        )}
        <SafeImage
          src={shown?.src ?? undefined}
          alt={shown?.alt ?? "Photo soon"}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          fallbackClassName="flex h-full min-h-40 w-full items-center justify-center border border-dashed border-[#D7C6B4] bg-[#F3E9DC] text-sm text-[#7A1F1F]"
        />
      </a>

      <div className="flex min-h-[12.5rem] flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-[15px] font-medium text-[#141414]">{product.name}</h3>
          <p className="mt-0.5 text-sm text-[#6B6460]">
            {product.color} · {product.gsm} GSM
          </p>
        </div>

        <p className="text-sm font-medium text-[#141414]">₹{product.price}</p>

        <div className="mt-auto flex flex-col gap-2">
          <PrimaryButton href={`#/p/${product.slug}`} className="w-full">
            {product.soldOut ? "View details" : "Choose size"}
          </PrimaryButton>
          <a
            href={`#/p/${product.slug}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/p/${product.slug}`);
            }}
            className="text-center text-sm text-[#141414] underline underline-offset-4 hover:text-[#7A1F1F]"
          >
            Details →
          </a>
        </div>
      </div>
    </div>
  );
}
