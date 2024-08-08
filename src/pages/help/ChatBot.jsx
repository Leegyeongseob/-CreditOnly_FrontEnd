import styled from "styled-components";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;

const Screen = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const Menu = styled.div`
  width: 25%;
  height: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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
  /* background-color: aqua; */
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;
const NewChatBtn = styled.div`
  width: 80%;
  height: 5%;
  background-color: #000000;
  cursor: pointer;
  color: white;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  user-select: none;
  border-radius: 10px;
`;
const SettingBox = styled.div`
  width: 100%;
  height: 30%;
  user-select: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;
const SetDetailTop = styled.div`
  width: 80%;
  height: 20%;
  cursor: pointer;
  justify-content: start;
  align-items: center;
  display: flex;
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
  cursor: pointer;
  justify-content: start;
  align-items: center;
  display: flex;
  padding-left: 10%;
  gap: 3%;
  user-select: none;
  &:active {
    color: #b3b3b3;
  }
`;
const MessageBox = styled.div`
  width: 75%;
  height: 100%;
  justify-content: start;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const MessagePlace = styled.div`
  width: 45%;
  height: 85%;
`;
const MessageSendBox = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MessageSendWrap = styled.div`
  width: 80%;
  height: 23%;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  max-width: 650px;
`;
const MessageSend = styled.input`
  background-color: #f0f0f0;
  font-size: 14px;
  font-weight: lighter;
  width: 95%;
  height: 100%;
  border: none;
  display: flex;
  user-select: none;
  border-radius: 8px;
  align-items: center;
  padding-left: 1.5%;
  max-width: 650px;
  outline: none;
`;
const SendWrap = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
`;
const ChatBot = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const goSetting = () => {
    navigate("/setting");
  };
  const goBack = () => {
    navigate(-1);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };
  const send = () => {};
  return (
    <Screen>
      <Menu>
        <NewChatBox>
          <Back>
            <FaArrowLeft onClick={goBack} />
          </Back>
          <NewChatBtn>
            <FaPlus />새 채팅
          </NewChatBtn>
        </NewChatBox>
        <SettingBox>
          <SetDetailTop>
            <FaRegTrashCan />
            기록삭제
          </SetDetailTop>
          <SetDetail>
            <HiOutlineLightBulb />
            라이트모드
          </SetDetail>
          <SetDetail onClick={goSetting}>
            <GoPerson />
            계정관리
          </SetDetail>
          <SetDetail>
            <FaExternalLinkAlt />
            FAQ
          </SetDetail>
          <SetDetail>
            <MdLogout />
            로그아웃
          </SetDetail>
        </SettingBox>
      </Menu>
      <MessageBox>
        <MessagePlace>
          {/* <Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest></Teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeest> */}
        </MessagePlace>
        <MessageSendBox>
          <MessageSendWrap>
            <MessageSend
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="메세지를 입력해주세요"
            />
            <SendWrap>
              <VscSend onClick={send} />
            </SendWrap>
          </MessageSendWrap>
        </MessageSendBox>
      </MessageBox>
    </Screen>
  );
};

export default ChatBot;
