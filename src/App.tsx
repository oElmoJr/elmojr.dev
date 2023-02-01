import AppRoutes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRoutes toggleTheme={toggleTheme} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
