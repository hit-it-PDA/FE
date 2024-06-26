import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TopBar from "../../components/common/topBar/TopBar";
import useInput from "../../hooks/useInput";
import { signUp } from "../../lib/apis/userApi";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [pwd, onChangePwd] = useInput("");
  const [ssn, setSsn] = useState("");
  const [sex, setSex] = useState("");
  const [number, onChangeNumber] = useInput("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSsnValid, setIsSsnValid] = useState(true);
  const [isSexValid, setIsSexValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const navigate = useNavigate();

  const validateName = (name) => {
    const nameRegex = /^[가-힣]+$/;
    return nameRegex.test(name);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
  };

  const validateSsn = (ssn) => {
    return ssn.length === 6 && /^\d+$/.test(ssn);
  };

  const validateSex = (sex) => {
    return sex.length === 1 && /^[1-4]$/.test(sex);
  };


  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    onChangeName(e);
    setIsNameValid(validateName(nameValue));
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    onChangeEmail(e);
    setIsEmailValid(validateEmail(emailValue));
  };

  const handleSsnChange = (e) => {
    const ssnValue = e.target.value;
    setSsn(ssnValue);
    setIsSsnValid(validateSsn(ssnValue));
  };

  const handleSexChange = (e) => {
    const sexValue = e.target.value;
    setSex(sexValue);
    setIsSexValid(validateSex(sexValue));
  };

  const handleNumberChange = (e) => {
    const numberValue = e.target.value;
    onChangeNumber(e);
  };

  const SignUpClick = async (e) => {
    e.preventDefault();
    if (!isEmailValid) {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (!isSsnValid) {
      window.alert("주민번호 앞자리가 올바르지 않습니다.");
      return;
    }
    if (!isSexValid) {
      window.alert("주민번호 뒷자리가 올바르지 않습니다.");
      return;
    }
    if (!isNameValid) {
      window.alert("이름 형식이 올바르지 않습니다.");
      return;
    }
    const fullSsn = `${ssn}-${sex}`;
    const reqBody = {
      name,
      email,
      password: pwd,
      resident_number: fullSsn,
      phone: number,
    };
    const response = await signUp(reqBody);
    const status_code = response.status;
    if (status_code === 409) {
      window.alert("가입된 이메일입니다.");
    } else if (status_code === 400) {
      window.alert("이메일, 이름, 비밀번호, 주민등록번호를 확인해주세요.");
    } else if (status_code === 200) {
      navigate("/login");
    }
  };

  return (
    <div>
      <TopBar type={2} />
      <p className="text-2xl font-bold mt-[6vh] ml-[5vw] mb-[2vh]">
        어서오세요
        <br />
        인적정보를 입력해주세요.
      </p>
      <div className="flex flex-col items-center gap-3">
        <div>
          <Input
            type={"email"}
            value={email}
            placeholder={"ex. gildong@gmail.com"}
            onChange={handleEmailChange}
          >
            이메일을 입력하세요
          </Input>
          {!isEmailValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              이메일 형식에 맞춰주세요
            </p>
          )}
        </div>
        <div>
          <Input
            type={"text"}
            value={name}
            placeholder={"ex. 홍길동"}
            onChange={handleNameChange}
          >
            이름을 입력하세요
          </Input>
          {!isNameValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              실명을 사용해주세요
            </p>
          )}
        </div>

        <Input type={"password"} onChange={onChangePwd}>
          비밀번호를 입력하세요
        </Input>
        <div className="flex flex-col w-[90vw]">
          <p className="mb-[1vh]">주민번호를 입력하세요</p>
          <div className="flex flex-row items-center">
            <input
              className={`bg-white w-[30vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh] ${
                !isSsnValid && "border-red-500"
              }`}
              onChange={handleSsnChange}
              placeholder="ex. 980629"
              type="number"
              value={ssn}
            ></input>
            <p>&ensp;&ensp;-&ensp;&ensp;</p>
            <input
              className={`bg-white w-[9vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh] ${
                !isSexValid && "border-red-500"
              }`}
              onChange={handleSexChange}
              type="number"
              value={sex}
            ></input>
            <p className="text-lg tracking-wider text-gray-400">&nbsp;XXXXXX</p>
          </div>
          {!isSsnValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              주민번호 앞자리는 6자리 숫자여야 합니다.
            </p>
          )}
          {!isSexValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              주민번호 뒷자리 첫 번째 숫자는 1~4 사이여야 합니다.
            </p>
          )}
        </div>
        <div>
          <Input
            type={"text"}
            placeholder={"ex) 010-1234-1234"}
            onChange={handleNumberChange}
            value={number}
          >
            전화번호를 입력하세요
          </Input>
          {!isNumberValid && (
            <p className="w-full ml-1 text-sm text-red-500">
              전화번호 11자리를 입력하세요.
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Button className={"w-[90vw] mt-[4vh]"} onClick={(e) => SignUpClick(e)}>
          회원가입
        </Button>
      </div>
    </div>
  );
}
