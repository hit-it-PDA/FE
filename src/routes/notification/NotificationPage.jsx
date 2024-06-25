import React, { useEffect, useState } from "react";
// components
import TopBar from "../../components/common/topBar/TopBar";
import NotificationListComponent from "../../components/notification/NotificationListComponent";
// apis
import {
  getNotification,
  postNotification,
} from "../../lib/apis/notificationApi";
export default function NotificationPage() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [notifys, setNotifys] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [state, setState] = useState(false);
  const [check, setCheck] = useState([]);
  const fetchGetNotification = async () => {
    try {
      const response = await getNotification();
      console.log(response);
      setNotifys(response.response);
      setCheck(response.response.map((elem,index)=> elem.checked));
      response.response.length ? setIsEmpty(true) : setIsEmpty(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchPostNotification = async () => {
    try {
      const response = await postNotification(reqBody);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGetNotification();
  }, []);
  return (
    <div>
      <TopBar type={2} />
      <div className="flex flex-col mt-5">
        {isEmpty === true ? (
          <>
            {notifys.map((notify, index) => (
              <NotificationListComponent
                key={index}
                id={notify.id}
                date={notify.createdAt.slice(0, 10)}
                content={notify.summary}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                check={check[index]}
              />
            ))}
          </>
        ) : (
          <div className="w-full mx-auto font-bold text-center text-gray-400 border-t-[1px] py-5">
            알림이 없어요
          </div>
        )}
      </div>
    </div>
  );
}
