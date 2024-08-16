import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentList = ({ comments = [], onEdit, onDelete, onLike, onDislike, onReply }) => {
  return (
    <List>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onEdit={onEdit}
            onDelete={onDelete}
            onLike={onLike}
            onDislike={onDislike}
            onReply={onReply}
          />
        ))
      ) : (
        <li>댓글이 없습니다.</li>
      )}
    </List>
  );
};

export default CommentList;
