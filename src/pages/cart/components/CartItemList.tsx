import { useAppSelector } from "@/store/hooks";
import CartItem from "./CartItem";
export default function CartItemList() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="space-y-6 h-[400px] overflow-y-auto">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
