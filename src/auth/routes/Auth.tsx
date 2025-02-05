import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../common/constants";

export const AuthRoutes = () => {
  const { AUTH, INIT } = ROUTES;
  const defaultRoute = `/${AUTH.ROUTE}/${AUTH.LOGIN.ROUTE}`;
  return (
    <Routes>
      <Route path={AUTH.LOGIN.ROUTE} element={<AUTH.LOGIN.CHILDREN />} />
      <Route path={AUTH.SIGNUP.ROUTE} element={<AUTH.SIGNUP.CHILDREN />} />

      <Route path={INIT.ROUTE} element={<Navigate to={defaultRoute} />} />
    </Routes>
  );
};
