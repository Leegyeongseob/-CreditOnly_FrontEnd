import React, { useState } from "react";
import styled from "styled-components";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const CommentsContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;

const Comments = () => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (text) => {
    const newComment = {
      id: Date.now(),
      text,
      replies: [],
      likes: 0,
      dislikes: 0,
    };
    setComments([...comments, newComment]);
  };

  const handleEditComment = (id, text) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, text } : comment
      )
    );
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleLike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  const handleDislike = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment
      )
    );
  };

  const handleReply = (id, replyText) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, replies: [...comment.replies, replyText] }
          : comment
      )
    );
  };

  return (
    <CommentsContainer>
      <CommentForm onSubmit={handleAddComment} />
      <CommentList
        comments={comments}
        onEdit={handleEditComment}
        onDelete={handleDeleteComment}
        onLike={handleLike}
        onDislike={handleDislike}
        onReply={handleReply}
      />
    </CommentsContainer>
  );
};

export default Comments;
