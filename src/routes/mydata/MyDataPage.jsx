import React, { useState, useEffect } from "react";
import ProgressBar from "../../components/common/ProgressBar";
import MyDataAgree from "../../components/mydata/MyDataAgree";
import MyDataChoose from "../../components/mydata/MyDataChoose";
import MyDataPhone from "../../components/mydata/MyDataPhone";
import MyDataNumber from "../../components/mydata/MyDataNumber";

export default function MyDataPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isSecondPage, setIsSecondPage] = useState(false);
  const totalPages = 5;
  const progress = (page / totalPages) * 100;

  const handleNextPage = () => {
    setPage(page + 1);
  };
  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <MyDataChoose
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
            handleButtonClick={handleNextPage}
          />
        );
      case 2:
        return (
          <MyDataAgree
            selectedItems={selectedItems}
            handleButtonClick={handleNextPage}
          />
        );
      case 3:
        return <MyDataPhone handleButtonClick={handleNextPage} />;
      case 4:
        return <MyDataNumber />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center mt-[3vh]">
      <ProgressBar page={page} totalPages={totalPages} className={` h-full`} />
      {renderPage()}
    </div>
  );
}
