import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../routes/MainLayout";

// page
import HomePage from "../routes/home/HomePage";
import PortfolioPage from "../routes/portfolio/PortfolioPage";
import AssetPage from "../routes/asset/AssetPage";
import MorePage from "../routes/more/MorePage";
import LoginPage from "../routes/login/LoginPage";
import SignUpPage from "../routes/signup/SignUpPage";
import TopBar from "../components/common/topBar/TopBar";
import NotificationPage from "../routes/notification/NotificationPage";
import MyDataPage from "../routes/mydata/MyDataPage";
import MyDataMainPage from "../routes/mydata/MyDataMainPage";
import MyDataEndPage from "../routes/mydata/MyDataEndPage";

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
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "mydata",
    children: [
      {
        path: "",
        element: <MyDataMainPage />,
      },
      {
        path: "start",
        element: <MyDataPage />,
      },
      {
        path: "end",
        element: <MyDataEndPage />
      }
    ],
  },
];

const router = createBrowserRouter(mainRouter);
export default router;
