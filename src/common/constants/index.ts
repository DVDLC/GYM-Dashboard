import { Login } from "../../auth/pages/Login";
import { SignUp } from "../../auth/pages/SignUp";
import { Home } from "../../dashboard/pages/Home";

export const ROUTES = {
  INIT: {
    ROUTE: "/*",
  },
  AUTH: {
    ROUTE: "auth",
    PATH: "/auth/*",
    LOGIN: {
      ROUTE: "login",
      CHILDREN: Login,
    },
    SIGNUP: {
      ROUTE: "signup",
      CHILDREN: SignUp,
    },
  },
  DASHBOARD: {
    ROUTE: "dashboard",
    PATH: "/dashboard/*",
    HOME: {
      ROUTE: "home",
      CHILDREN: Home,
    },
  },
};
