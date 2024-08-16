import React, { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const addMessage = (message) => {
    setChatHistory((prevHistory) => [...prevHistory, message]);
  };

  const startNewConversation = () => {
    const newConversation = { id: Date.now(), messages: [] };
    setConversations((prev) => [...prev, newConversation]);
    setChatHistory([]);
  };

  const deleteConversation = (id) => {
    setConversations((prev) => prev.filter((conv) => conv.id !== id));
  };

  return (
    <ChatContext.Provider
      value={{
        chatHistory,
        addMessage,
        conversations,
        startNewConversation,
        deleteConversation,
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
