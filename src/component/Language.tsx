import type { RootState } from "@/store";
import { setLanguage } from "@/store/slice/languageSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Language() {
  const dispatch = useDispatch();
  const currentLang = useSelector(
    (state: RootState) => state.language.currentLang
  );

  return (
    <div className="text-sm font-noto-sans-tc absolute top-1/2 -translate-y-1/2 right-2 lg:right-10 ">
      <span
        className={`pr-2 cursor-pointer hover:opacity-70 ${
          currentLang !== "zh" ? "text-gray-400 " : "text-white lg:text-primary"
        }`}
        onClick={() => dispatch(setLanguage("zh"))}
      >
        繁中
      </span>

      <span
        className={` cursor-pointer hover:opacity-70 ${
          currentLang !== "en" ? "text-gray-400" : "text-white  lg:text-primary"
        }`}
        onClick={() => dispatch(setLanguage("en"))}
      >
        EN
      </span>
    </div>
  );
}
