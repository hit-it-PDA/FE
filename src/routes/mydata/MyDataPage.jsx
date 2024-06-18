import React, { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar";
import MyDataAgree from "../../components/common/mydata/MyDataAgree";
import MyDataChoose from "../../components/common/mydata/MyDataChoose";
import MyDataPhone from "../../components/common/mydata/MyDataPhone";
import MyDataNumber from "../../components/common/mydata/MyDataNumber";

export default function MyDataPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 5;

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
    <div className="flex flex-col items-center mt-[3vh] mb-[10vh]">
      <ProgressBar page={page} totalPages={totalPages} className={` h-full`} />
      {renderPage()}
    </div>
  );
}
