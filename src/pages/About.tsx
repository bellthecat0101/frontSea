import { useTranslation } from "react-i18next";
import { intro } from "../assets/img";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen animate-fade-in-up ">
      <img src={intro} alt="" />
      <p className="text-primary w-[60%] mx-auto my-6 leading-7">
        {t("about.text")}
      </p>
    </div>
  );
}
