import React, { useEffect, useState } from "react";
import Header from "../../common/commonForm/Header";
import ChatBotSideBar from "./ChatBotSideBar";
import ChatCard from "./ChatCard";
import EcosAxios from "../../axiosapi/EcosAxios";
import DartAxios from "../../axiosapi/DartAxios";
import FinancialDataAxios from "../../axiosapi/FinancialDataAxios";
import { useChatContext } from "../../contexts/ChatContext";
import {
  Screen,
  MessageBox,
  MessagePlace,
  MessageSendBox,
  MessageSendWrap,
  MessageSend,
  SendWrap,
  MessageBubble,
  LoadingIndicator,
} from "./ChatBotStyles";
import { VscSend } from "react-icons/vsc";

const ChatBot = () => {
  const {
    chatHistory,
    addMessage,
    isDarkMode,
    toggleDarkMode,
    currentConversation,
    setCurrentConversation,
    startNewConversation,
  } = useChatContext();

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

  const handleNewChat = () => {
    startNewConversation();
    setActiveTopic(null);
    setCurrentConversation(null);
  };

  useEffect(() => {
    if (currentConversation) {
      setActiveTopic(currentConversation.topic);
      // chatHistory를 currentConversation.messages로 설정
    }
  }, [currentConversation]);

  return (
    <div>
      <Header
        toggleSideBar={toggleSideBar}
        isHeader={isHeader}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
      />
      <Screen isDarkMode={isDarkMode}>
        {isSideBarVisible && (
          <ChatBotSideBar
            toggleSideBar={toggleSideBar}
            onNewChat={handleNewChat}
          />
        )}
        <MessageBox>
          {!currentConversation || !activeTopic ? (
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
    </div>
  );
};

export default ChatBot;
