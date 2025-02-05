import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/app";
import { AppTheme } from "./theme/AppTheme";

export const DashboardApp = () => {
  return (
    <AppTheme>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppTheme>
  );
};
