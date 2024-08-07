import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  IoSettingsOutline,
  IoReaderOutline,
  IoBarChartOutline,
  IoChatbubbleEllipsesOutline,
  IoNewspaperOutline,
  IoTodayOutline,
  IoChatboxEllipsesOutline,
} from "react-icons/io5";

const Sidebar = styled.div`
  width: 15%;
  min-width: 161.69px;
  height: 100%;
  background-color: #f1f2f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 1%;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Menu = styled.div`
  width: 53%;
  height: 88%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const activeTitleStyle = css`
  background-color: #d8dcf3;
  opacity: 0.8;
  border-radius: 5px;
`;

const Title = styled.div`
  width: 100%;
  height: 45px;
  color: #082431;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 11px;
  opacity: 0.5;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ContentsBox = styled(Link)`
  width: 100%;
  height: 42px;
  padding-left: 7%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  ${(props) => props.isActive && activeTitleStyle}
  &:hover {
    transform: scale(1.02);
    opacity: 0.7;
  }
`;

const IconBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  width: 80%;
  color: #273240;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding-left: 5px;
`;

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Sidebar>
      <Menu>
        <Title>MENU</Title>
        <ContentsBox to="/" isActive={currentPath === "/"}>
          <IconBox>
            <IoBarChartOutline
              size={20}
              color={currentPath === "/" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>Dashboard</TextWrapper>
        </ContentsBox>
        <ContentsBox to="/notice" isActive={currentPath === "/notice"}>
          <IconBox>
            <IoTodayOutline
              size={20}
              color={currentPath === "/notice" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>공지사항</TextWrapper>
        </ContentsBox>
        <ContentsBox
          to="/information"
          isActive={currentPath === "/information"}
        >
          <IconBox>
            <IoReaderOutline
              size={20}
              color={currentPath === "/information" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>신용정보</TextWrapper>
        </ContentsBox>
        <ContentsBox to="/chat" isActive={currentPath === "/chat"}>
          <IconBox>
            <IoNewspaperOutline
              size={20}
              color={currentPath === "/chat" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>신용평가</TextWrapper>
        </ContentsBox>
        <ContentsBox to="/evaluation" isActive={currentPath === "/evaluation"}>
          <IconBox>
            <IoChatbubbleEllipsesOutline
              size={20}
              color={currentPath === "/evaluation" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>문의사항</TextWrapper>
        </ContentsBox>
        <Title>OTHERS</Title>
        <ContentsBox to="/setting" isActive={currentPath === "/setting"}>
          <IconBox>
            <IoSettingsOutline
              size={20}
              color={currentPath === "/setting" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>설정</TextWrapper>
        </ContentsBox>
        <ContentsBox to="/help" isActive={currentPath === "/help"}>
          <IconBox>
            <IoChatboxEllipsesOutline
              size={20}
              color={currentPath === "/help" ? "#263ed8" : "#8290ee"}
            />
          </IconBox>
          <TextWrapper>고객지원</TextWrapper>
        </ContentsBox>
      </Menu>
    </Sidebar>
  );
};
export default SideBar;
