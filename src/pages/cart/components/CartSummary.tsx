import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart, total } from "@/store/slice/cartSlice";
import { useTranslation } from "react-i18next";
export default function CartSummary() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const sum = useAppSelector(total);

  return (
    <div className="mt-8 flex justify-between items-center">
      <button
        onClick={() => dispatch(clearCart())}
        className="text-sm text-red-500 "
      >
        {/*  清空購物車*/}
        {t("products.cleanAll")}
      </button>
      <div className="text-xl font-bold">
  
        {t("products.total")}:${sum}
      </div>
    </div>
  );
}
