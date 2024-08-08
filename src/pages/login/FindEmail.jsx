import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAxios from "../../axiosapi/LoginAxios";
import Modal from "../../common/utils/ImageModal";
import findIdImg from "../../img/loginImg/아이디찾기.gif";

const InputDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ButtonDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
`;
const FindButtonDiv = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FindButton = styled.div`
  width: 200px;
  height: 50%;
  background-color: ${({ isActive }) =>
    isActive ? "rgba(99, 56, 255, 0.4)" : "#fff"};
  border-radius: 12px;
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  color: #5A3092;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.1)"};
  }
`;
const InputDetailDiv = styled.div`
  width: 100%;
  height: 27%;
  display: flex;
  gap: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .InputClass {
    width: 90%;
    height: 70%;
    border-radius: 0.521vw;
    border: 1px solid #000;
    outline: none;
    box-shadow: 0 6px 9px rgba(0, 0, 0, 0.3);
    padding-left: 5px;
    font-size: 3vh;
    padding-left: 10px;
    font-weight: 600;
    &::placeholder {
    text-align: center;
    font-size: 2.5vh;
    color: #5A3092;
    opacity: 0.5;
    font-weight: normal;
    font-style: italic;
  }
  }
`;

const RegisterationInput1 = styled.input`
  width: 40%;
  height: 70%;
  border-radius: 0.521vw;
  border: 1px solid #000;
  outline: none;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.3);
  padding-left: 5px;
  font-size: 3vh;
  padding-left: 10px;
  font-weight: 600;
  &::placeholder {
    text-align: center;
    font-size: 2.5vh;
    color: #5A3092;
    opacity: 0.5;
    font-weight: normal;
    font-style: italic;
  }
`;
const Text = styled.div`
  width: 3%;
  height: 70%;
  font-weight: bolder;
  font-size: 15px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RegisterationInput2 = styled.input`
  width: 47%;
  height: 70%;
  border-radius: 0.521vw;
  border: 1px solid #000;
  outline: none;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.3);
  padding-left: 5px;
  font-size: 3vh;
  padding-left: 10px;
  font-weight: 600;
  &::placeholder {
    text-align: center;
    font-size: 2.5vh;
    color: #5A3092;
    opacity: 0.5;
    font-weight: normal;
    font-style: italic;
  }
`;

const Message = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  color: ${({ isCorrect }) => (isCorrect ? "green" : "red")};
`;
const FindByEmailWarp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FindEmailText = styled.div`
  width:100%;
  height: 40%;
  font-size: 55px;
  color:#fff;  
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;
const FindEmailTextDetail = styled.div`
  width:100%;
  height: 20%;
  color:#fff;  
  font-size:22px;
  font-weight: 600;
`;
const FindEmailWarp = styled.div`
  width:80%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FindByPwd = styled.div`
  width:100%;
  height: 20%;
  font-size: 20px;
  color:#fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  &:hover{
    color:#367EE9;
    font-size: 21px;
  }
`;
const GoToLoginPage = styled.div`
  width:80%;
  height:100%;
  margin-right: 20px;
  &>.remember{
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: end;
    align-items: end;
    font-size: 20px;
  }
  &>.backToLogin{
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: end;
    align-items: first baseline;
    font-weight: 600;
    font-size:35px;
    cursor: pointer;
    &:hover{
      color:#367EE9;
      font-size: 36px;
    }
  }
`;
const NavigateDiv = styled.div`
  width:100%;
  height: 80%;
  display: flex;
