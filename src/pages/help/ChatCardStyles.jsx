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

export const CardContainer = styled.div`
  width: 320px; // 카드의 너비를 더 넓게 조정
  height: 180px; // 카드의 높이를 더 높게 조정
  background: rgba(255, 255, 255, 0.15); // 투명도 조정
  border-radius: 15px; // 약간 둥근 모서리로 고급스러운 느낌 제공
  backdrop-filter: blur(8px); // 유리 효과로 깔끔한 느낌
  -webkit-backdrop-filter: blur(8px); // 사파리 브라우저 지원
  border: 1px solid rgba(255, 255, 255, 0.2); // 테두리 설정
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 은은한 쉐도우로 고급스러움 강조
  transition: transform 0.3s ease, box-shadow 0.3s ease; // 부드러운 애니메이션
  animation: ${fadeInUp} 0.7s ease forwards; // 로드 시 애니메이션

  &:hover {
    transform: translateY(-5px); // 살짝 떠오르는 효과
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); // 호버 시 더 깊은 쉐도우
  }

  @media screen and (max-width: 768px) {
    width: calc(50% - 15px); // 작은 화면에서 카드 크기 조정
    height: 160px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 160px;
  }
`;

export const CardText = styled.div`
  color: #000; // 텍스트 색상을 짙게 설정 (짙은 검은색)
  font-size: 18px; // 미니멀한 크기
  font-weight: 600; // 글자 두께를 더 두껍게 설정
  text-align: center;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px; // 카드 사이의 간격을 더 넓게 설정
  padding: 20px;
`;
