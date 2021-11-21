import {StyledMain} from './styles'
import logo from '../../assests/images/logo-branco.png'

const Main = () => {
  return (
    <StyledMain>
      <h2><img src={logo}  alt="Logo Barbearia Alura"/></h2>

      <div class="conteudo">
        <p>Barbearia Alura REACT</p>
        <p>Localizada no coração da cidade a Barbearia Alura traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.</p>
        <p className="pCor">Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos clientes".</p>
        <p>Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.</p>
      </div>
    </StyledMain>
  );
};

export { Main };