`;
const FindEmail = () => {
  const navigate = useNavigate();

    //주민등록번호 표현 상태 변수
    const [rrnFirstPart, setRrnFirstPart] = useState("");
    const [rrnSecondPart, setRrnSecondPart] = useState("");
    // 유효한 주민등록번호인지 확인
    const [isRrnValid, setIsRrnValid] = useState(false);
    //주민등록번호 메세지
    const [isRrnValidMessage, setIsRrnValidMessage] = useState("");
    // 이름값 저장
    const [Name, setName] = useState("");
  
    // 찾은 결과 ID값 저장
    const [email, setEmail] = useState("");
    // 모달 해더
    const [headerContents, SetHeaderContents] = useState("");
    // 모달 내용
    const [modalContent, setModalContent] = useState("");
    //팝업 처리
    const [modalOpen, setModalOpen] = useState(false);
    //코드 모달 확인
    const codeModalOkBtnHandler = () => {
      closeModal();
      if (email !== "") {
        navigate("/login-page");
      }
    };
    const closeModal = () => {
      setModalOpen(false);
    };
    const findIdOnclickHandler = () => {
      findIdAxios();
    };
    // 아이디찾기 버튼 이벤트 및 결과 출력
    const findIdAxios = async () => {
      const combinedRnn = combineRRN(rrnFirstPart, rrnSecondPart);
      try {
        const showUserId = await LoginAxios.findIdResult(Name, combinedRnn);
        SetHeaderContents("아이디 확인");
        setModalOpen(true);
        if (showUserId.data === "") {
          setModalContent("잘못된 요청입니다. 입력 값을 확인해주세요.");
        } else {
          setModalContent(`아이디: ${showUserId.data} 입니다.`);
          setEmail(showUserId.data);
        }
        // console.log(showEmail);
      } catch (error) {
        console.log(error);
      }
    };
  
    // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
    //주민등록번호 앞 6자리 숫자 유효성검사
    const handleRrnFirstPartChange = (e) => {
      const inputValue = e.target.value;
  
      if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 6) {
        setRrnFirstPart(inputValue);
      }
  
      // 유효성 검사 로직 추가
      if (inputValue.length === 6 && rrnSecondPart.length === 1) {
        setIsRrnValid(true);
        setIsRrnValidMessage("유효합니다.");
      } else {
        setIsRrnValid(false);
        setIsRrnValidMessage("값이 유효하지 않습니다.");
      }
  
      if (inputValue === "" && rrnSecondPart === "") {
        setIsRrnValidMessage("");
      }
    };
    //주민등록번호 뒤 1자리 숫자 유효성검사
    const handleRrnSecondPartChange = (e) => {
      const inputValue = e.target.value;
  
      if (/^[1-4]{0,1}$/.test(inputValue) && inputValue.length <= 1) {
        setRrnSecondPart(inputValue);
      }
  
      // 유효성 검사 로직 추가
      if (rrnFirstPart.length === 6 && inputValue.length === 1) {
        setIsRrnValid(true);
        setIsRrnValidMessage("유효합니다.");
      } else {
        setIsRrnValid(false);
        setIsRrnValidMessage("값이 유효하지 않습니다.");
      }
  
      if (inputValue === "" && rrnFirstPart === "") {
        setIsRrnValidMessage("");
      }
    };
    //주민등록번호 따로 받은 자리 합치는 함수
    const combineRRN = (firstPart, secondPart) => {
      // 문자열을 숫자로 변환
      const firstNum = parseInt(firstPart, 10);
      const secondNum = parseInt(secondPart, 10);
  
      // 계산 수행
      return firstNum * 10 + secondNum;
    };
    // 이름 입력 함수
    const nameInputOnChange = (e) => {
      const name = e.target.value;
      setName(name);
    };

  return (
    <FindByEmailWarp>
         <Modal
        open={modalOpen}
        header={headerContents}
        type={true}
        confirm={codeModalOkBtnHandler}
        img={findIdImg}
      >
        {modalContent}
      </Modal>
      <FindEmailWarp>
      <InputDiv>
      <FindEmailText>Forgot<br/> Email?</FindEmailText>
      <FindEmailTextDetail>Don't warry. we can help.</FindEmailTextDetail>
        <InputDetailDiv>
          <input className="InputClass"   placeholder="Full Name" onChange={nameInputOnChange} />
        </InputDetailDiv>
        <>
          <InputDetailDiv>
            <RegisterationInput1
              placeholder="Social"
              value={rrnFirstPart}
              onChange={handleRrnFirstPartChange}
            />
            <Text> - </Text>
            <RegisterationInput2
              placeholder="Security Number" 
              value={rrnSecondPart}
              onChange={handleRrnSecondPartChange}
            />
          </InputDetailDiv>
          <Message isCorrect={isRrnValid}>{isRrnValidMessage}</Message>
        </>
      </InputDiv>
      <ButtonDiv>
        <FindByPwd onClick={()=>{navigate("/findbypwd")}}>I can't remember My Password.</FindByPwd>
        <NavigateDiv>
        <GoToLoginPage>
          <div className="remember">Remembered your login ID?</div>
          <div className="backToLogin" onClick={()=>{navigate("/login")}}>Back to Login</div>
        </GoToLoginPage>
        <FindButtonDiv>
        <FindButton onClick={findIdOnclickHandler}>Continue</FindButton>
        </FindButtonDiv>
        </NavigateDiv>
      </ButtonDiv>
      </FindEmailWarp>
    </FindByEmailWarp>
  );
};

export default FindEmail;
