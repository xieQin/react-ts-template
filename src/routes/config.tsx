import { Navigate, RouteObject } from "react-router-dom";

import DesignPatternsPage from "@/views/DesignPatterns";
import HomePage from "@/views/Home";
import { TimerPage } from "@/views/Timer";

export const useRoutesConfig = () => {
  const routes: RouteObject[] = [
    {
      path: "",
      element: <HomePage />,
    },
    {
      path: "timer",
      element: <TimerPage />,
    },
    {
      path: "design-patterns",
      element: <DesignPatternsPage />,
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
