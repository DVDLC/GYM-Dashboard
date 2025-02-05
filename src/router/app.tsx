import { Route, Routes } from "react-router-dom";
import { DashboardRoutes } from "../dashboard/routes/Dashboard";
import { AuthRoutes } from "../auth/routes/Auth";
import { ROUTES } from "../common/constants";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.AUTH.PATH} element={<AuthRoutes />} />
      <Route path={ROUTES.DASHBOARD.PATH} element={<DashboardRoutes />} />
    </Routes>
  );
};
