import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// icons
import asset from "../../../assets/icons/asset.svg";
import manage from "../../../assets/icons/manage.svg";
import home from "../../../assets/icons/home.svg";
import more from "../../../assets/icons/more.svg";
import asset_selected from "../../../assets/icons/asset_selected.svg";
import manage_selected from "../../../assets/icons/manage_selected.svg";
import home_selected from "../../../assets/icons/home_selected.svg";
import more_selected from "../../../assets/icons/more_selected.svg";

export default function BottomTab() {
  const [isSelected, setSelected] = useState("홈");
  return (
    <div className="w-screen h-[7vh] flex flex-row items-center justify-around bottom-0 fixed bg-white">
      <Tab
        img={home}
        imgSelected={home_selected}
        title="홈"
        setSelected={setSelected}
        isSelected={isSelected === "홈"}
      />
      <Tab
        img={asset}
        imgSelected={asset_selected}
        title="자산"
        setSelected={setSelected}
        isSelected={isSelected === "자산"}
      />
      <Tab
        img={manage}
        imgSelected={manage_selected}
        title="노후"
        setSelected={setSelected}
        isSelected={isSelected === "노후"}
      />
      <Tab
        img={more}
        imgSelected={more_selected}
        title="더보기"
        setSelected={setSelected}
        isSelected={isSelected === "더보기"}
      />
    </div>
  );
}

const Tab = ({ img, imgSelected, title, setSelected, isSelected }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabs = {
    홈: "",
    노후: "manage",
    자산: "asset",
    더보기: "more",
  };
  useEffect(() => {
    if (location.pathname === "/") {
      setSelected("홈");
    } else if (location.pathname.includes("more")) {
      setSelected("더보기");
    } else if (location.pathname.includes("asset")) {
      setSelected("자산");
    } else if (location.pathname.includes("manage")) {
      setSelected("노후");
    }
  }, [location.pathname, setSelected]);

  const onClickFn = () => {
    navigate(`/${tabs[title]}`);
  };
  return (
    <div
      className="relative flex flex-col items-center w-fit"
      onClick={() => onClickFn()}
    >
      <img src={isSelected ? imgSelected : img} className="flex-1 h-full" />
      <span
        className={`text-base font-semibold ${
          isSelected ? "text-[#3F51B5]" : "black"
        }`}
      >
        {title}
      </span>
    </div>
  );
};
