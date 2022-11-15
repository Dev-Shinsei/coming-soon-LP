import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  button, a {
    cursor: pointer;
    transform: scale(0.9, 0.9);
  }
  button:hover, a:hover {
    opacity: 1;
    transform: scale(1, 1);
    transition: transform 330ms ease-in-out
  }
`;
