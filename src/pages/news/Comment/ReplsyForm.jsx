import React, { useState } from "react";
import styled from "styled-components";

const ReplyFormContainer = styled.div`
  margin-top: 10px;
`;

const ReplyTextArea = styled.textarea`
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #ddd;
  resize: none;
  height: 40px;
  width: 90%;
  margin-bottom: 5px;
`;

const ReplyButton = styled.button`
  padding: 5px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ReplyForm = ({ onReply }) => {
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(replyText);
      setReplyText("");
    }
  };

  return (
    <ReplyFormContainer>
      <ReplyTextArea
        value={replyText}
        onChange={(e) => setReplyText(e.target.value)}
        placeholder="답글을 입력하세요..."
      />
      <ReplyButton onClick={handleReply}>답글 달기</ReplyButton>
    </ReplyFormContainer>
  );
};

export default ReplyForm;
