import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
import Header from "./Header";

const Screen = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94vh;
`;

const Contents = styled.div`
  display: flex;
  width: 86%;
  height: 90%;
`;

const MainForm = () => {
  return (
    <>
      <Header />
      <Screen>
        <SideBar />
        <Contents>
          <Outlet />
        </Contents>
      </Screen>
    </>
  );
};
export default MainForm;
