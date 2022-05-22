import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    accent-color: ${({ theme }) => theme.colors.primary};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    -webkit-font-smoothing: antialiased;
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  body, input, textarea, button { 
    font-family: ${({ theme }) => theme.font.family.main};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
