import Language from "@/component/Language";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
export default function Carouse() {
  const texts: string[] = [
    "Sea with us, See with us",
    "Welcome to KAIRU ECO ART STUDIO",
    "Join us to explore eco-friendly art",
  ];
  const [carouselIndex, setIndex] = useState<number>(0);
  const [visible, setVisible] = useState(true);

  const prev = () => {
    setVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? texts.length - 1 : prevIndex - 1
      );
      setVisible(true);
    }, 300);
  };

  const next = () => {
    setVisible(false);

    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
      setVisible(true);
    }, 1000);
  };
  // ⏱ 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      prev();
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative">
      <div className="bg-primary w-screen h-[50px] flex items-center text-white text-sm justify-center">
        <ChevronLeft onClick={prev} className="cursor-pointer" />
        <div
          className={`text-xs lg:text-sm font-medium tracking-wide text-center transition-opacity duration-1200  w-[50%] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {visible}
          {texts[carouselIndex]}
        </div>
        <ChevronRight onClick={next} />
      </div>
      <div className="block lg:hidden ">
        <Language />
      </div>
    </div>
  );
}
