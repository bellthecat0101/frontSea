// hooks/useOrderForm.ts
import { tradeApi } from "@/api/trade";
import type { FormValues, Order, OrderItem } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

export function useOrderForm(cartItems: OrderItem[]) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const schema = yup.object().shape({
    customerData: yup.object({
      customerName: yup.string().required(t("valid.customerName")),
      email: yup
        .string()
        .email(t("valid.email.invalid"))
        .required(t("valid.email.required")),
      phone: yup.string().required(t("valid.phone")),
    }),
    shippingData: yup.object({
      shippingName: yup.string().required(t("valid.shippingName")),
      shippingPhone: yup.string().required(t("valid.shippingPhone")),
      deliveryMethod: yup.string().required(t("valid.deliveryMethod")),
      paymentMethod: yup.string().required(t("valid.paymentMethod")),
    }),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const same = watch("shippingData.sameAsCustomer");
  const custName = watch("customerData.customerName");
  const custPhone = watch("customerData.phone");

  useEffect(() => {
    if (same) {
      setValue("shippingData.shippingName", custName);
      setValue("shippingData.shippingPhone", custPhone);
    }
  }, [same, custName, custPhone, setValue]);

  const onSubmit = async (formData: FormValues) => {
    setLoading(true);
    setSubmitError(null);
    const payload: Order = {
      customerData: formData.customerData,
      shippingData: formData.shippingData,
      cartItems,
      totalAmount: 10,
      createdTime: new Date().toISOString(),
    };

    try {
      await tradeApi.addOrder(payload);
      reset();
    } catch (error: any) {
      setSubmitError(error.message || "未知錯誤");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loading,
    submitError,
  };
}
