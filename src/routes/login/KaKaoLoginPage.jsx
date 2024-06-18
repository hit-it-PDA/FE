import React, { useState, useEffect } from "react";
import { kakaoLogin } from "../../lib/apis/userApi";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/userStore";

export default function KaKaoLoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { setUser } = useUserStore();

  let code = new URL(window.location.href).searchParams.get("code");

  const reqkakaoLogin = async (code) => {
    const response = await kakaoLogin(code);
    if (response.status === 200) {
      const userInfo = response.data.response.userInfo;
      setUser(userInfo);
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    reqkakaoLogin(code).finally(() => {
      setLoading(false);
    });
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      ) : (
        <div>로그인중입니다.</div>
      )}
    </div>
  );
}
