import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  const contactInfo = {
    vat: "90XXXX",
    phone: "(06)XXX-XXXX",
    address: "944屏東縣車城XXXXXX",
    email: "XXXXXX@gmail.com",
    line: "https://XXXXXX.com",
  };
  return (
    <div className="text-primary p-5 lg:w-[60%] mx-auto my-[100px] leading-7 min-h-[500px] animate-fade-in-up ">
      <h3 className="text-3xl pb-5">Contact</h3>
      <p>{t("contact.company")}</p>
      <p>{t("contact.vat", { vat: contactInfo.vat })}</p>
      <p>{t("contact.phone", { phone: contactInfo.phone })}</p>
      <p>{t("contact.address", { address: contactInfo.address })}</p>
      <p>{t("contact.email", { email: contactInfo.email })}</p>
      <p>{t("contact.line", { line: contactInfo.line })}</p>
      <p>{t("contact.message1")}</p>
      <p>{t("contact.message2")}</p>
      <p>{t("contact.message3")}</p>
      <p>{t("contact.thankyou")}</p>
    </div>
  );
}
