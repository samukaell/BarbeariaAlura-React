import logoBranco from '../../assests/images/logo-branco.png'
import { StyledFooter } from './styles';

const Footer = () => {
  return (
    
    <StyledFooter>
        <img src={logoBranco} alt="Logo da Barbearia Alura" />
        <p class="copyright">&copy; Copyright Barbearia Alura - 2019-2021</p>
    </StyledFooter>
  );
};

export { Footer };
