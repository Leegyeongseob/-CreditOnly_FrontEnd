import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const dots = keyframes`
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: black;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 black,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 black,
      .5em 0 0 black;
  }
`;

export const Contain = styled.div`
  width: auto;
  height: auto;
`;

export const Screen = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100vw;
  height: 93vh;
  display: flex;
  z-index: 11;
`;

export const MessageBox = styled.div`
  width: 85%;
  height: 100%;
  justify-content: start;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MessagePlace = styled.div`
  width: 45%;
  height: 85%;
  overflow-y: auto;
`;

export const MessageSendBox = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageSendWrap = styled.div`
  width: 80%;
  height: 30%;
  background-color: ${({ theme }) => theme.sideBar};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  border-radius: 8px;
  display: flex;
  align-items: center;
  max-width: 650px;
`;

export const MessageSend = styled.input`
  background-color: ${({ theme }) => theme.sideBar};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  font-size: 15px;
  font-weight: lighter;
  width: 95%;
  height: 100%;
  border: none;
  display: flex;
  user-select: none;
  border-radius: 8px;
  align-items: center;
  padding-left: 1.5%;
  max-width: 650px;
  outline: none;
`;

export const SendWrap = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 100;
`;

export const MessageBubble = styled.div`
  max-width: 70%;
  padding: 12px 18px;
  margin: 10px 0;
  border-radius: 20px;
  background: ${(props) =>
    props.sender === "user"
      ? "linear-gradient(135deg, #007bff, #0056b3)"
      : "#f1f0f0"};
  color: ${(props) => (props.sender === "user" ? "white" : "black")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
  font-size: 16px;
  line-height: 1.4;
  word-wrap: break-word;
  white-space: pre-wrap;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;

  &:before {
    content: ${(props) => (props.sender === "user" ? "'You'" : "'ChatGPT'")};
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

export const LoadingIndicator = styled.div`
  text-align: center;
  padding: 10px;
  font-style: italic;
  color: #888;
  &:after {
    content: "...";
    animation: ${dots} 1.5s steps(5, end) infinite;
  }
`;
