// api/trade.ts
import type { Order } from "@/types";
import api from "./index";

export const tradeApi = {
  addOrder: (data: Order) => api.post("/addOrder", data),
  orderList: ({ id }: { id: string }) => api.get<Order>(`/addOrder/${id}`),
};
