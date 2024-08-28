import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaArrowLeft, FaPlus } from "react-icons/fa";
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
  const { conversations, deleteConversation, setCurrentConversation } =
    useChatContext();

  const handleConversationClick = (conv) => {
    setCurrentConversation(conv); // 대화 선택 시 currentConversation 업데이트
    if (window.innerWidth <= 768) {
      toggleSideBar();
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `대화 ${date.getFullYear()}.${
      date.getMonth() + 1
    }.${date.getDate()}. 오후 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleSideBar} />
      <Sidebar isOpen={isOpen}>
        <Back>
          <FaArrowLeft onClick={() => navigate(-1)} size={20} />
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
                onClick={() => handleConversationClick(conv)} // 대화 클릭 핸들러
              >
                {formatDate(conv.id)}
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
            <SetDetail onClick={() => navigate("/setting")}>
              <GoPerson />
              계정관리
            </SetDetail>
            <SetDetail onClick={() => navigate("/help")}>FAQ</SetDetail>
            <SetDetail
              onClick={() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                navigate("/");
              }}
            >
              <MdLogout />
              로그아웃
            </SetDetail>
          </SettingBox>
        </Menu>
      </Sidebar>
    </>
  );
};
