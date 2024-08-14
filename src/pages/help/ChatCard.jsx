import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 200px; /* 카드의 넓이를 늘림 */
  height: 100px;
  background-color: #ffffff; /* 카드 배경을 하얀색으로 */
  border-radius: 10px; /* 더 부드러운 둥근 모서리 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* 카드가 위로 살짝 올라가는 효과 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* hover 시 그림자 강화 */
  }
`;

const CardText = styled.div`
  color: #333333; /* 카드 텍스트 색상 */
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;

const ChatCard = ({ text, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardText>{text}</CardText>
    </CardContainer>
  );
};

export default ChatCard;
