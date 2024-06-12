import React, { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import AccountAgree from "../../components/common/account/AccountAgree";
import AccountInformation from "../../components/common/account/AccountInformation";
import AccountNumber from "../../components/common/account/AccountNumber";
import AccountPhone from "../../components/common/account/AccountPhone";
import AccountPwd from "../../components/common/account/AccountPwd";
import useInput from "../../hooks/useInput";

export default function AccountMainPage() {
  const [page, setPage] = useState(1);
  const [name, onChangeName] = useInput("");
  const [ssn, onChangeSsn] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [address, onChangeAddress] = useInput("");
  const [job, onChangeJob] = useInput("");
  const [purpose, onChangePurpose] = useInput("");
  const [source, onChangeSource] = useInput("");
  const [isOwner, onChangeIsOwner] = useState(0);

  const handleNextPage = () => {
    setPage(page + 1);
  };
  console.log(job);
  console.log(isOwner);
  const totalPages = 6;
  const renderPage = () => {
    switch (page) {
      case 1:
        return <AccountAgree handleNextPage={handleNextPage} />;
      case 2:
        return (
          <AccountInformation
            handleNextPage={handleNextPage}
            onChangeName={onChangeName}
            onChangeSsn={onChangeSsn}
            onChangeEmail={onChangeEmail}
            onChangeAddress={onChangeAddress}
            onChangeJob={onChangeJob}
            onChangePurpose={onChangePurpose}
            onChangeSource={onChangeSource}
            onChangeIsOwner={onChangeIsOwner}
          />
        );
      case 3:
        return <AccountPhone handleNextPage={handleNextPage} />;
      case 4:
        return <AccountNumber handleNextPage={handleNextPage} />;
      case 5:
        return <AccountPwd handleNextPage={handleNextPage} />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col items-center mt-[3vh]">
      <ProgressBar page={page} totalPages={totalPages} className={"h-full"} />
      {renderPage()}
    </div>
  );
}
