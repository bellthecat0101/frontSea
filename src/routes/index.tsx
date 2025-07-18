// src/routes/AppRouter.jsx
import About from "@/pages/About";
import Cart from "@/pages/cart";
import Contact from "@/pages/Contact";
import Home from "@/pages/home/Home";
import ProductDetail from "@/pages/products/ProductDetail";
import Products from "@/pages/products/Products";
import Login from "@/pages/user/Login";
import { Route, Routes } from "react-router-dom";
import OrderRecords from "@/pages/user/OrderRecords"
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* 首頁 */}
      <Route path="/about" element={<About />} /> 
      <Route path="/products" element={<Products />} />
      <Route path="/productDetail/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/orderRecords/:id" element={<OrderRecords />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
