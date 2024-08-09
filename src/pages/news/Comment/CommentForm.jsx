import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  resize: none;
  height: 80px;
`;

const SubmitButton = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="댓글을 입력하세요..."
      />
      <SubmitButton type="submit">댓글 달기</SubmitButton>
    </Form>
  );
};

export default CommentForm;
