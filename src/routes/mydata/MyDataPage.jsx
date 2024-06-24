import React, { useState, useEffect } from "react";
// components
import ProgressBar from "../../components/ProgressBar";
import MyDataAgree from "../../components/common/mydata/MyDataAgree";
import MyDataChoose from "../../components/common/mydata/MyDataChoose";
import MyDataPhone from "../../components/common/mydata/MyDataPhone";
import MyDataNumber from "../../components/common/mydata/MyDataNumber";
// apis
import { postMydata } from "../../lib/apis/mydataApi";

export default function MyDataPage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [phone, setPhone] = useState("");
  const [selectedItemsByType, setSelectedItemsByType] = useState({
    bank_accounts: [],
    security_accounts: [],
    cards: [],
    loans: [],
    pensions: [],
  });
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const sendMydata = () => {
    fetchPostData();
  };

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
            selectedItemsByType={selectedItemsByType}
            setSelectedItemsByType={setSelectedItemsByType}
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
        return (
          <MyDataPhone handleButtonClick={handleNextPage} setPhone={setPhone} />
        );
      case 4:
        return (
          <MyDataNumber
            selectedItemsByType={selectedItemsByType}
            phone={phone}
          />
        );
      default:
        return null;
    }
  };
  console.log(selectedItemsByType);
  return (
    <div className="flex flex-col items-center mt-[3vh] mb-[10vh]">
      <ProgressBar page={page} totalPages={totalPages} className={` h-full`} />
      {renderPage()}
    </div>
  );
}
