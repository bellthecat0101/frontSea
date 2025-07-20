import InputField from "@/component/InputField";
import SelectField from "@/component/SelectField";
import type { FormValues, ShippingData } from "@/types";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function ShippingSection({
  register,
  errors,
  sameAsCustomerError,
}: {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<ShippingData>;
  sameAsCustomerError?: string;
}) {
  const { t } = useTranslation();
  const shippingFields = [
    {
      name: "shippingName",
      label: t("shipping.name"),
      placeholder: t("shipping.namePlaceholder"),
      type: "text",
      isRequired: true
    },
    {
      name: "shippingPhone",
      label: t("shipping.phone"),
      placeholder: t("shipping.phonePlaceholder"),
      type: "tel",
      isRequired: true
    },
  ];
  return (
    <div className="border p-6 rounded">
      <h3 className="text-lg font-semibold mb-4">{t("shipping.title")}</h3>

      <label className="inline-flex items-center mb-4 text-xs">
        <input
          type="checkbox"
          className="mr-2"
          {...register("shippingData.sameAsCustomer")}
        />
        {t("shipping.sameAsCustomer")}
      </label>
      {sameAsCustomerError && (
        <p className="text-red-500 text-sm mt-1">{sameAsCustomerError}</p>
      )}

      {shippingFields.map((field) => (
        <InputField
          key={field.name}
          name={`shippingData.${field.name}` as const}
          label={field.label}
          placeholder={field.placeholder}
          type={field.type}
          register={register}
          error={errors?.[field.name as keyof ShippingData]?.message}
          required= {field.isRequired}
        />
      ))}

      <SelectField
        name="shippingData.deliveryMethod"
        label={t("shipping.deliveryMethod")}
        register={register}
        error={errors.deliveryMethod?.message}
        options={[
          { label: "7-11", value: "7-11" },
          { label: "全家", value: "family" },
        ]}
      />

      <SelectField
        name="shippingData.paymentMethod"
        label={t("shipping.paymentMethod")}
        register={register}
        error={errors.paymentMethod?.message}
        options={[
          { label: "Line Pay", value: "linepay" },
          { label: "Apple Pay", value: "applepay" },
        ]}
      />
      <span className="text-xs">*Demo站 無真實金流與門市連結</span>
    </div>
  );
}
