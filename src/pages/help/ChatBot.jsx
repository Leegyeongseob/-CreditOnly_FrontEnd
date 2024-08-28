import React, { useEffect, useState } from "react";
import Header from "../../common/commonForm/Header";
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
} from "./ChatBotStyles"; // 변경된 파일 이름 적용
import { CardWrapper, CardContainer, CardText } from "./ChatCardStyles";
import ChatBotSideBar from "./ChatBotSideBar"; // 변경된 파일 이름 적용
import { VscSend } from "react-icons/vsc";
import { performSimilaritySearch } from "../../axiosapi/performSimilaritySearch";
import { useChatContext } from "../../contexts/ChatContext";

const ChatBot = () => {
  const {
    chatHistory,
    addMessage,
    clearChatHistory,
    currentConversation,
    setCurrentConversation,
    startNewConversation,
    conversations,
  } = useChatContext();

  const [message, setMessage] = useState("");
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);
  const [activeTopic, setActiveTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCardSelected, setIsCardSelected] = useState(false); // 카드 선택 상태 추가

  useEffect(() => {
    const darkModeValue = localStorage.getItem("isDarkMode");
    setIsDarkMode(darkModeValue === "true");

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSideBarVisible(false);
      } else {
        setIsSideBarVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("현재 대화:", currentConversation);
    console.log("채팅 기록:", chatHistory);
  }, [currentConversation, chatHistory]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCardClick = (topic) => {
    setActiveTopic(topic);
    setIsCardSelected(true); // 카드 선택 시 상태 업데이트
    addMessage({ sender: "bot", text: `${topic}에 대해 물어보세요.` });

    const newConversation = startNewConversation();
    if (newConversation) {
      newConversation.topic = topic;
      setCurrentConversation(newConversation);
    }
  };

  const send = async () => {
    if (message.trim()) {
      addMessage({ sender: "user", text: message });
      setMessage("");
      setIsLoading(true);

      try {
        const response = await performSimilaritySearch(message);

        const formattedResponse = response
          .map((item) => {
            if (item.index === "financial_data") {
              return `
                금융회사명: ${item.source.fncoNm || "N/A"}
                대표자: ${item.source.fncoRprNm || "N/A"}
                주소: ${item.source.fncoAdr || "N/A"}
                설립일: ${item.source.fncoEstbDt || "N/A"}
              `;
            } else if (item.index === "ecos_statistic_word") {
              return `
                키워드: ${item.source.WORD || "N/A"}
                내용: ${item.source.CONTENT || "N/A"}
              `;
            } else if (item.index === "dart_company_info") {
              return `
                기업명: ${item.source.corp_name || "N/A"}
                대표자: ${item.source.ceo_nm || "N/A"}
              `;
            } else {
              return `Unknown index: ${item.index}`;
            }
          })
          .join("\n\n");

        addMessage({
          sender: "bot",
          text: formattedResponse,
        });
      } catch (error) {
        addMessage({
          sender: "bot",
          text: "죄송합니다. 오류가 발생했습니다.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleSideBar = () => {
    setIsSideBarVisible(!isSideBarVisible);
  };

  const handleNewChat = () => {
    clearChatHistory();
    setActiveTopic(null); // 새 채팅 시작 시 카드 선택 화면이 다시 나타나도록 설정
    setIsCardSelected(false); // 카드 선택 상태 초기화
    setCurrentConversation(null); // 기존 대화 초기화
  };

  return (
    <>
      <Header
        toggleSideBar={toggleSideBar}
        isHeader={false}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        isDarkMode={isDarkMode}
      />
      <Contain>
        <Screen isDarkMode={isDarkMode}>
          {isSideBarVisible && (
            <ChatBotSideBar
              toggleSideBar={toggleSideBar}
              onNewChat={handleNewChat}
              isOpen={isSideBarVisible}
              isCardSelected={isCardSelected} // 카드 선택 상태 전달
              isDarkMode={isDarkMode}
            />
          )}
          <MessageBox>
            {/* currentConversation이 없거나 activeTopic이 없을 때 카드 선택 화면 표시 */}
            {!isCardSelected ? (
              <CardWrapper>
                <CardContainer
                  onClick={() => handleCardClick("소비자 동향 지수")}
                >
                  <CardText>소비자 동향 지수</CardText>
                </CardContainer>
                <CardContainer onClick={() => handleCardClick("기업 개황")}>
                  <CardText>기업 개황</CardText>
                </CardContainer>
                <CardContainer
                  onClick={() => handleCardClick("금융 회사 조회")}
                >
                  <CardText>금융 회사 조회</CardText>
                </CardContainer>
              </CardWrapper>
            ) : (
              <>
                <MessagePlace>
                  {currentConversation &&
                    currentConversation.messages.map((message, index) => (
                      <MessageBubble
                        key={index}
                        isDarkMode={isDarkMode}
                        sender={message.sender}
                      >
                        {message.text}
                      </MessageBubble>
                    ))}
                  {isLoading && <LoadingIndicator />}
                </MessagePlace>
                <MessageSendBox>
                  <MessageSendWrap isDarkMode={isDarkMode}>
                    <MessageSend
                      type="text"
                      value={message}
                      onChange={handleChange}
                      onKeyPress={(e) => e.key === "Enter" && send()}
                      placeholder="메세지를 입력해주세요"
                      isDarkMode={isDarkMode}
                    />
                    <SendWrap onClick={send} isDarkMode={isDarkMode}>
                      <VscSend />
                    </SendWrap>
                  </MessageSendWrap>
                </MessageSendBox>
              </>
            )}
          </MessageBox>
        </Screen>
      </Contain>
    </>
  );
};

export default ChatBot;
