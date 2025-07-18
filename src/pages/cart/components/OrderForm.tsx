import type { OrderItem } from "@/types";
import { useOrderForm } from "./../hooks/useOderForm";
import CustomerSection from "./CustomerSection";
import ShippingSection from "./ShippingSection";

type Props = {
  cartItems: OrderItem[];
};

export default function OrderForm({ cartItems }: Props) {
  const { register, handleSubmit, errors, onSubmit, loading, submitError } =
    useOrderForm(cartItems);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 p-10">
      {/* 買方資料 */}
      <CustomerSection register={register} errors={errors.customerData || {}} />
      {/* 收貨人資料 */}
      <ShippingSection register={register} errors={errors.shippingData || {}} />

      {submitError && <p className="text-red-500">{submitError}</p>}

      <button
        type="submit"
        className="w-full py-2 px-4 btn"
        disabled={loading}
      >
        {loading ? "loading..." : "確認送出"}
      </button>
    </form>
  );
}
