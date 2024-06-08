import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";

export default function SignUpPage() {
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [pwd, onChangePwd] = useInput("");
  const [ssn, onChangeSsn] = useInput("");
  const [number, onChangeNumber] = useInput("");

  return (
    <div>
      <p className="text-2xl font-bold mt-[10vh] ml-[5vw] mb-[2vh]">
        어서오세요
        <br />
        인적정보를 입력해주세요.
      </p>
      <div className="flex flex-col items-center gap-3">
        <Input
          type={"email"}
          placeholder={"ex) jcjin1998@gmail.com"}
          onChange={onChangeEmail}
        >
          이메일을 입력하세요
        </Input>
        <Input type={"text"} placeholder={"ex) 정찬진"} onChange={onChangeName}>
          이름을 입력하세요
        </Input>
        <Input type={"password"} onChange={onChangePwd}>
          비밀번호를 입력하세요
        </Input>
        {/* <div className="flex items-start ml-[5vw] self-start"> */}
        <div className="flex flex-col w-[90vw]">
          <p className="mb-[1vh]">주민번호를 입력하세요</p>
          <div className="flex flex-row items-center">
            <input
              className={`bg-white w-[30vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh]`}
              onChange={onChangeSsn}
              placeholder="ex) 980629"
            ></input>
            <p>&ensp;&ensp;-&ensp;&ensp;</p>
            <input
              className={`bg-white w-[5vw] h-[4vh] rounded-[1vh] border border-gray-300 px-[3vw] py-[2.5vh]`}
            ></input>
            <p className="text-lg tracking-wider text-gray-400">&nbsp;XXXXXX</p>
          </div>
        </div>
        <Input
          type={"text"}
          placeholder={"ex) 010-4737-5407"}
          onChange={onChangeNumber}
        >
          전화번호를 입력하세요
        </Input>
      </div>
      <div className="flex flex-row justify-center">
        <Button className={"w-[90vw] mt-[4vh]"}>회원가입</Button>
      </div>
    </div>
  );
}
