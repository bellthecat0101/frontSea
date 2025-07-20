import Loading from "@/component/Loading";
import Home from "@/pages/home/Home"; // 同步載入首頁
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { lazyPages } from "./lazyPages"; // 引入剛剛的 lazyPages 物件

export default function AppRouter() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<lazyPages.About />} />
        <Route path="/products" element={<lazyPages.Products />} />
        <Route
          path="/productDetail/:id"
          element={<lazyPages.ProductDetail />}
        />
        <Route path="/cart" element={<lazyPages.Cart />} />
        <Route path="/contact" element={<lazyPages.Contact />} />
        <Route path="/orderRecords/:id" element={<lazyPages.OrderRecords />} />
      </Routes>
    </Suspense>
  );
}
