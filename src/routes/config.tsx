import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("@/views/Home"));

export const useRoutesConfig = () => {
  const routes: RouteObject[] = [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "404",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ];
  return routes;
};
