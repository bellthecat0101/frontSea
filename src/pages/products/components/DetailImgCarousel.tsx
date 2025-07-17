import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  currentIndex: number;
  onChange: (index: number) => void;
};

export default function ProductImageCarousel({
  images,
  currentIndex,
  onChange,
}: Props) {
  const next = () => onChange((currentIndex + 1) % images.length);
  const prev = () =>
    onChange((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt="product"
        className="w-full rounded object-cover"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/80 shadow-md transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white/80 shadow-md transition-all duration-300 group"
      >
        <ChevronRight className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => onChange(i)}
            className={`w-14 h-14 object-cover rounded cursor-pointer transition-all ${
              i === currentIndex
                ? "shadow-[0_4px_12px_rgba(0,0,0,0.4)] "
                : "opacity-80 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
