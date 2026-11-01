import { useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import { SizePills } from "../components/SizePills";
import { waLink, printYourMoodText } from "../lib/whatsapp";
import { SAMPLE_IMAGES } from "../data/products";
import { SafeImage } from "../components/SafeImage";

const SIZES = ["S", "M", "L", "XL", "XXL"];
const COLORS = ["Cream", "Black"] as const;
const PLACEMENTS = ["Back", "Front"] as const;

export function PrintPage() {
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<(typeof COLORS)[number]>("Cream");
  const [placement, setPlacement] = useState<(typeof PLACEMENTS)[number]>("Back");

  const href = waLink(printYourMoodText(color, size ?? "", placement));

  return (
    <div className="pb-28 sm:pb-0">
      {/* Hero */}
      <section className="grid overflow-hidden bg-[#F5F0E8] md:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <SafeImage
          src={SAMPLE_IMAGES.printBlanks}
          alt="Plain cream and black blank tees, ready for custom print"
          className="h-full min-h-[18rem] w-full object-cover md:min-h-[25rem]"
          fallbackClassName="flex min-h-[18rem] w-full items-center justify-center bg-[#EFE8DB] text-sm text-[#6B6460] md:min-h-[25rem]"
        />
        <div className="flex flex-col justify-center px-4 py-8 md:px-10 md:py-12 lg:px-16">
          <p className="text-xs font-medium tracking-[0.3em] text-[#7A1F1F]">CUSTOM DROP</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#141414] sm:text-6xl">
            Print your mood.
          </h1>
          <p className="mt-4 max-w-md text-[#6B6460]">Same tee. Your file. WhatsApp only.</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Options + steps */}
          <div>
            <h2 className="text-xl font-semibold text-[#141414]">Build your order</h2>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-[#141414]">Color</p>
              <div className="flex gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`min-h-[44px] rounded-lg border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F1F] ${
                      color === c
                        ? "border-[#141414] bg-[#141414] text-[#F5F0E8]"
                        : "border-[#E5DED3] bg-[#FFFCF7] text-[#141414] hover:border-[#141414]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-[#141414]">Size</p>
              <SizePills sizes={SIZES} selected={size} onSelect={setSize} />
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm font-medium text-[#141414]">Placement</p>
              <div className="flex flex-wrap gap-2">
                {PLACEMENTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPlacement(p)}
                    className={`min-h-[44px] rounded-lg border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F1F] ${
                      placement === p
                        ? "border-[#141414] bg-[#141414] text-[#F5F0E8]"
                        : "border-[#E5DED3] bg-[#FFFCF7] text-[#141414] hover:border-[#141414]"
                    }`}
                  >
                    {p === "Back" ? "Back (default)" : p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 hidden sm:block">
              <PrimaryButton href={href}>Start on WhatsApp</PrimaryButton>
              {!size && <p className="mt-2 text-xs text-[#6B6460]">You can still start — we'll confirm size on WhatsApp.</p>}
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-medium tracking-wide text-[#141414]">How it works</h3>
              <ol className="mt-4 space-y-4 text-sm text-[#141414]">
                <li className="flex gap-3">
                  <span className="text-[#7A1F1F]">01</span>
                  <span>Pick color, size and placement above.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7A1F1F]">02</span>
                  <span>Send your file on WhatsApp.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7A1F1F]">03</span>
                  <span>Approve the preview we send back.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#7A1F1F]">04</span>
                  <span>Pay UPI. We print and ship or arrange pickup.</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Rules + pricing */}
          <div>
            <SafeImage
              src={SAMPLE_IMAGES.printBlanks}
              alt="Plain cream and black blank tees for Print Your Mood"
              className="aspect-[4/3] w-full rounded-xl object-cover"
              fallbackClassName="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-[#EFE8DB] text-sm text-[#6B6460]"
            />

            <div className="mt-8 rounded-xl border border-[#E5DED3] bg-[#FFFCF7] p-6">
              <h3 className="text-sm font-semibold text-[#141414]">Rules</h3>
              <ul className="mt-3 space-y-2 text-sm text-[#6B6460]">
                <li>Original art only.</li>
                <li>No brand logos, celebrities, or copyrighted characters.</li>
                <li>We can refuse any file.</li>
                <li>Placement: front or back. Max print area roughly 30×40 cm (confirmed against the actual tee before printing).</li>
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-[#E5DED3] bg-[#FFFCF7] p-6">
              <h3 className="text-sm font-semibold text-[#141414]">Price</h3>
              <p className="mt-2 text-sm text-[#6B6460]">
                Tee: ₹699 · Print add-on: confirmed on WhatsApp based on your design · Production
                usually 3–5 days after approval and payment.
              </p>
            </div>

            <p className="mt-6 text-xs text-[#6B6460]">
              240 GSM heavyweight cotton · Unisex oversized drop-shoulder · No returns on custom
              orders. Defect or wrong item: tell us within 48 hours with a photo and we'll
              replace it.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5DED3] bg-[#FFFCF7] px-4 py-3 sm:hidden">
        <PrimaryButton href={href} className="w-full">
          Start on WhatsApp
        </PrimaryButton>
      </div>
    </div>
  );
}
