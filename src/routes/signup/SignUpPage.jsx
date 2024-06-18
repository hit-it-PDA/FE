import React from "react";
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
  const [ssn, onChangeSsn] = useInput("");
  const [sex, onChangeSex] = useInput("");
  const [number, onChangeNumber] = useInput("");

  const navigate = useNavigate();

  const SignUpClick = async (e) => {
    e.preventDefault();
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
        <Input
          type={"email"}
          value={email}
          placeholder={"ex. gildong@gmail.com"}
          onChange={onChangeEmail}
        >
          이메일을 입력하세요
        </Input>
        <Input
          type={"text"}
          value={name}
          placeholder={"ex. 홍길동"}
          onChange={onChangeName}
        >
          이름을 입력하세요
        </Input>
        <Input type={"password"} onChange={onChangePwd}>
          비밀번호를 입력하세요
        </Input>
        <div className="flex flex-col w-[90vw]">
          <p className="mb-[1vh]">주민번호를 입력하세요</p>
          <div className="flex flex-row items-center">
            <input
              className={`bg-white w-[30vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh]`}
              onChange={onChangeSsn}
              placeholder="ex. 980629"
              type="number"
              value={ssn}
            ></input>
            <p>&ensp;&ensp;-&ensp;&ensp;</p>
            <input
              className={`bg-white w-[9vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh]`}
              onChange={onChangeSex}
              type="number"
              value={sex}
            ></input>
            <p className="text-lg tracking-wider text-gray-400">&nbsp;XXXXXX</p>
          </div>
        </div>
        <Input
          type={"text"}
          placeholder={"ex) 010-0000-0000"}
          onChange={onChangeNumber}
          value={number}
        >
          전화번호를 입력하세요
        </Input>
      </div>
      <div className="flex flex-row justify-center">
        <Button className={"w-[90vw] mt-[4vh]"} onClick={(e) => SignUpClick(e)}>
          회원가입
        </Button>
      </div>
    </div>
  );
}
