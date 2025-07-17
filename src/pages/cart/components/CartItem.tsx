import { removeFromCart, updateQuantity } from "@/store/slice/cartSlice";
import { Trash2 } from "lucide-react";
import { useAppSelector, useAppDispatch } from '@/store/hooks';

export default function CartItem({ item }: { item: any }) {
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector(state => state.language.currentLang);
  const isEnglish = currentLang=== 'en'
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <img
        src={`/images/product${item.id}1.webp`}
        alt={isEnglish ? item.nameEn :item.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1">
        <div className="font-medium">{isEnglish ? item.nameEn :item.name}</div>
        <div className="text-gray-500">${item.price}</div>
        <div className="flex items-center mt-2 space-x-2">
          <button
            className="px-2 border rounded"
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="px-2 border rounded"
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-sm hover:text-red-600"
      >
        <Trash2 />
      </button>
    </div>
  );
}
