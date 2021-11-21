import styled from "styled-components";


const StyledServicos = styled.main`
   {
    width: 940px;
    margin: 0 auto;

    padding-top: 50px;
    padding-bottom: 50px;
  }

  h2 {
    font-size: 30px;
    font-weight: bold;
  }

  .produto-descrisao {
    font-size: 18px;
  }

  .produto-preco {
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
  }

  li {
    display: inline-block;

    vertical-align: top;
    /*centralizando o texto dentro do li*/
    text-align: center;

    width: 30%;

    margin: 0 1.5%;

    padding: 30px 20px;
    box-sizing: border-box;

    border-color: black;
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
  }

  li:hover {
    border-color: #b0473b;
  }

  .produtos li:hover h2 {
    font-size: 34px;
  }

  li:active {
    color: #b0473b;
  }
`;
export { StyledServicos };
