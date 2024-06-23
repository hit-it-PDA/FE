import React from "react";
import { useState } from "react";

// components
import Input from "../../Input";
import SelectComponent from "./SelectComponent";

export default function DiagnosisSecond({
  receive,
  setReceive,
  receiveValid,
  setReceivedValid,
  estate,
  setEstate,
  estateValid,
  setEstateValid,
  asset,
  setAsset,
  assetValid,
  setAssetValid,
  returns,
  setReturns,
  returnsValid,
  setReturnsValid,
  handleChange,
  handleBlur,
}) {
  return (
    <div>
      <span className="text-[25px] font-bold">재무 준비 실천 행위</span>
      <div className="flex flex-col gap-3 mt-5">
        <Input
          placeholder={"0~1000 이내의 숫자를 입력해주세요."}
          onChange={(e) =>
            handleChange(e, setReceive, setReceivedValid, 0, 1000)
          }
          onBlur={() =>
            handleBlur(0, 1000, receive, setReceive, setReceivedValid)
          }
          value={receive}
        >
          국민연금 예상 수령액을 입력해주세요. (단위: 만원)
        </Input>
        {!receiveValid ? (
          <p className="w-full ml-3 text-sm text-red-500">
            0 이상 1000 이하의 숫자만 입력해주세요!
          </p>
        ) : null}
        <span className="text-[13px] text-[#505050] whitespace-pre-line">
          {`국민연금 20년 이상 가입자의 월 평균 수령액은 103만원입니다. (국민연금공단, 2023년 1월 기준) 
            본인이 확인한 예상 수령 금액을 입력해주세요.`}
        </span>
        <Input
          placeholder={"0~100000 이내의 숫자를 입력해주세요."}
          onChange={(e) =>
            handleChange(e, setEstate, setEstateValid, 0, 100000)
          }
          onBlur={() =>
            handleBlur(0, 100000, estate, setEstate, setEstateValid)
          }
          value={estate}
        >
          월세가 나오거나 노후에 주택연금 등을 이용해 생활비로 쓸 부동산
          금액(시세) 총액을 입력해주세요. (단위: 만원)
        </Input>
        {!estateValid ? (
          <p className="w-full ml-3 text-sm text-red-500">
            0 이상 100000 이하의 숫자만 입력해주세요!
          </p>
        ) : null}
        <span className="text-[25px] font-bold mt-3">재무 상태</span>
        <Input
          placeholder={"0~50 이내의 숫자를 입력해주세요."}
          onChange={(e) => handleChange(e, setAsset, setAssetValid, 0, 50)}
          onBlur={() => handleBlur(0, 50, asset, setAsset, setAssetValid)}
          value={asset}
        >
          금융자산 총액을 입력해주세요. (부동산을 제외한 예금 등) (단위: 억원)
        </Input>
        {!assetValid ? (
          <p className="w-full ml-3 text-sm text-red-500">
            0 이상 50 이하의 숫자만 입력해주세요!
          </p>
        ) : null}
        <Input
          placeholder={"0~20 이내의 숫자를 입력해주세요."}
          onChange={(e) => handleChange(e, setReturns, setReturnsValid, 0, 20)}
          onBlur={() => handleBlur(0, 20, returns, setReturns, setReturnsValid)}
          value={returns}
        >
          예상 투자 수익률을 입력해주세요. (단위: %)
        </Input>
        {!returnsValid ? (
          <p className="w-full ml-3 text-sm text-red-500">
            0 이상 20 이하의 숫자만 입력해주세요!
          </p>
        ) : null}
      </div>
    </div>
  );
}
