import { lazy } from 'react';

export const lazyPages = {
  About: lazy(() => import('@/pages/About')),
  Products: lazy(() => import('@/pages/products/Products')),
  ProductDetail: lazy(() => import('@/pages/products/ProductDetail')),
  Cart: lazy(() => import('@/pages/cart')),
  Contact: lazy(() => import('@/pages/Contact')),
  OrderRecords: lazy(() => import('@/pages/user/OrderRecords'))
};