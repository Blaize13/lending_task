import Header from "./components/Shared/Header/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./navigation/AppRouter";
import Footer from "./components/Shared/Footer/Footer";
import { footerLinks } from "./data/footerLinks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer footerLinks={footerLinks} />
    </BrowserRouter>
  );
}

export default App;
