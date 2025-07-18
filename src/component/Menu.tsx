import { useAppSelector } from "@/store/hooks";
import { cartItemCount } from "@/store/slice/cartSlice";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.webp";
import Carouse from "./Carouse";
import Language from "./Language";
export default function Menu() {
  const { t } = useTranslation();
  const cartCount = useAppSelector(cartItemCount);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const menu = [
    { to: "/about", label: "menu.about" },
    { to: "/products", label: "menu.shop" },
    { to: "/contact", label: "menu.contact" },
  ];
  const navClass = clsx(
    "px-4 lg:px-[50px] py-[10px] flex items-center justify-between text-primary opacity-90 text-sm transition-all duration-300 z-50",
    {
      "fixed top-0 left-0 w-full bg-white shadow-md": isSticky,
    }
  );
  useEffect(() => {
    const menuTop = menuRef.current?.offsetTop || 0;

    const onScroll = () => {
      setIsSticky(window.scrollY > menuTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Carouse />
      <nav ref={menuRef} className={navClass}>
        <div className="flex justify-start items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Banner"
              className="w-[30px] hover:opacity-80"
            />
          </Link>
          {menu.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-[10px] hover:opacity-80"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
        <div className="flex justify-end items-center relative lg:w-[100px] ">
          <div className="hidden lg:block">
            <Language />
          </div>

          <Link to="/cart" className="relative">
            <ShoppingCart />
            {cartCount > 0 && (
              <div
                className="
                    absolute -top-2 -right-2 
                    bg-red-600 text-white 
                    text-xs font-semibold leading-none 
                    w-5 h-5 min-w-[20px] rounded-full 
                    flex items-center justify-center  font-noto-sans-tc 
                    shadow-md
                  "
              >
                {cartCount}
              </div>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
