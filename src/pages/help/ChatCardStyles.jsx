import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 50px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  visibility: hidden;
`;

export const CardContainer = styled.div`
  width: 400px;
  height: 250px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 0.7s ease forwards;
  visibility: visible;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    width: calc(50% - 20px);
    height: 180px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 160px;
  }
`;

export const CardText = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
