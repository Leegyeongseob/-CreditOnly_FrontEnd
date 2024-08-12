import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

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

const AlarmBar = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "알림바 테스트" },
    { id: 2, text: "연습임~" },
    // Add initial notifications here
  ]);

  // Function to handle notification click
  const handleNotificationClick = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <Alarm>
      <Menu>
        <Title>알림</Title>
        {notifications.map((notification) => (
          <ContentsBox
            key={notification.id}
            onClick={() => handleNotificationClick(notification.id)}
          >
            {notification.text}
          </ContentsBox>
        ))}
      </Menu>
    </Alarm>
  );
};
export default AlarmBar;
