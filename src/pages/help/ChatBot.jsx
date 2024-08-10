import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { VscSend } from "react-icons/vsc";
import Header from "../../common/commonForm/Header";
import ChatBotSideBar from "./ChatBotSideBar";

const Screen = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100vw;
  height: 94vh;
  display: flex;
`;

const MessageBox = styled.div`
  width: 85%;
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

const ChatBot = ({ toggleDarkMode, isDarkMode }) => {
  const [message, setMessage] = useState("");
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [isHeader, setIsHeader] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const send = () => {};

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
      <Screen>
        {isSideBarVisible && <ChatBotSideBar toggleSideBar={toggleSideBar} />}
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
    </>
  );
};

export default ChatBot;
