import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../routes/MainLayout";

// page
import HomePage from "../routes/home/HomePage";
import PortfolioPage from "../routes/portfolio/PortfolioPage";
import AssetPage from "../routes/asset/AssetPage";
import MorePage from "../routes/more/MorePage";
import LoginPage from "../routes/login/LoginPage";

export const mainRouter = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
        index: true,
      },
      {
        path: "/asset",
        element: <AssetPage />,
        index: true,
      },
      {
        path: "/more",
        element: <MorePage />,
        index: true,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(mainRouter);
export default router;
