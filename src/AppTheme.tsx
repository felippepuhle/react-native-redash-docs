import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

import { THEME } from "src/styles"

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    display: flex;
  }
  body {
    margin: 0;
    flex: 1;
    display: flex;
    max-width: 100%;
  }

  #___gatsby {
    position: relative;
    width: 100%;
    min-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  a {
    transition: color 150ms;
    color: ${({ theme }) => theme.colors.MAIN};

    &:hover {
      color: ${({ theme }) => theme.colors.MAIN_LIGHT};
    }
  }

  h1 {
    padding-left: 8px;
    border-left: 4px solid ${({ theme }) => theme.colors.MAIN};
  }

  * {
    font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    color: #24292e;
    box-sizing: border-box;
    box-shadow: none;
    outline: none;
  }
`

const AppTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={THEME}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default AppTheme
