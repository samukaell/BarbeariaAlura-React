import styled from "styled-components";
import homeImagem from "../../assests/images/home-imagem.jpg";

const StyledMain = styled.main`
  background-image: url(${homeImagem});
  height: 100vh;
  text-align: center;

  h2 {
    transition: 1s transform;
  }

  h2:hover {
    transform: scale(1.2);
  }

  .conteudo {
    color: white;
    font-size: 20px;
  }

  p {
    margin-top: 20px;
  }

  .pCor {
    color: #b0473b;
  }
`;
export { StyledMain };
