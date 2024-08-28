import React from "react";
import { MessageBubble, LoadingIndicator } from "./ChatBotStyles";
import { useChatContext } from "../../contexts/ChatContext";

const ConversationView = ({ isDarkMode, isLoading }) => {
  const { chatHistory } = useChatContext();

  return (
    <>
      {chatHistory.map((msg, index) => (
        <MessageBubble
          key={index}
          sender={msg.sender}
          isDarkMode={isDarkMode}
          dangerouslySetInnerHTML={{ __html: msg.text }}
        />
      ))}
      {isLoading && (
        <LoadingIndicator isDarkMode={isDarkMode}>
          응답을 생성 중입니다...
        </LoadingIndicator>
      )}
    </>
  );
};

export default ConversationView;
