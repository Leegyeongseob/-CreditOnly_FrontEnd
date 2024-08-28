import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrashAlt,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaPlus,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { useChatContext } from "../../contexts/ChatContext";
import {
  Sidebar,
  Menu,
  NewChatBox,
  Back,
  NewChatBtn,
  SettingBox,
  SetDetail,
  ConversationList,
  ConversationItem,
  DeleteButton,
  Overlay,
} from "./ChatBotSideBarStyles";

const ChatBotSideBar = ({ onNewChat, toggleSideBar, isOpen, isDarkMode }) => {
  const navigate = useNavigate();
  const {
    conversations,
    deleteConversation,
    setCurrentConversation, // setCurrentConversation 가져오기
  } = useChatContext();

  const goSetting = () => {
    if (window.innerWidth <= 768) {
      toggleSideBar();
    }
    navigate("/setting");
  };

  const goBack = () => {
    if (window.innerWidth <= 768) {
      toggleSideBar();
    }
    navigate(-1);
  };

  const logOutBtnHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    if (window.innerWidth <= 768) {
      toggleSideBar();
    }
    navigate("/");
  };

  const handleConversationClick = (conv) => {
    setCurrentConversation(conv); // 클릭한 대화를 현재 대화로 설정
    if (window.innerWidth <= 768) {
      toggleSideBar();
    }
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleSideBar} />
      <Sidebar isOpen={isOpen}>
        <Back>
          <FaArrowLeft onClick={goBack} size={20} />
        </Back>
        <Menu>
          <NewChatBox>
            <NewChatBtn onClick={onNewChat}>
              새 채팅
              <FaPlus size={14} />
            </NewChatBtn>
          </NewChatBox>
          <ConversationList>
            {conversations.map((conv) => (
              <ConversationItem
                key={conv.id}
                onClick={() => handleConversationClick(conv)} // 대화 항목 클릭 시 호출
              >
                대화 {new Date(conv.id).toLocaleString()}
                <DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteConversation(conv.id);
                  }}
                >
                  <FaTrashAlt />
                </DeleteButton>
              </ConversationItem>
            ))}
          </ConversationList>
          <SettingBox>
            <SetDetail onClick={goSetting}>
              <GoPerson />
              계정관리
            </SetDetail>
            <SetDetail
              onClick={() => {
                navigate("/help");
              }}
            >
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
    </>
  );
};

export default ChatBotSideBar;
