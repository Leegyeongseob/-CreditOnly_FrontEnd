import React, { useEffect, useState } from "react";
import Header from "../../common/commonForm/Header";
import ChatBotSideBar from "./ChatBotSideBar";
import ChatCard from "./ChatCard";
import EcosAxios from "../../axiosapi/EcosAxios";
import DartAxios from "../../axiosapi/DartAxios";
import FinancialDataAxios from "../../axiosapi/FinancialDataAxios";
import { useChatContext } from "../../contexts/ChatContext";
import {
  Contain,
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

  // activeTopic 상태 변화 감지 및 로깅
  useEffect(() => {
    console.log(`Active topic changed to: ${activeTopic}`);
  }, [activeTopic]);

  // 메시지 입력 핸들러
  const handleChange = (e) => {
    console.log("User input message:", e.target.value);
    setMessage(e.target.value);
  };

  // 카드 클릭 핸들러 - 주제 선택 후 UI 업데이트
  const handleCardClick = (topic) => {
    console.log(`Card clicked: ${topic}`);
    setActiveTopic(topic);
    addMessage({ sender: "bot", text: `${topic}에 대해 물어보세요.` });
    console.log("Updated chat history after card click:", chatHistory);

    const newConversation = startNewConversation(); // 새로운 대화 시작
    if (newConversation) {
      newConversation.topic = topic; // topic 설정
      setCurrentConversation(newConversation); // currentConversation 업데이트
    } else {
      console.error(
        "Failed to start new conversation: newConversation is undefined"
      );
    }
  };

  // 메시지 전송 핸들러
  const send = async () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      addMessage({ sender: "user", text: message });
      setMessage("");
      setIsLoading(true);

      try {
        let response;
        console.log("Active topic when sending message:", activeTopic);
        switch (activeTopic) {
          case "소비자 동향 지수":
            response = await EcosAxios.getEcosData(message, message);
            console.log("ECOS API Response:", response);
            break;
          case "기업 개황":
            response = await DartAxios.getDartData(message, message);
            console.log("DART API Response:", response);
            break;
          case "금융 회사 조회":
            const [fncoNm, query] = message
              .split(",")
              .map((item) => item.trim());
            response = await FinancialDataAxios.getFinancialData(
              fncoNm || message,
              query || message
            );
            console.log("Financial Data API Response:", response);
            break;
          default:
            throw new Error("Unknown topic");
        }

        let formattedResponse;
        if (typeof response === "object") {
          formattedResponse = JSON.stringify(response, null, 2);
        } else {
          formattedResponse = response;
        }

        addMessage({
          sender: "bot",
          text: formattedResponse,
        });
        console.log(
          "Updated chat history after receiving response:",
          chatHistory
        );
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

  // 사이드바 토글
  const toggleSideBar = () => {
    console.log("Toggling sidebar visibility");
    setIsSideBarVisible(!isSideBarVisible);
    setIsHeader(!isHeader);
  };

  // 화면 크기 변경에 따른 사이드바 상태 조정
  const handleResize = () => {
    console.log("Window resized, checking width");
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

  // 새로운 채팅 시작 핸들러
  const handleNewChat = () => {
    console.log("Starting new conversation");
    const newConversation = startNewConversation();
    if (newConversation) {
      newConversation.topic = null;
      setActiveTopic(null);
      setCurrentConversation(newConversation);
    } else {
      console.error(
        "Failed to start new conversation: newConversation is undefined"
      );
    }
  };

  // currentConversation이 변경될 때 activeTopic 설정
  useEffect(() => {
    console.log(`Current conversation updated:`, currentConversation);
    if (currentConversation && currentConversation.topic) {
      console.log(
        "Setting activeTopic based on currentConversation:",
        currentConversation.topic
      );
      setActiveTopic(currentConversation.topic);
    }
  }, [currentConversation]);

  // 다른 곳에서 activeTopic을 undefined로 설정하는 코드가 있는지 확인합니다.
  // 모든 activeTopic 상태 변경에 대해 로그를 추가하여 추적합니다.
  useEffect(() => {
    console.log(`Active topic changed to: ${activeTopic}`);
  }, [activeTopic]);

  return (
    <Contain>
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
          {console.log(
            "Rendering MessageBox, Current Conversation:",
            currentConversation
          )}
          {console.log("Rendering MessageBox, Active Topic:", activeTopic)}
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
    </Contain>
  );
};

export default ChatBot;
