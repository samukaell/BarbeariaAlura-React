import styled from "styled-components";

const StyledContato = styled.main`
  width: 940px;
  margin: 0 auto;

  form {
    margin: 40px 0;
  }

  form label,
  form legend {
    display: block;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .inputPadrao {
    display: block;
    margin-bottom: 20px;
    padding: 10px 25px;
    width: 50%;
  }

  .checkbox {
    margin: 20px 0;
  }

  .enviar {
    margin: 20px 0;
    width: 40%;
    padding: 15px 0;
    border: none;
    border-radius: 5px;
    background: #b0473b;
    color: white;
    font-weight: bold;
    font-size: 18px;

    cursor: pointer;
    /*Sempre que o curso (mouse) estiver em cima do elemento mude para o pointer*/

    transition: 1s background, 1s transform;
    /*A transição de cor do fundo do botão demora um segundo de uma cor a outra*/
  }

  .enviar:hover {
    background: black;
    transform: scale(1.2);
  }

  table {
    margin: 20px 0 40px;
  }

  thead {
    background-color: #555555;
    color: white;
    font-weight: bold;
  }

  td,
  th {
    border: 1px solid black;
    padding: 8px 15px;
    transition: 1s all;
  }

  td:hover {
    transform: scale(1.2);
    background-color: black;
    color: white;
  }
`;
export { StyledContato };
