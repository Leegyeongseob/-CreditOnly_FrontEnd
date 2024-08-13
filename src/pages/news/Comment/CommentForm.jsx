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

const CommentForm = ({ informationId, parentId }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            informationId: informationId,
            parentId: parentId,
            content: text,
          }),
        });

        if (!response.ok) {
          throw new Error("댓글 제출 실패");
        }

        // 댓글 제출 후 입력 필드를 비우고 성공 메시지를 보여줍니다.
        setText("");
        alert("댓글이 제출되었습니다.");
        // 추가로 성공 후 동작을 추가할 수 있습니다 (예: 댓글 목록 새로고침)
      } catch (error) {
        console.error("댓글 제출 중 오류 발생:", error);
        alert("댓글 제출 중 오류가 발생했습니다.");
      }
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
