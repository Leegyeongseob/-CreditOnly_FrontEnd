import React, { createContext, useState, useContext, useEffect } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
  const [currentConversation, setCurrentConversation] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 대화 불러오기
    const savedConversations = JSON.parse(
      localStorage.getItem("conversations") || "[]"
    );
    setConversations(savedConversations);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);
  };

  const addMessage = (message) => {
    setChatHistory((prevHistory) => {
      const newHistory = [...prevHistory, message];
      if (currentConversation) {
        const updatedConversation = {
          ...currentConversation,
          messages: [...currentConversation.messages, message],
        };
        setCurrentConversation(updatedConversation);
        saveConversation(updatedConversation);
      }
      return newHistory;
    });
  };

  const startNewConversation = () => {
    const newConversation = { id: Date.now(), messages: [] };
    setConversations((prev) => [...prev, newConversation]);
    setCurrentConversation(newConversation);
    setChatHistory([]);
    saveConversation(newConversation);
  };

  const deleteConversation = (id) => {
    setConversations((prev) => {
      const updatedConversations = prev.filter((conv) => conv.id !== id);
      localStorage.setItem(
        "conversations",
        JSON.stringify(updatedConversations)
      );
      return updatedConversations;
    });
    if (currentConversation && currentConversation.id === id) {
      setCurrentConversation(null);
      setChatHistory([]);
    }
  };

  const saveConversation = (conversation) => {
    setConversations((prev) => {
      const updatedConversations = prev.map((conv) =>
        conv.id === conversation.id ? conversation : conv
      );
      if (!prev.find((conv) => conv.id === conversation.id)) {
        updatedConversations.push(conversation);
      }
      localStorage.setItem(
        "conversations",
        JSON.stringify(updatedConversations)
      );
      return updatedConversations;
    });
  };

  const deleteOldConversations = () => {
    const tenDaysAgo = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000);
    setConversations((prev) => {
      const updatedConversations = prev.filter(
        (conv) => new Date(conv.id) > tenDaysAgo
      );
      localStorage.setItem(
        "conversations",
        JSON.stringify(updatedConversations)
      );
      return updatedConversations;
    });
  };

  useEffect(() => {
    const interval = setInterval(deleteOldConversations, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
        currentConversation,
        setCurrentConversation,
        saveConversation,
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
