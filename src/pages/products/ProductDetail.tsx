import { productApi } from "@/api/product";
import Loading from "@/component/Loading";
import Toast from "@/component/Toast";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slice/cartSlice";
import type { Product } from "@/types";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import DetailImgCarousel from "./components/DetailImgCarousel";
import DetailInfo from "./components/DetailInfo";
import QuantitySelector from "./components/QuantitySelector";
export default function ProductDetail() {
  const { id } = useParams() as { id: string };
  const numericId = Number(id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [showToast, setShowToast] = useState(false);
  const currentLang = useAppSelector((state) => state.language.currentLang);
  const isEnglsih = currentLang === "en";
  const { t } = useTranslation();
  useEffect(() => {
    productApi.getProductById(numericId).then((res) => {
      setProduct(res.data);
    });
  }, []);
  const handleAddToCart = () => {
    if (!product) return;
    const { name, price, nameEn } = product;
    const cartItem = {
      id,
      name,
      nameEn,
      price,
      quantity,
    };
    setQuantity(1);
    dispatch(addToCart(cartItem));
    setShowToast(true);
  };
  if (!product) {
    return (
      <div className="p-10 text-center  min-h-[600px] ">
        <Loading />
      </div>
    );
  }
  return (
    <div className="p-10 flex flex-col md:flex-row gap-10 animate-fade-in-up ">
      <div className="md:w-1/2 w-full ">
        <DetailImgCarousel
          images={[`/images/product${id}1.webp`, `/images/product${id}2.webp`]}
          currentIndex={currentIndex}
          onChange={setCurrentIndex}
        />
      </div>
      <div className="md:w-1/2 w-full">
        <DetailInfo
          name={isEnglsih ? product.nameEn : product.name}
          description={isEnglsih ? product.descriptionEn : product.description}
          price={product.price}
        />
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
        <button
          className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-opacity-90 transition"
          onClick={handleAddToCart}
        >
          {t("products.addCart")}
        </button>
      </div>
      {showToast && (
        <Toast
          message={t("products.finishAdd")}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
