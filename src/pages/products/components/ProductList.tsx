// components/ProductList.tsx
import { useAppSelector } from "@/store/hooks";
import type { Product } from "@/types";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
export default function ProductGrid({ items }: { items: Product[] }) {
  const currentLang = useAppSelector((state) => state.language.currentLang);
  const isEnglsih = currentLang === "en";
  return (
    <section className="flex flex-wrap py-10 sm:py-5">
      {items.map((item, key) => (
        <Link
          to={`/productDetail/${item.id}`}
          key={item.id}
          style={{ animationDelay: `${key * 100}ms` }}
          className="relative group text-center p-1 w-1/2 sm:w-1/5 transition-all duration-700 animate-fade-in-up"
        >
          <div className="relative overflow-hidden">
            <img
              src={`/images/product${item.id}1.webp`}
              alt={item.name}
              className="transition-transform duration-700 group-hover:scale-105"
            />
            {/* 黑幕遮罩 */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Search className="text-white w-6 h-6 " />
            </div>
          </div>

          <div className="font-medium pt-3">
            {isEnglsih ? item.nameEn : item.name}
          </div>
          {item.price !== undefined && (
            <div className="text-sm text-gray-500 pb-5 font-noto-sans-tc">
              ${item.price}
            </div>
          )}
        </Link>
      ))}
    </section>
  );
}
