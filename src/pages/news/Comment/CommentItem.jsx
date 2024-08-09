import React, { useState } from "react";
import styled from "styled-components";
import ReplyForm from "./ReplsyForm";

const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CommentItem = ({ comment, onEdit, onDelete, onLike, onDislike, onReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(comment.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <Item>
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{comment.text}</p>
      )}
      <Button onClick={handleEdit}>
        {isEditing ? "저장" : "수정"}
      </Button>
      <Button onClick={() => onDelete(comment.id)}>삭제</Button>
      <Button onClick={() => onLike(comment.id)}>좋아요 ({comment.likes})</Button>
      <Button onClick={() => onDislike(comment.id)}>싫어요 ({comment.dislikes})</Button>
      <ReplyForm onReply={(replyText) => onReply(comment.id, replyText)} />
      {comment.replies.map((reply, index) => (
        <div key={index} style={{ marginLeft: "20px", marginTop: "10px" }}>
          {reply}
        </div>
      ))}
    </Item>
  );
};

export default CommentItem;
