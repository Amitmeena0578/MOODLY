interface SizePillsProps {
  sizes: string[];
  selected: string | null;
  onSelect: (size: string) => void;
}

export function SizePills({ sizes, selected, onSelect }: SizePillsProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Select size">
      {sizes.map((size) => {
        const active = selected === size;
        return (
          <button
            key={size}
            type="button"
            onClick={() => onSelect(size)}
            aria-pressed={active}
            className={`min-h-[44px] min-w-[44px] rounded-lg border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1F1F] ${
              active
                ? "border-[#141414] bg-[#141414] text-[#F5F0E8]"
                : "border-[#E5DED3] bg-[#FFFCF7] text-[#141414] hover:border-[#141414]"
            }`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
