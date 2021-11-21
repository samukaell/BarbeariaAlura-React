import {StyledHeader} from './styles'
import logo from '../../assests/images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <div className="caixa">
        <img src={logo} />
        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/formulario">Contatos</Link></li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export { Header };
