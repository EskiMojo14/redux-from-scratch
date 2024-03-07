import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import { TodoProvider } from "./todos/context.tsx";

const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal.A200,
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
