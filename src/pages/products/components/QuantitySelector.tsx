type Props = {
    quantity: number;
    onChange: (qty: number) => void;
  };
  
  export default function QuantitySelector({ quantity, onChange }: Props) {
    return (
      <div className="flex items-center gap-3 mt-4">
        <span className="text-sm text-gray-500">數量</span>
        <button onClick={() => onChange(Math.max(1, quantity - 1))} className="px-2 py-1 border rounded">-</button>
        <span>{quantity}</span>
        <button onClick={() => onChange(quantity + 1)} className="px-2 py-1 border rounded">+</button>
      </div>
    );
  }
  