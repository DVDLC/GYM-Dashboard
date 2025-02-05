import { ThemeProvider } from "@emotion/react";
import { FatherComponentsI } from "../common/interfaces";
import { CssBaseline } from "@mui/material";
import { purpleTheme } from "./theme";

export const AppTheme = ({ children }: FatherComponentsI) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
