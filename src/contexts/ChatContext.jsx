import React, { createContext, useState, useContext, useEffect } from "react";

// ChatContext를 생성
const ChatContext = createContext();

// ChatProvider를 정의하고, context 값을 제공
export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
  const [currentConversation, setCurrentConversation] = useState(null);

  useEffect(() => {
    const savedConversations = JSON.parse(
      localStorage.getItem("conversations") || "[]"
    );
    setConversations(savedConversations);

    // 마지막으로 선택된 대화를 로드
    const lastConversation = JSON.parse(
      localStorage.getItem("lastConversation")
    );
    if (lastConversation) {
      setCurrentConversation(lastConversation);
      setChatHistory(lastConversation.messages || []);
    }
  }, []);

  useEffect(() => {
    // currentConversation이 변경될 때마다 chatHistory를 업데이트
    if (currentConversation) {
      setChatHistory(currentConversation.messages || []);
      localStorage.setItem(
        "lastConversation",
        JSON.stringify(currentConversation)
      );
    }
  }, [currentConversation]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("isDarkMode", newMode);
  };

  const addMessage = (message) => {
    if (!currentConversation) return;

    const updatedHistory = [...chatHistory, message];
    setChatHistory(updatedHistory);

    const updatedConversation = {
      ...currentConversation,
      messages: updatedHistory,
    };

    setCurrentConversation(updatedConversation);
    saveConversation(updatedConversation);
  };

  const startNewConversation = () => {
    const newConversation = { id: Date.now(), messages: [] };
    setConversations((prev) => [...prev, newConversation]);
    setCurrentConversation(newConversation);
    setChatHistory([]);
    saveConversation(newConversation);
    return newConversation; // 반환 추가
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
      localStorage.removeItem("lastConversation");
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

  const clearChatHistory = () => {
    setChatHistory([]);
    if (currentConversation) {
      const updatedConversation = { ...currentConversation, messages: [] };
      setCurrentConversation(updatedConversation);
      saveConversation(updatedConversation);
    }
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
        clearChatHistory,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

// useChatContext 훅을 정의하고 export
export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
