import "./styles/reset.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Contatos } from "./components/Contatos";

function Formulario() {
  return (
    <div className="Formulario">
      <Header />
      <Contatos/>
      <Footer />
    </div>
  );
}

export default Formulario;