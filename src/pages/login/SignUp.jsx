import styled from "styled-components";
import { useRef, useState } from "react";

// 전체 화면을 감싸는 컨테이너
const Screen = styled.div`
  background-color: #87cefa;
  display: flex;
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 가로 방향으로 중앙 정렬 */
  justify-content: center; /* 세로 방향으로 중앙 정렬 */
  width: 100vw; /* 전체 화면 너비 */
  height: 100vh; /* 전체 화면 높이 */
  overflow: hidden; /* 내용이 화면을 넘어가지 않도록 */
`;

// 상위 래퍼
const OverlapGroupWrapper = styled.div`
  background-color: #87cefa;
  height: 100%;
  width: 100%; /* 화면 너비에 맞게 조정 */
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

// 오버랩 그룹
const OverlapGroup = styled.div`
  height: 100%;
  width: 100%; /* 화면 너비에 맞게 조정 */
  max-width: 4000px; /* 최대 너비 설정 */
  position: relative;
`;

// 사각형
const Rectangle = styled.div`
  background-color: #ffffff;
  border-top-left-radius: 38px;
  border-bottom-left-radius: 38px;
  height: 100%;
  width: 60%;
  position: relative;
  display: flex;
  left: calc(40%); /* 중앙 배치: 좌우 중앙 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 가로 방향으로 중앙 정렬 */
  justify-content: center; /* 세로 방향으로 중앙 정렬 */
`;
// 텍스트 래퍼
const TextWrapper = styled.div`
  color: #a0a0a0;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 50px;
  width: 50%;
  padding: 15px;
  text-align: center;
  margin-top: 20px; /* 상단 여백 추가 */
  input {
    border: none; /* 테두리 제거 */
    outline: none; /* 포커스 시 외곽선 제거 */
    background: transparent; /* 배경 투명 */
    width: 70%; /* 전체 너비 */
    padding: 8px; /* 적절한 여백 추가 */
    box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */
    border-bottom: 1px solid #d0d0d0; /* 얇은 회색 밑줄 추가 */
    text-align: start;
    font-size: 18px;
    min-width: 250px;
  }
`;
const RegWrapper = styled.div`
  color: #a0a0a0;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  height: 50px;
  width: 50%;
  padding: 15px;
  text-align: center;
  margin-top: 20px; /* 상단 여백 추가 */
`;
// 버튼 래퍼
const BtnWrapper = styled.div`
  align-items: center; /* 중앙 정렬 */
  background-color: #367de8;
  border-radius: 10px;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  width: 60%;
  height: 5%;
  margin-top: 30px; /* 입력창들과 버튼 사이의 간격 조정 */
`;
// 버튼 텍스트
const TextBtn = styled.div`
  color: #ffffff;
  font-family: "Poppins-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  width: fit-content;
`;

// 큰 텍스트
const TextWrapper1 = styled.div`
  color: #000000;
  font-family: "Poppins-SemiBold", Helvetica;
  font-size: 30px;
  font-weight: 600;
  height: 38px;
  text-align: center;
  margin-bottom: 20px; /* 사각형과의 간격 조정 */
  position: absolute;
  top: 10%;
  width: 100%;
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
  height: 50px;
  margin: 0 5px; /* 좌우 간격 추가 */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 외곽선 제거 */
  background: transparent; /* 배경 투명 */
  border-bottom: 1px solid #d0d0d0; /* 얇은 회색 밑줄 추가 */
  font-size: 18px;
  padding: 8px; /* 적절한 여백 추가 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */
  max-width: 30%; /* 최대 너비 설정 */
  min-width: 120px;
  &::placeholder {
    font-size: 14px; /* placeholder 폰트 크기 설정 */
    color: grey; /* placeholder 색상 설정 */
  }
`;
const RegistrationInput2 = styled.input`
  height: 50px;
  margin: 0 5px;
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 외곽선 제거 */
  background: transparent; /* 배경 투명 */
  border-bottom: 1px solid #d0d0d0; /* 얇은 회색 밑줄 추가 */
  font-size: 18px;
  padding: 8px; /* 적절한 여백 추가 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */
  max-width: 35%;
  min-width: 100px;
  &::placeholder {
    font-size: 14px; /* placeholder 폰트 크기 설정 */
    color: grey; /* placeholder 색상 설정 */
  }
`;
const SizeTest = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
`;
const Text = styled.div`
  width: auto;
  font-size: 15px;
  color: black;
  font-weight: bold;
  text-align: center;
`;
const TextWrapperRow = styled.div`
  display: flex; /* 가로 정렬 */
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  width: 100%; /* 전체 너비 */
`;
const EmailBox = styled.div`
  width: 100%;
  height: 7%;
  /* background-color: aqua; */
  justify-content: center;
  align-items: end;
  display: flex;
`;
const Transmission = styled.div`
  display: flex;
  cursor: pointer;
  background-color: #ff0000;
  color: #367de8;
  border-radius: 7px;
  /* border: 1px solid gray; */
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  height: 50%;
  width: 10%;
  max-width: 70px;
`;
// 모든 요소를 포함하는 App 컴포넌트
const SignUp = () => {
  const [emailPrefix, setEmailPrefix] = useState("");
  const [domain, setDomain] = useState("google.com");
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const handlePrefixChange = (e) => {
    setEmailPrefix(e.target.value);
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const completeEmail = `${emailPrefix}@${domain}`;
  const handleNumberInput = (e, nextInputRef) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    if (e.target.value.length === e.target.maxLength && nextInputRef) {
      nextInputRef.current?.focus(); // nextInputRef가 존재할 때만 포커스 이동
    }
  };
  return (
    <Screen>
      <OverlapGroupWrapper>
        <OverlapGroup>
          <Rectangle>
            <TextWrapper1>회원가입</TextWrapper1>
            <TextWrapper>
              <input type="text" placeholder="이름" />
            </TextWrapper>
            <EmailBox>
              <TextWrapper>
                <input type="text" placeholder="이메일" />
              </TextWrapper>
              <Transmission>전송</Transmission>
            </EmailBox>
            <TextWrapper>
              <input type="password" placeholder="패스워드" />
            </TextWrapper>
            <TextWrapper>
              <input type="password" placeholder="패스워드 재입력" />
            </TextWrapper>
            <RegWrapper>
              <TextWrapperRow>
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
              </TextWrapperRow>
            </RegWrapper>
            {/* <SizeTest></SizeTest> */}
            <BtnWrapper>
              <TextBtn>CREATE ACCOUNT</TextBtn>
            </BtnWrapper>
          </Rectangle>
        </OverlapGroup>
      </OverlapGroupWrapper>
    </Screen>
  );
};

export default SignUp;
