import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: gray;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 235px;

  nav {
    position: absolute;
    top: 110px;
    right: 0;
  }
  nav li {
    display: inline;

    margin-right: 15px;
  }

  nav a {
    text-transform: uppercase;

    font-weight: bold;
    font-size: 22px;
    text-decoration: none;
    color: black;
  }

  nav a:hover {
    color: white;
    text-decoration: underline;
  }
`;
export { StyledHeader };
