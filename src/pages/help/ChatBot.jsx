import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { VscSend } from "react-icons/vsc";
import Header from "../../common/commonForm/Header";
import ChatBotSideBar from "./ChatBotSideBar";
import ChatCard from "./ChatCard";
import EcosAxios from "../../axiosapi/EcosAxios"; // ECOS API 호출을 위한 Axios 인스턴스
import DartAxios from "../../axiosapi/DartAxios"; // DART API 호출을 위한 Axios 인스턴스
import FinancialDataAxios from "../../axiosapi/FinancialDataAxios"; // 금융 데이터 API 호출을 위한 Axios 인스턴스
import { useChatContext } from "../../contexts/ChatContext";

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

const ChatBot = () => {
  const { chatHistory, addMessage, isDarkMode, toggleDarkMode } =
    useChatContext();
  const [message, setMessage] = useState("");
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [isHeader, setIsHeader] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const send = async () => {
    if (message.trim()) {
      addMessage({ sender: "user", text: message });
      setMessage("");
      setIsLoading(true);

      try {
        let response;
        switch (activeTopic) {
          case "소비자 동향 지수":
            response = await EcosAxios.getEcosData(message, message);
            break;
          case "기업 개황":
            response = await DartAxios.getDartData(message, message);
            break;
          case "금융 회사 조회":
            // 메시지를 파싱하여 fncoNm과 query로 분리
            const [fncoNm, query] = message
              .split(",")
              .map((item) => item.trim());
            response = await FinancialDataAxios.getFinancialData(
              fncoNm || message,
              query || message
            );
            break;
          default:
            throw new Error("Unknown topic");
        }

        // 응답 데이터 처리
        let formattedResponse;
        if (typeof response.data === "object") {
          formattedResponse = JSON.stringify(response.data, null, 2);
        } else {
          formattedResponse = response.data;
        }

        addMessage({
          sender: "bot",
          text: formattedResponse,
        });
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
        addMessage({
          sender: "bot",
          text:
            "죄송합니다. 오류가 발생했습니다: " +
            (error.response?.data?.message || error.message),
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCardClick = (topic) => {
    setActiveTopic(topic);
    addMessage({ sender: "bot", text: `${topic}에 대해 물어보세요.` });
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
    <Screen isDarkMode={isDarkMode}>
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
                <MessageBubble key={index} sender={msg.sender}>
                  {msg.text}
                </MessageBubble>
              ))}
              {isLoading && (
                <LoadingIndicator>응답을 생성 중입니다...</LoadingIndicator>
              )}
            </MessagePlace>
            <MessageSendBox>
              <MessageSendWrap>
                <MessageSend
                  type="text"
                  value={message}
                  onChange={handleChange}
                  onKeyPress={(e) => e.key === "Enter" && send()}
                  placeholder="메세지를 입력해주세요"
                />
                <SendWrap onClick={send}>
                  <VscSend />
                </SendWrap>
              </MessageSendWrap>
            </MessageSendBox>
          </>
        )}
      </MessageBox>
    </Screen>
  );
};

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px;
  border-radius: 20px;
  margin: 10px;
  background-color: ${(props) =>
    props.sender === "user" ? "#007bff" : "#f1f0f0"};
  color: ${(props) => (props.sender === "user" ? "white" : "black")};
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 10px;
  font-style: italic;
`;

export default ChatBot;
