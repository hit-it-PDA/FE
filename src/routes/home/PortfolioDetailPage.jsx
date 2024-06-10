import React from "react";

// components
import PortfolioRatioComponent from "../../components/common/home/PortfolioRatioComponent";
import RecommendComponent from "../../components/common/home/RecommendComponent";
import TopBar from "../../components/common/topBar/TopBar";

export default function PortfolioDetailPage() {
  return (
    <div className="bg-white">
      <TopBar type={3} />
      <RecommendComponent type={1} />
      <PortfolioRatioComponent stockRatio={17} bondRatio={56} />
    </div>
  );
}
