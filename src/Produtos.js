import "./styles/reset.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Servicos } from "./components/Servicos";

function Produtos() {
  return (
    <div className="Produtos">
      <Header />
      <Servicos/>
      <Footer />
    </div>
  );
}

export default Produtos;
