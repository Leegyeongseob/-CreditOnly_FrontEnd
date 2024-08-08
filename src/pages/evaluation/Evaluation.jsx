import styled from "styled-components";
import Logo from "../../img//background/CreditOnlyLogo.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BtnDiv = styled.div`
  width: 100%;
  height: 6%;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: row;
`;
const ViewDiv = styled.div`
   width: 92%;
  height: 42%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const EvaluationBtn = styled.div`
  width: ${({ visualization }) => (visualization ? "30px" : "20xp")};
  font-size: ${({ visualization }) => (visualization ? "15px" : "20px")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  transition: transform 0.3s ease; /* 애니메이션 효과를 부드럽게 하기 위한 전환 효과 */
`;
const CrediEvaluation = styled.div`
  width: 92%;
  height: 90%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
  &:hover ${EvaluationBtn} {
    transform: translateX(10px); /* 부모 요소에 호버 시 버튼을 오른쪽으로 10px 이동 */
    color: #8290ee; /* 버튼 텍스트 색상 변경 */
  }
`;

const CreditView = styled.div`
  width: 48.8%;
  height: 93%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const TextEvaluation = styled.div`
  width:${({ positionfirst }) => (positionfirst ? "250px" : "110px")};
  font-size: 15px;
  height: 100%;
  display: flex;
  justify-content: ${({ positionfirst }) => (positionfirst ? "flex-end" : "flex-start")};
  align-items: center;
  padding: 10px;
`;
const MyEvaluation = styled.div`
  width:200px;
  font-size: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const Evaluation = () => {
  return (
    <Container>
      <BtnDiv>
      <CrediEvaluation>
        <MyEvaluation>나의 신용 평가하기</MyEvaluation>
        <EvaluationBtn> &gt;&gt;</EvaluationBtn>
      </CrediEvaluation>
      </BtnDiv>
      <ViewDiv>
        <CreditView imageurl={Logo}>나의 신용등급</CreditView>
        <CreditView imageurl={Logo}>나와 비슷한 연령대의 시각화</CreditView>
      </ViewDiv>
      <BtnDiv>
      <CrediEvaluation>
        <TextEvaluation positionfirst={true}>다양한 시각화를 추가하고 싶으시면</TextEvaluation>
        <EvaluationBtn visualization={true}> 여기</EvaluationBtn>
        <TextEvaluation  positionfirst={false}>를 눌러주세요.</TextEvaluation>
      </CrediEvaluation>
      </BtnDiv>
      <ViewDiv>
        <CreditView imageurl={Logo}>나와 같은 직업의 신용 점수시각화</CreditView>
        <CreditView imageurl={Logo}>대출금별 신용 점수시각화</CreditView>
      </ViewDiv>
    </Container>
  );
};
export default Evaluation;
