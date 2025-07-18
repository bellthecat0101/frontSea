// 定義商品資料的類型
export interface Product {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  img: string;
  class: string;
  description?: string;
  descriptionEn?: string;
}
// 購物車資料
export interface OrderItem {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  quantity: number;
}
// 顧客資料
export interface CustomerData {
  customerName: string;
  email: string;
  phone: string;
  birthday?: Date | null;
  orderNote?: string | null;
}
// 送貨資料
export interface ShippingData {
  sameAsCustomer?: boolean | null;
  shippingName: string;
  shippingPhone: string;
  deliveryMethod: string;
  paymentMethod: string;
}
// 顧客資料 和送貨資料 合併
export interface FormValues {
  customerData: CustomerData;
  shippingData: ShippingData;
}

// 整筆訂單
export interface Order extends FormValues {
  cartItems: OrderItem[]; // 購物車商品
  totalAmount: number;
  createdTime: number;
}
declare module "react-lazy-load-image-component";