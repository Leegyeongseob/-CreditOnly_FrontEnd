import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LoginPage = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
`;

const Rectangle = styled.div`
  background-color: #2ecc71;
  border-top-left-radius: 38px;
  border-bottom-left-radius: 38px;
  box-shadow: 0px 4px 20px 5px #00000040;
  left: calc(42.6%);
  position: relative;
  width: 57.4%;
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

const FindByForm = () => {
  return (
    <LoginPage>
      <Rectangle>
        <Outlet />
      </Rectangle>
    </LoginPage>
  );
};

export default FindByForm;
