import InputField from "@/component/InputField";
import type { CustomerData, FormValues } from "@/types";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function CustomerSection({
  register,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<CustomerData>;
}) {
  const { t } = useTranslation();

  const customerFields = [
    {
      name: "customerName",
      label: t("form.customerName.label"),
      placeholder: t("form.customerName.placeholder"),
    },
    {
      name: "email",
      label: t("form.email.label"),
      placeholder: t("form.email.placeholder"),
      type: "email",
    },
    {
      name: "phone",
      label: t("form.phone.label"),
      placeholder: t("form.phone.placeholder"),
      type: "tel",
    },
    {
      name: "birthday",
      label: t("form.birthday.label"),
      type: "date",
    },
  ];

  return (
    <div className="border p-6 rounded">
      <h3 className="text-lg font-semibold mb-4">
        {t("form.customerSectionTitle")}
      </h3>

      {customerFields.map((field) => (
        <InputField
          key={field.name}
          name={`customerData.${field.name}` as const}
          label={field.label}
          placeholder={field.placeholder}
          type={field.type}
          register={register}
          error={errors[field.name as keyof CustomerData]?.message}
        />
      ))}

      <label className="block mt-4 mb-1">{t("form.orderNote.label")}</label>
      <textarea
        className="form-input w-full px-3 py-2"
        rows={3}
        placeholder={t("form.orderNote.placeholder")}
        {...register("customerData.orderNote")}
      />
    </div>
  );
}
