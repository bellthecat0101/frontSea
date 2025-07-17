// src/pages/LoginPage.tsx
import { useState } from "react";
import TermsCheckbox from "./components/TermsCheckbox";
export default function LoginPage() {
  const [isUser, setIsUser] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };


  return (
    <div className="max-w-md mx-auto my-20 p-6">
      <div className="flex justify-center gap-5 text-[25px] pb-10 text-primary">
        <span
          className={`w-[50%] text-right cursor-pointer ${isUser ? "opacity-100" : "opacity-20"}`}
          onClick={() => setIsUser(!isUser)}
        >
          Sign In
        </span>
        |
        <span
          className={`w-[50%] text-left  cursor-pointer ${isUser ? "opacity-20" : "opacity-100"}`}
          onClick={() => setIsUser(!isUser)}
        >
          New customer
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-3 h-[150px]">
          <input
            type="email"
            placeholder="會員帳號"
            className="w-full px-3 py-2 border-b border-primary placeholder-primary text-xs
             focus:outline-none focus:ring-0  focus:border-gray-400"
          />
          <input
            type="password"
            placeholder="密碼"
            className="w-full px-3 py-2 border-b border-primary placeholder-primary text-xs mb-[100px]
             focus:outline-none focus:ring-0   focus:border-gray-400"
          />
          {!isUser && (
            <input
              type="password2"
              placeholder="再次輸入密碼"
              className="w-full px-3 py-2 border-b border-primary placeholder-primary text-xs mb-[100px]
             focus:outline-none focus:ring-0   focus:border-gray-400"
            />
          )}

          {!isUser && (
            <TermsCheckbox checked={isAgreed} onChange={setIsAgreed} />
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-white border border-primary p-2 mt-10 rounded hover:bg-primary hover:text-white"
        >
          {isUser ? "登入" : "註冊"}
        </button>
      </form>

      <div className="flex justify-between items-center gap-4 text-sm pt-4">
        {isUser && <div>忘記密碼</div>}
      </div>
    </div>
  );
}
