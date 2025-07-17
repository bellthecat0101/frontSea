import { useTranslation } from "react-i18next";
import BannerSection from "./components/BannerSection";
import ContactSection from "./components/ContactSection";
import IntroSection from "./components/IntroSection";
import ProductSection from "./components/ProductSection";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <BannerSection title={t("home.banner.title")} />
      <ProductSection
        title={t("home.product.title")}
        description={t("home.product.description")}
      />
      <IntroSection
        title={t("home.intro.title")}
        description={t("home.intro.description")}
      />
      <ContactSection
        subscribeSuccess={t("home.contact.subscribeSuccess")}
        emailError={t("home.contact.emailError")}
      />
    </>
  );
}
