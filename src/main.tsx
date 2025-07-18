import App from "@/App.jsx";
import ScrollToTop from "@/component/ScrollToTop";
import "@/i18n";
import "@/index.css";
import { store } from "@/store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop /> {/* 切路由，至最上面 */}
      <App />
    </BrowserRouter>
  </Provider>
);
