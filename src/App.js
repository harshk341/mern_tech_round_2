import React from "react";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/home";

const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: 'Rubik', sans-serif;
    
    --color-primary: #2A4F6D;
    --color-secondary : #F79633;
    --color-text: #212529;
  }
  body, input, textarea {
    font-family: var(--font-family);
    color: var(--color-text);
  }
  a, a:hover {
    text-decoration: none;
    color: inherit;
  }
  button,
  button:focus,
  button:active {
    outline: 0
  }
  section {
    padding: 60px 0;
    overflow: hidden;
  }
  p {
    margin-bottom: 0.8rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
