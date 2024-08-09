import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/loginImg/findPageLogoImg.png";

const LoginPage = styled.div`
  background-color: #ffffff;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;
const SinLogo = styled.div`
  background-image: url(${logo});
  background-size: contain; /* 또는 cover로 설정 */
  width: 80%;
  height: 80%;
  background-repeat: no-repeat;
  cursor: pointer; /* 마우스 오버 시 손가락 모양 커서 */
`;
const PwTextBox = styled.div`
  width: 42.6%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
`;
const PwText = styled.div`
  color: gray;
  font-size: 30px;
  width: 80%;
  height: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const PwDetail = styled.div`
  color: gray;
  font-size: 25px;
  width: 80%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: start;
  flex-direction: column;
  font-weight: lighter;
  line-height: 1.5;
`;
const IdTextBox = styled.div`
  width: 42.6%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
`;
const IdText = styled.div`
  color: gray;
  font-size: 30px;
  width: 80%;
  height: 30%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const IdDetail = styled.div`
  color: gray;
  font-size: 25px;
  width: 80%;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: start;
  flex-direction: column;
  font-weight: lighter;
  line-height: 1.5;
`;
const Rectangle = styled.div`
  background-color: #2ecc71;
  border-top-left-radius: 38px;
  border-bottom-left-radius: 38px;
  box-shadow: 0px 4px 20px 5px #00000040;
  left: calc(42.6%);
  position: absolute;
  width: 57.4%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const LogoDiv = styled.div`
  width:100%;
  height: 30%;
  display: flex;
  justify-content: first baseline;
  margin-left: 3%;
  align-items: center;
`;
const FindByForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <LoginPage>
      <LogoDiv>
      <SinLogo onClick={onClickLogo} />
      </LogoDiv>
      {location.pathname === "/findbypwd" || location.pathname === "/resetpwd"  ? ( // 경로에 따라 조건부 렌더링
        <PwTextBox>
          <PwText>비밀번호 찾기</PwText>
          <PwDetail>
            1. 비밀번호는 최소 8자 이상, 대문자, 소문자, 숫자, 특수문자를
            포함해야 합니다.
          </PwDetail>
          <PwDetail>
            2. 새 비밀번호를 한 번 더 입력하여 확인해 주세요. '비밀번호 변경'
            버튼을 클릭하면 재설정이 완료됩니다.
          </PwDetail>
          <PwDetail>
            주의: 안전한 비밀번호를 사용하시고, 다른 사이트와 동일한 비밀번호를
            사용하지 마세요.
          </PwDetail>
        </PwTextBox>
      ) : location.pathname === "/findbyemail" ? ( // 다른 경로에 따라 다른 콘텐츠 표시
        <IdTextBox>
          <IdText>아이디 찾기</IdText>
          <IdDetail>보안을 위해 이메일의 일부가 숨겨져 표시됩니다.</IdDetail>
        </IdTextBox>
      ) : null}
      <Rectangle>
        <Outlet />
      </Rectangle>
    </LoginPage>
  );
};

export default FindByForm;
