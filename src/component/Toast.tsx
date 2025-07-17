// components/SuccessToast.tsx
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface SuccessToastProps {
  message: string;
  onClose: () => void;
}

export default function SuccessToast({ message, onClose }: SuccessToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-20 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
