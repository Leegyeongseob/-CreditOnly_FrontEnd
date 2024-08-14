import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { VscSend } from "react-icons/vsc";
import Header from "../../common/commonForm/Header";
import ChatBotSideBar from "./ChatBotSideBar";
import ChatCard from "./ChatCard";
import EcosAxios from "../../axiosapi/EcosAxios"; // ECOS API 호출을 위한 Axios 인스턴스
import DartAxios from "../../axiosapi/DartAxios"; // DART API 호출을 위한 Axios 인스턴스
import FinancialDataAxios from "../../axiosapi/FinancialDataAxios"; // 금융 데이터 API 호출을 위한 Axios 인스턴스

const Screen = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100vw;
  height: 94vh;
  display: flex;
  z-index: 11;
`;

const MessageBox = styled.div`
  width: 85%;
  height: 100%;
  justify-content: start;
  align-items: center;
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  flex-direction: column;
`;

const MessagePlace = styled.div`
  width: 45%;
  height: 85%;
  overflow-y: auto;
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
  height: 30%;
  background-color: ${({ theme }) => theme.sideBar};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  border-radius: 8px;
  display: flex;
  align-items: center;
  max-width: 650px;
`;
const MessageSend = styled.input`
  background-color: ${({ theme }) => theme.sideBar};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  font-size: 15px;
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
  const [activeTopic, setActiveTopic] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const send = () => {
    // 메시지를 전송하고 대화 기록에 추가하는 로직
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: "user", text: message }]);
      setMessage(""); // 입력 필드를 비웁니다.
    }
  };

  const handleCardClick = async (topic) => {
    setActiveTopic(topic); // 주제 설정

    // 선택된 주제에 따라 API 호출
    try {
      let response;
      switch (topic) {
        case "소비자 동향 지수":
          response = await EcosAxios.getEcosData();
          break;
        case "기업 개황":
          response = await DartAxios.getDartData();
          break;
        case "금융 회사 조회":
          response = await FinancialDataAxios.indexFinancialData();
          break;
        default:
          console.error("Unknown topic:", topic);
          return;
      }

      // API 호출 후 데이터를 대화 기록에 추가
      setChatHistory([
        ...chatHistory,
        { sender: "bot", text: JSON.stringify(response, null, 2) },
      ]);
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다:", error);
    }
  };

  const toggleSideBar = () => {
    setIsSideBarVisible(!isSideBarVisible);
    setIsHeader(!isHeader);
  };

  const handleResize = () => {
    if (window.innerWidth < 1201) {
      setIsSideBarVisible(false);
      setIsHeader(false);
    } else {
      setIsSideBarVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
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
          {!activeTopic ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ChatCard
                text="소비자 동향 지수"
                onClick={() => handleCardClick("소비자 동향 지수")}
              />
              <ChatCard
                text="기업 개황"
                onClick={() => handleCardClick("기업 개황")}
              />
              <ChatCard
                text="금융 회사 조회"
                onClick={() => handleCardClick("금융 회사 조회")}
              />
            </div>
          ) : (
            <>
              <MessagePlace>
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: msg.sender === "user" ? "right" : "left",
                    }}
                  >
                    <p>{msg.text}</p>
                  </div>
                ))}
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
            </>
          )}
        </MessageBox>
      </Screen>
    </>
  );
};

export default ChatBot;
