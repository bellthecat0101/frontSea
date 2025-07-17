// api/products.ts
import type { Product } from "@/types";
import api from "./index";
export const productApi = {
  getProducts: () => api.get<Product[]>("/product"),
  getProductById: (id: number) => api.get<Product>(`/product/${id}`),
};
