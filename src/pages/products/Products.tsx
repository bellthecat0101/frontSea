import { productApi } from "@/api/product";

import Loading from "@/component/Loading";
import Select from "@/component/Select";
import type { Product } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductList from "./components/ProductList";

export default function Products() {
  const { t } = useTranslation();
  const classMenu = [
    { id: "all", name: t("products.categories.all") },
    { id: "1", name: t("products.categories.lab") },
    { id: "2", name: t("products.categories.museum") },
    { id: "3", name: t("products.categories.bookstore") },
    { id: "4", name: t("products.categories.doll") },
    { id: "5", name: t("products.categories.lifestyle") },
  ];
  const [selectedClass, setSelectedClass] = useState("all");
  const allProductsRef = useRef<Product[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [productKey, setKey] = useState(Date.now());
  useEffect(() => {
    productApi
      .getProducts()
      .then((res) => {
        allProductsRef.current = res.data;
        setProductList(res.data); // 顯示所有資料
      })
      .catch(() => {
        allProductsRef.current = [];
        setProductList([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const all = allProductsRef.current;
    if (selectedClass === "all") {
      setProductList(all);
    } else {
      setProductList(
        all.filter((items: Product) => items.class === selectedClass)
      );
    }
    setKey(Date.now());
  }, [selectedClass]);
  return (
    <div className="p-4 sm:p-6 md:p-10 text-primary min-h-[700px] relative">
      <section className="flex flex-col  sm:flex-row sm:justify-end sm:items-center text-sm mb-4 gap-2">
        <div className="flex items-center justify-center">
          <Select
            options={classMenu}
            value={selectedClass}
            onChange={setSelectedClass}
          />
        </div>
      </section>
      <ProductList key={productKey} items={productList} />
      <div className="text-right text-sm pt-10">
        {loading ? (
          <Loading />
        ) : (
          t("products.count", { count: productList.length })
        )}
      </div>
    </div>
  );
}
