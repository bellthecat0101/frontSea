import AppRouter from "./routes";

import Menu from "../src/component/Menu";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <Menu />
      <hr />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
