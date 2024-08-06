import styled from "styled-components";

const FindByPwdWarp = styled.div`
  width: 100%;
  height: 100%;
`;

const Forgot = styled.div`
  width: 50%;
  height: 10%;
  font-size: 40px;
  position: relative;
  font-weight: bold;
  text-align: center;
  color: white;
  top: 20%;
  left: 10%;
`;
const Inst = styled.input`
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 외곽선 제거 */
  background: transparent; /* 배경 투명 */
  position: relative;
  width: 100%; /* 전체 너비 */
  padding: 8px; /* 적절한 여백 추가 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */
  border-bottom: 1px solid #d0d0d0; /* 얇은 회색 밑줄 추가 */
  font-size: 18px;
`;

const FindPassword = () => {
  return (
    <FindByPwdWarp>
      <Forgot>비밀번호 찾기</Forgot>
      <Inst placeholder="이름을 입력해주세요"></Inst>
      <Inst placeholder="이메일을 입력해주세요"></Inst>
    </FindByPwdWarp>
  );
};

export default FindPassword;