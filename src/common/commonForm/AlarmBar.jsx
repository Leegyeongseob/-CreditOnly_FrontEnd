import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserEmailContext } from "../../contextapi/UserEmailProvider";
import AnnouncementAxios from "../../axiosapi/AnnouncementAxios";

const Alarm = styled.div`
  position: fixed;
  width: 250px;
  top: 7.1%;
  right: 1%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Menu = styled.div`
  width: 95%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const Title = styled.div`
  width: 100%;
  height: 35px;
  color: ${({ theme }) => theme.color};
  transition: color 0.5s ease;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 11px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentsBox = styled(Link)`
  width: 100%;
  height: 40px;
  padding-left: 7%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  border-radius: 10px;
  margin-top: 2%;
  color: #5a6acf;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.sideBar};
  }
`;

const AlarmBar = ({
  setHasUnreadNotifications,
  toggleAlarmBar,
  hasUnreadNotifications,
}) => {
  const { email } = useContext(UserEmailContext);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await AnnouncementAxios.getNotificationsByEmail(email);
        setNotifications(response.data);
        setHasUnreadNotifications(response.data.length > 0);
      } catch (error) {
        console.error("Failed to fetch notifications", error);
      }
    };

    fetchNotifications();
  }, [email, setHasUnreadNotifications]);

  const handleNotificationClick = async (classTitle, notice, id) => {
    try {
      await AnnouncementAxios.markAsRead(id, email);
      const updatedNotifications = notifications.filter(
        (notification) => notification.id !== id
      );
      setNotifications(updatedNotifications);
      setHasUnreadNotifications(updatedNotifications.length > 0); // 클릭 후 알림 상태 업데이트

      navigate(`/announcement/${classTitle}/${notice.id}`, {
        state: { notice },
      });

      // 알림 클릭 시 알림 바 닫기 (필요 시)
      toggleAlarmBar();
    } catch (error) {
      console.error("Failed to mark notification as read", error);
    }
  };

  return (
    <Alarm>
      <Menu>
        <Title>{hasUnreadNotifications ? "알림" : "알림없음"}</Title>
        {notifications.map((notification) => (
          <ContentsBox
            key={notification.id}
            onClick={() =>
              handleNotificationClick(
                notification.classTitle,
                notification,
                notification.id
              )
            }
          >
            {notification.title}
          </ContentsBox>
        ))}
      </Menu>
    </Alarm>
  );
};

export default AlarmBar;
