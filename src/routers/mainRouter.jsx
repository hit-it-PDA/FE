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
import DiagnosisLayout from "../routes/manage/diagnosis/DiagnosisLayout";
import DiagnosisStartPage from "../routes/manage/diagnosis/DiagnosisStartPage";
import ManageUnclaimedPensionPage from "../routes/manage/unclaimedPension/ManageUnclaimedPensionPage";
import AssetAllPage from "../routes/asset/AssetAllPage";
import AssetPortfolio from "../routes/asset/AssetPortfolio";
import DiagnosisResultPage from "../routes/manage/diagnosis/DiagnosisResultPage";
import PensionAccountListPage from "../routes/manage/unclaimedPension/PensionAccountListPage";
import PensionApplyInfoPage from "../routes/manage/unclaimedPension/PensionApplyInfoPage";
import KaKaoLoginPage from "../routes/login/KaKaoLoginPage";
import FundDetailPage from "../routes/home/FundDetailPage";
import InvestTestUserResultPage from "../routes/investTest/InvestTestUserResultPage";
import ManageDiagnosisPage from "../routes/manage/diagnosis/ManageDiagnosisPage";

// layouts
import HomeLayout from "../routes/home/HomeLayout";
import ManageLayout from "../routes/manage/ManageLayout";
import AssetLayout from "../routes/asset/AssetLayout";
import SettingLayout from "../routes/setting/SettingLayout";
import UnclaimedPensionLayout from "../routes/manage/unclaimedPension/UnclaimedPensionLayout";

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
            path: "detail/all/:portfolioId",
            element: <PortfolioDetailPage />,
            index: true,
          },
          {
            path: "detail/all/:portfolioId/:fundId",
            element: <FundDetailPage />,
            index: true,
          },
          {
            path: "detail/:portfolioId",
            element: <PortfolioDetailPage />,
            index: true,
          },
          {
            path: "detail/:portfolioId/:fundId",
            element: <FundDetailPage />,
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
            element: <DiagnosisLayout />,
            children: [
              {
                path: "",
                element: <DiagnosisStartPage />,
                index: true,
              },
              {
                path: "test",
                element: <ManageDiagnosisPage />,
                index: true,
              },
              {
                path: "result",
                element: <DiagnosisResultPage />,
                index: true,
              },
            ],
          },
          {
            path: "pension",
            element: <UnclaimedPensionLayout />,
            children: [
              {
                path: "",
                element: <ManageUnclaimedPensionPage />,
                index: true,
              },
              {
                path: "list",
                element: <PensionAccountListPage />,
                index: true,
              },
              {
                path: "apply-info",
                element: <PensionApplyInfoPage />,
                index: true,
              },
            ],
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
          {
            path: "all",
            element: <AssetAllPage />,
            index: true,
          },
          {
            path: "portfolio",
            element: <AssetPortfolio />,
            index: true,
          },
        ],
      },
      {
        path: "/more",
        element: <MorePage />,
        index: true,
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
    index: true,
  },
  {
    path: "login/kakao",
    element: <KaKaoLoginPage />,
    index: true,
  },
  {
    path: "signup",
    element: <SignUpPage />,
    index: true,
  },
  {
    path: "mydata",
    children: [
      {
        path: "",
        element: <MyDataMainPage />,
        index: true,
      },
      {
        path: "start",
        element: <MyDataPage />,
        index: true,
      },
      {
        path: "end",
        element: <MyDataEndPage />,
        index: true,
      },
    ],
  },
  {
    path: "invest-test",
    children: [
      {
        path: "",
        element: <InvestTestMainPage />,
        index: true,
      },
      {
        path: "start",
        element: <InvestTestPage />,
        index: true,
      },
      {
        path: "result",
        element: <InvestTestResultPage />,
        index: true,
      },
      {
        path: "user-result",
        element: <InvestTestUserResultPage />,
        index: true,
      },
    ],
  },
  {
    path: "notification",
    element: <NotificationPage />,
    index: true,
  },
  {
    path: "account-create",
    children: [
      {
        path: "",
        element: <AccountMainPage />,
        index: true,
      },
      {
        path: "end",
        element: <AccountEndPage />,
        index: true,
      },
    ],
  },
];

const router = createBrowserRouter(mainRouter);
export default router;
