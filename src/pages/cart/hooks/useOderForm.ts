// hooks/useOrderForm.ts
import { tradeApi } from "@/api/trade";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { clearCart, total } from "@/store/slice/cartSlice";
import type { FormValues, Order, OrderItem } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import * as yup from "yup";

export function useOrderForm(cartItems: OrderItem[]) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const sum = useAppSelector(total);

  const schema = yup.object().shape({
    customerData: yup.object({
      customerName: yup.string().required(t("valid.customerName")),
      email: yup
        .string()
        .email(t("valid.email.invalid"))
        .required(t("valid.email.required")),
      phone: yup.string().matches(/^09\d{8}$/, t("valid.phone.invalid")).required(t("valid.phone")),
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
      totalAmount: sum,
      createdTime: Date.now(),
    };
    try {
      const res = await tradeApi.addOrder(payload);
      const orderId = res.data.id;
      if (orderId) {
        reset();
        dispatch(clearCart());
        navigate(`/orderRecords/${orderId}`);
      }
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
