import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../routes/MainLayout";

// pages
import HomePage from "../routes/home/HomePage";
import ManagePage from "../routes/manage/ManagePage";
import AssetPage from "../routes/asset/AssetPage";
import MorePage from "../routes/more/MorePage";
import LoginPage from "../routes/login/LoginPage";
import SignUpPage from "../routes/signup/SignUpPage";
import NotificationPage from "../routes/notification/NotificationPage";
import MyDataPage from "../routes/mydata/MyDataPage";
import MyDataMainPage from "../routes/mydata/MyDataMainPage";
import MyDataEndPage from "../routes/mydata/MyDataEndPage";
import PortfolioDetailPage from "../routes/home/PortfolioDetailPage";
import SettingPage from "../routes/setting/SettingPage";
import InvestTestMainPage from "../routes/investTest/InvestTestMainPage";
import InvestTestPage from "../routes/investTest/InvestTestPage";
import InvestTestResultPage from "../routes/investTest/InvestTestResultPage";
import RebalancingListPage from "../routes/rebalancing/RebalancingListPage";
import AccountMainPage from "../routes/account/AccountMainPage";
import AccountEndPage from "../routes/account/AccountEndPage";
import ManageDiagnosisPage from "../routes/manage/ManageDiagnosisPage";
import ManageUnclaimedPensionPage from "../routes/manage/ManageUnclaimedPensionPage";

// layouts
import HomeLayout from "../routes/home/HomeLayout";
import ManageLayout from "../routes/manage/ManageLayout";
import AssetLayout from "../routes/asset/AssetLayout";
import SettingLayout from "../routes/setting/SettingLayout";

export const mainRouter = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
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
          {
            path: "diagnosis",
            element: <ManageDiagnosisPage />,
            index: true,
          },
          {
            path: "pension",
            element: <ManageUnclaimedPensionPage />,
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
        path: "/setting",
        element: <SettingLayout />,
        children: [
          {
            path: "",
            element: <SettingPage />,
            index: true,
          },
          {
            path: "rebalancing-list",
            element: <RebalancingListPage />,
            index: true,
          },
        ],
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
        element: <MyDataEndPage />,
      },
    ],
  },
  {
    path: "invest-test",
    children: [
      {
        path: "",
        element: <InvestTestMainPage />,
      },
      {
        path: "start",
        element: <InvestTestPage />,
      },
      {
        path: "result",
        element: <InvestTestResultPage />,
      },
    ],
  },
  {
    path: "notification",
    element: <NotificationPage />,
  },
  {
    path: "account-create",
    children: [
      {
        path: "",
        element: <AccountMainPage />,
      },
      {
        path: "end",
        element: <AccountEndPage />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRouter);
export default router;
