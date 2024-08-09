import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentList = ({ comments, onEdit, onDelete, onLike, onDislike, onReply }) => {
  return (
    <List>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onEdit={onEdit}
          onDelete={onDelete}
          onLike={onLike}
          onDislike={onDislike}
          onReply={onReply}
        />
      ))}
    </List>
  );
};

export default CommentList;
