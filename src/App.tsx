import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { CyclesContextProvider } from "./contexts/CyclesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
