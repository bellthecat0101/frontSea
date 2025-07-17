
import { clearCart } from "@/store/slice/cartSlice";
import { useTranslation } from "react-i18next";
import {useAppDispatch, useAppSelector } from "@/store/hooks";
export default function CartSummary() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const items = useAppSelector(state => state.cart.items);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-8 flex justify-between items-center">
      <button
        onClick={() => dispatch(clearCart())}
        className="text-sm text-red-500 "
      >
        {/*  清空購物車*/}
        {t("products.cleanAll")}
      </button>
      <div className="text-xl font-bold"> {t("products.total")}:${total}</div>
    </div>
  );
}
