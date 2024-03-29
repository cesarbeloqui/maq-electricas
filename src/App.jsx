
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import darkTheme from "./theme";
import DiagramaDeKapp from "./components/DiagramaDeKapp";
import { ThemeProvider } from "@mui/material";





function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <DiagramaDeKapp/>
    </ThemeProvider>
  );
}



export default App;
