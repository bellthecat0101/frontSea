import Toast from "@/component/Toast";
import clsx from "clsx";
import { MoveRight } from "lucide-react";
import { useRef, useState } from "react";
type Props = {
  subscribeSuccess: string;
  emailError: string;
};

export default function ContactSection({
  subscribeSuccess,
  emailError,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [emailInput, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showError, setError] = useState(false);
  const isValidEmail = (emailInput: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailInput);
  };

  const handleSubscribe = () => {
    if (emailInput.trim() === "") return;

    if (!isValidEmail(emailInput)) {
      console.log(showError);
      setError(true);
      console.log(showError);
      return;
    }
    setError(false);
    setShowToast(true);
    setEmail("");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setEmail(e.target.value); // 清除訂閱提示
  };

  const labelClass = clsx(
    "absolute left-2 transition-all duration-200 pointer-events-none text-gray-400 transform -translate-y-1/2",
    "group-focus-within:top-3 group-focus-within:text-xs",
    {
      "top-1/2 ": !emailInput,
      "top-3 text-xs": emailInput.length > 0,
    }
  );

  return (
    <section className="text-center pt-3">
      <div className="mb-20 relative">
        <h3 className="text-[30px] pb-5 tracking-wide">
          Subscribe to our emails
        </h3>
        <span className="text-sm pb-1 opacity-70">
          Be the first to know about new collections and exclusive offers.
        </span>

        <div
          className="border w-[350px] mx-auto mt-5  rounded-md relative h-[50px] px-2 flex items-center cursor-text  group"
          onClick={() => inputRef.current?.focus()}
        >
          <input
            type="text"
            ref={inputRef}
            className="w-full bg-transparent outline-none border-none pt-4 text-base"
            value={emailInput}
            onChange={handleInputChange}
          />
          <label className={labelClass}>Email</label>
          <MoveRight
            className="cursor-pointer text-gray-500 hover:text-black"
            onClick={handleSubscribe}
          />
        </div>
        {showError && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-red-500 text-sm">
            {emailError}
          </div>
        )}
      </div>

      {showToast && (
        <Toast message={subscribeSuccess} onClose={() => setShowToast(false)} />
      )}
    </section>
  );
}
