import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginAxios from "../../axiosapi/LoginAxios";
import Modal from "../../common/utils/ImageModal";
import findIdImg from "../../img/loginImg/아이디찾기.gif";
import { MdOutlineMailOutline } from "react-icons/md";

const FindByEmailWarp = styled.div`
  width: 100%;
  height: 100%;
  align-items: start;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Forgot = styled.div`
  width: 60%;
  height: 10%;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inst = styled.input`
  border-radius: 7px;
  background: white;
  border: 1px solid gray;
  width: 50%;
  padding: 12px;
  font-size: 20px;
  height: 90%;
  font-weight: lighter;
`;
const Inpst = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 30%;
  gap: 5%;
`;
const EmailBox = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  display: flex;
  gap: 3%;
  align-items: center;
`;
const Transmission = styled.div`
  display: flex;
  cursor: pointer;
  background-color: white;
  color: #2ecc71;
  border-radius: 7px;
  border: 1px solid gray;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  height: 90%;
  width: 10%;
`;

const RegiInputBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
const RegistrationInput = styled.input`
  border-radius: 7px;
  background: white;
  border: 1px solid gray;
  width: 29%;
  height: 90%;
  padding: 12px;
  font-size: 20px;
  font-weight: lighter;
`;
const RegistrationInput2 = styled.input`
  border-radius: 7px;
  background: white;
  border: 1px solid gray;
  width: 29%;
  height: 90%;
  padding: 12px;
  font-size: 20px;
  font-weight: lighter;
`;
const Text = styled.div`
  width: auto;
  font-size: 15px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 0 5px; /* 좌우 여백 추가 */
`;

const IconWrapper = styled.div`
  top: 20%;
  color: gray;
  font-size: 24px;
`;
const FindIdWrap = styled.div`
  width: 60%;
  height: auto;
  justify-content: end;
  display: flex;
  align-items: center;
  color: white;
  font-weight: lighter;
`;
const ConBoxWrapper = styled.div`
  width: 80%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
const ContinueBox = styled.div`
  height: 100%;
  width: 30%;
  max-width: px;
  background-color: white;
  color: #5a3092;
  border-radius: 10px;
  box-shadow: 0px, 4px, 10px, #00000040;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 30px;
`;
const AnotherContinue = styled.div`
  color: white;
  height: 100%;
  width: auto;
  display: flex;
  margin-right: 3%;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: bold;
`;
const FindId = styled.div`
  width: auto;
  height: auto;
  display: flex;
  cursor: pointer; /* 마우스 오버 시 손가락 모양 커서 */
`;
const GoLogin = styled.div`
  width: auto;
  height: auto;
  display: flex;
  cursor: pointer;
`;

const FindPassword = () => {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const navigate = useNavigate();
  const handleNumberInput = (e, nextInputRef) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length === e.target.maxLength && nextInputRef) {
      nextInputRef.current?.focus(); // nextInputRef가 존재할 때만 포커스 이동
    }
  };
  const onClickFindId = () => {
    navigate("/findbyemail");
  };
  const onClickLogin = () => {
    navigate("/login");
  };
  return (
    <FindByEmailWarp>
      <Forgot>비밀번호 찾기</Forgot>
      <Inpst>
        <EmailBox>
          <Inst placeholder="이메일을 입력해주세요"></Inst>
          <Transmission>전송</Transmission>
        </EmailBox>
        <EmailBox>
          <Inst placeholder="인증번호입력"></Inst>
          <Transmission>확인</Transmission>
        </EmailBox>
        {/* <IconWrapper>
          <MdOutlineMailOutline />
        </IconWrapper> */}
        <RegiInputBox>
          <RegistrationInput
            placeholder="주민등록번호"
            onInput={(e) => handleNumberInput(e, secondInputRef)}
            maxLength="6"
            ref={firstInputRef}
          />
          <Text>-</Text>
          <RegistrationInput2
            type="password"
            onInput={handleNumberInput}
            placeholder="뒷자리입력"
            maxLength="7"
            ref={secondInputRef}
          />
        </RegiInputBox>
        <FindIdWrap>
          <FindId onClick={onClickFindId}>아이디 찾기</FindId>
        </FindIdWrap>
      </Inpst>
      <ConBoxWrapper>
        <AnotherContinue>
          <GoLogin onClick={onClickLogin}>로그인하러가기</GoLogin>
        </AnotherContinue>
        <ContinueBox>계속하기</ContinueBox>
      </ConBoxWrapper>
    </FindByEmailWarp>
  );
};

export default FindPassword;
