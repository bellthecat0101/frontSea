import type { RootState } from "@/store";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItemList from "./components/CartItemList"; // 購物車
import CartSummary from "./components/CartSummary"; // 總數
import OrderForm from "./components/OrderForm"; // 顧客資料

export default function CartPage() {
  const items = useSelector((state: RootState) => state.cart.items);
  const { t } = useTranslation();
  return (
    <div className="max-w-5xl mx-auto p-6 text-primary font-noto-sans-tc ">
      <h2 className="text-2xl font-bold mb-6">{t("cart.cart")}</h2>
      {items.length === 0 ? (
        <div className="text-center text-gray-500 h-[400px] flex justify-center items-center">
          {/* 購物車為空 */}
          {t("cart.emptyCart")}
          <Link to="/products" className="text-blue-500 underline ml-1">
            {t("cart.shopping")}
          </Link>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-start">
          <div className="p-10 w-full sm:w-[50%]">
            {/* 購物車內容 */}
            <CartItemList />
            {/* 總數 */}
            <CartSummary />
          </div>
          <div className=" w-full  sm:w-[50%]">
            {/* 顧客資料*/}
            <OrderForm cartItems={items} />
          </div>
        </div>
      )}
    </div>
  );
}
