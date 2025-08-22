import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { routeTree } from "./routeTree.gen";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Shippori Mincho", serif',
  },
});

// APIサーバーのURL
//const API_URL = "http://127.0.0.1:5000";

export default function App() {
  const router = createRouter({
    routeTree,
    context: { haveSession: false },
    scrollRestoration: true,
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ThemeProvider>
  );
}
