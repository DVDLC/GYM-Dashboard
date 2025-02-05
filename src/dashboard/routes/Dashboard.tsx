import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../common/constants";

export const DashboardRoutes = () => {
  const { DASHBOARD, INIT } = ROUTES;
  const defaultRoute = `/${DASHBOARD.ROUTE}/${DASHBOARD.HOME.ROUTE}`;
  return (
    <Routes>
      <Route
        path={DASHBOARD.HOME.ROUTE}
        element={<DASHBOARD.HOME.CHILDREN />}
      />

      <Route path={INIT.ROUTE} element={<Navigate to={defaultRoute} />} />
    </Routes>
  );
};
