import { Outlet, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import SideBar from "./SideBar";
import Header from "./Header";
import { useEffect, useState } from "react";

const Screen = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 94vh;
  transition: background-color 0.5s ease, color 0.5s ease;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
  ${({ isAnnouncement }) =>
    isAnnouncement &&
    css`
      @media screen and (max-width: 1200px) {
        height: 100%;
      }
    `}
`;

const Contents = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
`;

const MainForm = ({ toggleDarkMode, isDarkMode }) => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [isHeader, setIsHeader] = useState(false);
  const location = useLocation(); // 현재 경로를 가져옴

  // 현재 경로가 "/announcement"인지 확인
  const isAnnouncement = location.pathname === "/announcement";

  // sidebar의 가시성을 토글하는 함수
  const toggleSideBar = () => {
    setIsSideBarVisible(!isSideBarVisible);
    setIsHeader(!isHeader);
  };

  // 화면 크기 변화에 따라 사이드바를 숨기거나 보이게 설정하는 함수
  const handleResize = () => {
    if (window.innerWidth < 1201) {
      setIsSideBarVisible(false);
      setIsHeader(false);
    } else {
      setIsSideBarVisible(true);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 마운트될 때 한 번 체크
    handleResize();

    // 컴포넌트가 언마운트될 때 리사이즈 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header
        toggleSideBar={toggleSideBar}
        isHeader={isHeader}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Screen isAnnouncement={isAnnouncement}>
        {isSideBarVisible && <SideBar toggleSideBar={toggleSideBar} />}
        <Contents>
          <Outlet />
        </Contents>
      </Screen>
    </>
  );
};
export default MainForm;
