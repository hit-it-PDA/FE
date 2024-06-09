import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../routes/MainLayout";

// pages
import HomePage from "../routes/home/HomePage";
import ManagePage from "../routes/manage/ManagePage";
import AssetPage from "../routes/asset/AssetPage";
import MorePage from "../routes/more/MorePage";
import LoginPage from "../routes/login/LoginPage";
import NotificationPage from "../routes/notification/NotificationPage";
import PortfolioDetailPage from "../routes/home/PortfolioDetailPage";

// layouts
import HomeLayout from "../routes/home/HomeLayout";
import ManageLayout from "../routes/manage/ManageLayout";
import AssetLayout from "../routes/asset/AssetLayout";

export const mainRouter = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomeLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
            index: true,
          },
          {
            path: "detail",
            element: <PortfolioDetailPage />,
            index: true,
          },
        ],
      },
      {
        path: "/manage",
        element: <ManageLayout />,
        children: [
          {
            path: "",
            element: <ManagePage />,
            index: true,
          },
        ],
      },
      {
        path: "/asset",
        element: <AssetLayout />,
        children: [
          {
            path: "",
            element: <AssetPage />,
            index: true,
          },
        ],
      },
      {
        path: "/more",
        element: <MorePage />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
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
