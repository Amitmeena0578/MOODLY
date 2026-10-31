import { useRouter } from "../lib/router";
import { activeProducts, BRAND, SAMPLE_IMAGES } from "../data/products";
import { PrimaryButton, GhostButton } from "../components/Buttons";
import { ProductCard } from "../components/ProductCard";
import { waLink } from "../lib/whatsapp";
import { SafeImage } from "../components/SafeImage";

const headerChat = "Hi Moodly\nI have a question about the drop.";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Home() {
  const { navigate } = useRouter();

  return (
    <div>
      {/* A. Hero */}
      <section className="relative flex min-h-[90vh] items-end overflow-hidden bg-[#141414] sm:min-h-[100vh]">
        <SafeImage
          src={SAMPLE_IMAGES.kalamkariCreamBack}
          alt="Kalamkari Heritage cream, back print, natural light"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          fallbackClassName="absolute inset-0 flex h-full w-full items-center justify-center bg-[#141414] text-sm text-[#F5F0E8]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pb-12 pt-32 sm:px-6 sm:pb-16">
          <p className="text-xs font-medium tracking-[0.3em] text-[#F5F0E8]/80">DROP 01</p>
          <h1 className="mt-4 font-serif text-5xl italic tracking-tight text-white sm:text-7xl">
            Wear your mood.
          </h1>
          <p className="mt-4 text-sm tracking-wide text-[#F5F0E8]/90 sm:text-base">
            240 GSM · Drop-shoulder · Jaipur
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton
              href="#drop"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                scrollToId("drop");
              }}
            >
              Shop the drop
            </PrimaryButton>
            <GhostButton
              href="#/print"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                navigate("/print");
              }}
              className="border-white text-white hover:bg-white hover:text-[#141414]"
            >
              Print your mood
            </GhostButton>
          </div>
          <p className="mt-6 text-xs tracking-wide text-[#F5F0E8]/70">
            Free Jaipur pickup · Ships pan-India
          </p>
        </div>
      </section>

      {/* B. Drop bar */}
      <section className="border-b border-[#E5DED3] bg-[#FFFCF7] px-4 py-6 sm:px-6">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-sm font-medium tracking-wide text-[#141414]">
            5 designs · Cream &amp; Black · S–XXL · Printed to order
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-wide text-[#6B6460]">
            <span>240 GSM</span>
            <span>Oversized</span>
            <span>Premium print</span>
            <span>Unisex</span>
          </div>
        </div>
      </section>

      {/* C. Shop the drop */}
      <section id="drop" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20 scroll-mt-16">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#141414] sm:text-4xl">The drop</h2>
          <p className="mt-3 text-[#6B6460]">
            Five tees. Same heavyweight blank. Different mood.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {activeProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      {/* D. Kalamkari band */}
      <section className="bg-[#FFFCF7] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="grid grid-cols-2 gap-4">
            <SafeImage
              src={SAMPLE_IMAGES.kalamkariCreamBack}
              alt="Kalamkari Heritage, large back print"
              className="col-span-2 aspect-[4/3] w-full rounded-xl object-cover"
              fallbackClassName="col-span-2 flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-[#EFE8DB] text-sm text-[#6B6460]"
            />
            <SafeImage
              src={SAMPLE_IMAGES.kalamkariDetail}
              alt="Kalamkari Heritage, print detail crop"
              className="aspect-square w-full rounded-xl object-cover"
              fallbackClassName="flex aspect-square w-full items-center justify-center rounded-xl bg-[#EFE8DB] text-sm text-[#6B6460]"
            />
            <SafeImage
              src={SAMPLE_IMAGES.kalamkariBlackBack}
              alt="Kalamkari Heritage black colorway, back print"
              className="aspect-square w-full rounded-xl object-cover"
              fallbackClassName="flex aspect-square w-full items-center justify-center rounded-xl bg-[#EFE8DB] text-sm text-[#6B6460]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#141414] sm:text-4xl">
              Kalamkari Heritage
            </h2>
            <p className="mt-2 text-base font-medium text-[#7A1F1F]">
              Rooted in tradition. Cut for today.
            </p>
            <p className="mt-4 max-w-md text-[#6B6460]">
              Hand-inspired artwork, printed on our heavyweight 240 GSM cotton. A quiet nod to
              kalamkari, cut into an oversized drop-shoulder tee that holds its shape.
            </p>
            <p className="mt-2 text-sm text-[#6B6460]">Cream or Black · S–XXL</p>
            <div className="mt-6">
              <GhostButton
                href="#drop"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  navigate("/");
                  requestAnimationFrame(() => scrollToId("drop"));
                }}
              >
                Shop Kalamkari
              </GhostButton>
            </div>
          </div>
        </div>
      </section>

      {/* E. Fabric truth */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-[#141414] sm:text-4xl">
          Heavy on purpose.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#7A1F1F]">240 GSM</p>
            <p className="mt-2 text-[#141414]">Substantial cotton. Holds shape.</p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#7A1F1F]">Drop-shoulder</p>
            <p className="mt-2 text-[#141414]">Oversized, unisex, sits easy.</p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-[#7A1F1F]">Printed to order</p>
            <p className="mt-2 text-[#141414]">We print after you confirm.</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-[#6B6460]">
          Care: wash inside-out, cold, no iron on print.
        </p>
      </section>

      {/* F. Print Your Mood */}
      <section className="bg-[#141414] py-16 text-[#F5F0E8] sm:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Print your mood.</h2>
            <p className="mt-3 text-[#F5F0E8]/80">Same 240 GSM tee. Your art.</p>

            <ol className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#F5F0E8]/50">01</span>
                <span>Send file on WhatsApp</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#F5F0E8]/50">02</span>
                <span>Approve preview</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#F5F0E8]/50">03</span>
                <span>We print &amp; ship</span>
              </li>
            </ol>

            <div className="mt-8 space-y-2 rounded-xl border border-[#F5F0E8]/20 p-5 text-sm text-[#F5F0E8]/80">
              <p>Original art only</p>
              <p>No brand logos, celebrities, or copyrighted characters</p>
              <p>We can refuse any file</p>
              <p>Placement front or back</p>
              <p>Extra charge + 3–5 days · price confirmed on WhatsApp</p>
            </div>

            <div className="mt-8">
              <PrimaryButton
                href="#/print"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  navigate("/print");
                }}
              >
                Start on WhatsApp
              </PrimaryButton>
            </div>
          </div>

          <SafeImage
            src={SAMPLE_IMAGES.printBlanks}
            alt="Plain cream and black blank tees for Print Your Mood"
            className="aspect-[4/3] w-full rounded-xl object-cover"
            fallbackClassName="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-[#141414] text-sm text-[#F5F0E8]"
          />
        </div>
      </section>

      {/* G. How ordering works */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-[#141414] sm:text-4xl">
          No cart. Just WhatsApp.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "1", t: "Pick tee + size" },
            { n: "2", t: "Order on WhatsApp" },
            { n: "3", t: "Pay UPI · send screenshot" },
            { n: "4", t: "We print · pickup or ship" },
          ].map((step) => (
            <div key={step.n}>
              <p className="text-xs font-medium tracking-[0.2em] text-[#7A1F1F]">STEP {step.n}</p>
              <p className="mt-2 text-[#141414]">{step.t}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#6B6460]">
          {BRAND.productionText}
        </p>
      </section>

      {/* H. Pickup & shipping */}
      <section className="bg-[#FFFCF7] py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-4 sm:px-6 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E5DED3] bg-[#F5F0E8] p-6">
            <h3 className="text-lg font-semibold text-[#141414]">Jaipur pickup</h3>
            <p className="mt-2 text-sm text-[#6B6460]">
              Confirm on WhatsApp · free · pay by UPI or cash on pickup.
            </p>
          </div>
          <div className="rounded-xl border border-[#E5DED3] bg-[#F5F0E8] p-6">
            <h3 className="text-lg font-semibold text-[#141414]">All India</h3>
            <p className="mt-2 text-sm text-[#6B6460]">
              Dispatched after printing ·               courier typically 3–6 days · tracking shared on WhatsApp. {BRAND.shippingText}
            </p>
          </div>
        </div>
      </section>

      {/* I. Policy */}
      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-[#141414]">Policy</h2>
        <div className="mt-6 space-y-3 text-sm text-[#6B6460]">
          <p>No returns on print, size choice, or custom orders.</p>
          <p>Defect or wrong item: tell us within 48 hours with a photo and we'll replace it.</p>
          <p>
            Questions, anytime:{" "}
            <a href={waLink(headerChat)} target="_blank" rel="noopener" className="text-[#7A1F1F] underline underline-offset-4">
              WhatsApp us
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
