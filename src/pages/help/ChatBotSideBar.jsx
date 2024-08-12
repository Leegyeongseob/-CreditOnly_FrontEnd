import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegTrashCan } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

import { FaPlus } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Sidebar = styled.div`
  width: 15%;
  min-width: 282px;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.5s ease, border-right 0.5s ease;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    position: fixed;
    min-width: 161.69px;
    width: 200px;
    top: 6%;
    left: 0;
    background-color: ${({ theme }) => theme.background};
    border-right: 1px solid ${({ theme }) => theme.borderBottom};
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;

const Menu = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const NewChatBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 10px;
  svg {
    margin-right: 2.5%; /* 간격 조절 */
  }
`;

const Back = styled.div`
  cursor: pointer;
  width: 20%;
  height: 5%;
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const NewChatBtn = styled.div`
  width: 90%;
  height: 5%;
  cursor: pointer;
  background-color: #121212;
  color: #fafafa;
  transition: background-color 0.5s ease, color 0.5s ease;
  font-size: 16px;
  padding: 0 5% 0 5%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  user-select: none;
  border-radius: 10px;
`;

const SettingBox = styled.div`
  width: 100%;
  height: 30%;
  user-select: none;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  display: flex;
`;
const SetDetailTop = styled.div`
  width: 80%;
  height: 20%;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-top: 8%;
  padding-left: 10%;
  gap: 3%;
  border-top: 1px solid lightgray;
  user-select: none;
  &:active {
    color: #b3b3b3;
  }
`;

const SetDetail = styled.div`
  width: 80%;
  height: 20%;
  padding-top: 8%;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-left: 10%;
  gap: 3%;
  user-select: none;
  &:active {
    color: #b3b3b3;
  }
`;

const ChatBotSideBar = () => {
  const navigate = useNavigate();

  const goSetting = () => {
    navigate("/setting");
  };
  const goBack = () => {
    navigate(-1);
  };
  const logOutBtnHandler = () => {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("isDarkMode", false);
    localStorage.setItem("refreshToken", "");
    navigate("/");
  };
  return (
    <Sidebar>
      <Menu>
        <Back>
          <FaArrowLeft onClick={goBack} size={20} />
        </Back>
        <NewChatBox>
          <NewChatBtn>
            새 채팅
            <FaPlus size={14} />
          </NewChatBtn>
        </NewChatBox>
        <SettingBox>
          <SetDetailTop>
            <FaRegTrashCan />
            기록삭제
          </SetDetailTop>
          <SetDetail onClick={goSetting}>
            <GoPerson />
            계정관리
          </SetDetail>
          <SetDetail>
            <FaExternalLinkAlt />
            FAQ
          </SetDetail>
          <SetDetail onClick={logOutBtnHandler}>
            <MdLogout />
            로그아웃
          </SetDetail>
        </SettingBox>
      </Menu>
    </Sidebar>
  );
};
export default ChatBotSideBar;
