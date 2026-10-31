import { useRouter } from "../lib/router";
import { waLink, headerChatText } from "../lib/whatsapp";
import { BRAND } from "../data/products";

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="border-t border-[#E5DED3] bg-[#F5F0E8]">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="text-sm font-semibold tracking-[0.2em] text-[#141414]"
            >
              MOODLY
            </a>
            <p className="mt-2 font-serif text-base italic text-[#141414]">{BRAND.tagline}</p>
            <p className="mt-1 text-sm text-[#6B6460]">{BRAND.city}, India</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[#141414] sm:items-end">
            <a
              href="https://instagram.com/get.moodly"
              target="_blank"
              rel="noopener"
              className="hover:text-[#7A1F1F]"
            >
              Instagram {BRAND.instagram}
            </a>
            <a href={waLink(headerChatText)} target="_blank" rel="noopener" className="hover:text-[#7A1F1F]">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 space-y-1.5 border-t border-[#E5DED3] pt-6 text-xs leading-relaxed text-[#6B6460]">
          <p>Care: wash inside-out, cold, no iron on print.</p>
          <p>Defect or wrong item: tell us within 48 hours with a photo and we'll replace it.</p>
          <p>Small batch, printed to order. Five designs, made with care.</p>
        </div>
      </div>
    </footer>
  );
}
