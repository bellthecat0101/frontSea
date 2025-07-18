import { tradeApi } from "@/api/trade";
import Loading from "@/component/Loading";
import type { Order } from "@/types";
import { MoveLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { Info, Section } from "./components/OrderSection";
const OrderCompletePage = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        
        const res = await tradeApi.orderList({ id });
        setOrder(res.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id, t]);

  return (
    <div className="min-h-[600px]">
      {order ? (
        <div className="min-h-[600px] px-4">
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md font-noto-sans-tc text-primary mb-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-4 text-sm">
              <Link
                to="/products"
                className="flex items-center hover:underline"
              >
                <MoveLeft className="pr-2" />
                {t("orderComplete.continueShopping")}
              </Link>
              <div>
                {t("orderComplete.orderNumber")}:{" "}
                <span className="font-medium">{order.createdTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-center mb-2">
              {t("orderComplete.title")}
            </h2>
            <p className="text-sm text-center text-gray-500 mb-8">
              {t("orderComplete.thankYou")}
            </p>

            {/* Customer Info */}
            <Section title={t("orderComplete.customerData")}>
              <Info
                label={t("order.customerName")}
                value={order.customerData.customerName}
              />
              <Info label={t("order.email")} value={order.customerData.email} />
              <Info label={t("order.phone")} value={order.customerData.phone} />
            </Section>

            {/* Shipping Info */}
            <Section title={t("orderComplete.shippingData")}>
              <Info
                label={t("order.shippingName")}
                value={order.shippingData.shippingName}
              />
              <Info
                label={t("order.shippingPhone")}
                value={order.shippingData.shippingPhone}
              />
              <Info
                label={t("order.deliveryMethod")}
                value={order.shippingData.deliveryMethod}
              />
              <Info
                label={t("order.paymentMethod")}
                value={order.shippingData.paymentMethod}
              />
            </Section>

            {/* Order Items */}
            <Section title={t("orderComplete.orderItems")}>
              <ul className="list-none space-y-2">
                {order.cartItems.map((item, index) => (
                  <li key={index} className="text-gray-600">
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
            </Section>

            {/* Total */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-700">
                {t("orderComplete.totalAmount")}: ${order.totalAmount}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default OrderCompletePage;
