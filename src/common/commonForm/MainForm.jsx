import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
import Header from "./Header";
import { useEffect, useState } from "react";

const Screen = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 94vh;
`;

const Contents = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
`;

const MainForm = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [isHeader, setIsHeader] = useState(false);

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
      <Header toggleSideBar={toggleSideBar} isHeader={isHeader} />
      <Screen>
        {isSideBarVisible && <SideBar toggleSideBar={toggleSideBar} />}
        <Contents>
          <Outlet />
        </Contents>
      </Screen>
    </>
  );
};
export default MainForm;
