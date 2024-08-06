import styled from "styled-components";

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

  input {
    border: none; /* 테두리 제거 */
    outline: none; /* 포커스 시 외곽선 제거 */
    background: transparent; /* 배경 투명 */
    width: 100%; /* 전체 너비 */
    padding: 8px; /* 적절한 여백 추가 */
    box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */
    border-bottom: 1px solid #d0d0d0; /* 얇은 회색 밑줄 추가 */
    font-size: 18px;
  }
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
`;

const Input2Container = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
`;
const Input2Box = styled.div`
  width: 30px;
`;
const RegistrationInput2 = styled.input`
  margin: 0 5px;
  /* background-color: red; */
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 외곽선 제거 */
  background: transparent; /* 배경 투명 */
  border-bottom: 1px solid #d0d0d0; /* 얇은 회색 밑줄 추가 */
  font-size: 18px;
  padding: 8px; /* 적절한 여백 추가 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */
`;

const Text = styled.div`
  width: 10%;
  font-size: 15px;
  color: black;
  font-weight: bold;
  text-align: center;
`;
const TextWrapperRow = styled.div`
  display: flex; /* 가로 정렬 */
  justify-content: center; /* 가운데 정렬 */
  align-items: flex-end;
  width: 180px; /* 전체 너비 */
  margin-top: 20px; /* 상단 여백 추가 */
`;

const handleNumberInput = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

// 모든 요소를 포함하는 App 컴포넌트
const SignUp = () => {
  return (
    <Screen>
      <OverlapGroupWrapper>
        <OverlapGroup>
          <Rectangle>
            <TextWrapper1>회원가입</TextWrapper1>
            <TextWrapper>
              <input type="text" placeholder="이름" />
            </TextWrapper>
            <TextWrapper>
              <input type="text" placeholder="이메일" />
            </TextWrapper>
            <TextWrapper>
              <input type="password" placeholder="패스워드" />
            </TextWrapper>
            <TextWrapper>
              <TextWrapperRow>
                <RegistrationInput
                  placeholder="주민등록번호"
                  onInput={handleNumberInput}
                  maxLength="6"
                />
                <Text>-</Text>
                <Input2Container>
                  <Input2Box>
                    <RegistrationInput2
                      onInput={handleNumberInput}
                      maxLength="1"
                    />
                  </Input2Box>
                  <Text>*</Text>
                  <Text>*</Text>
                  <Text>*</Text>
                  <Text>*</Text>
                  <Text>*</Text>
                  <Text>*</Text>
                </Input2Container>
              </TextWrapperRow>
            </TextWrapper>
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
