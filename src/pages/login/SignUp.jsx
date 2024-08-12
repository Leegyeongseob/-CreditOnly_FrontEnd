import styled, { keyframes } from "styled-components";
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginAxios from "../../axiosapi/LoginAxios";
import emailjs from "emailjs-com";
import Modal from "../../common/utils/Modal";
import Common from "../../common/Common";
import termNote from "../../img/loginImg/findglass.png";
import { UserEmailContext } from "../../contextapi/UserEmailProvider";
const TitleDiv = styled.div`
  width: 100%;
  height: 23%;
  display: flex;
  justify-content: first baseline;
  align-items: center;
  font-size: 40px;
  font-weight: 900;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000;
`;
const InputDiv = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const InputDetailDiv = styled.div`
  width: 100%;
  height: 27%;
  gap: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .InputClass {
    width: 100%;
    height: 70%;
    padding-left: 20px;
    border: none;
    border-bottom: 0.21vh solid gray;
    background-color: transparent;
    font-size: 23px;
    font-weight: bolder;
    outline: none;
    &::placeholder {
      font-size: 2.5vh;
      color: gray;
      font-weight: normal;
      font-style: italic;
      opacity: 0.5;
    }
  }
  & > .InputEmail,
  .InputCode {
    width: 100%;
    height: 70%;
    padding-left: 20px;
    border: none;
    border-bottom: 0.21vh solid gray;
    background-color: transparent;
    font-size: 23px;
    font-weight: bolder;
    outline: none;
    &::placeholder {
      font-size: 2.5vh;
      color: gray;
      font-weight: normal;
      font-style: italic;
      opacity: 0.5;
    }
  }
`;
const Empty = styled.div`
  width: 2%;
  height: 2vh;
`;
const EmailAthouized = styled.div`
  width: 12%;
  height: 70%;
  border-radius: 10px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? "#367EE9" : "#fff")};
  outline: none;
  box-shadow: 0 6px 9px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  color: ${({ isActive }) => (isActive ? "#fff" : "gray")};
  font-weight: 600;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#fff" : "#367EE9")};
    color: ${({ isActive }) => (isActive ? "gray" : "#fff")};
  }
`;
const RegisterationInput1 = styled.input`
  width: 45%;
  height: 70%;
  padding-left: 20px;
  border: none;
  border-bottom: 0.21vh solid gray;
  background-color: transparent;
  font-size: 23px;
  font-weight: bolder;
  outline: none;
  &::placeholder {
    font-size: 2.5vh;
    color: gray;
    font-weight: normal;
    font-style: italic;
    opacity: 0.5;
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
  width: 52%;
  height: 70%;
  padding-left: 20px;
  border: none;
  border-bottom: 0.21vh solid gray;
  background-color: transparent;
  font-size: 23px;
  font-weight: bolder;
  outline: none;
  &::placeholder {
    font-size: 2.5vh;
    color: gray;
    font-weight: normal;
    font-style: italic;
    opacity: 0.5;
  }
`;
const TermsText = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: gray;
  display: flex;
  align-items: center;
  font-style: italic;
  opacity: 0.7;
`;
const ButtonDiv = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignupButton = styled.div`
  width: 70%;
  height: calc(10px + 5vh);
  background-color: ${({ isActive }) =>
    isActive ? "rgba(99, 56, 255, 0.4)" : "#367EE9"};
  border-radius: 12px;
  font-size: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: italic;
  color: #fff;
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
const InputDetailDiv2 = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;

  & > .lookBtn {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > .lookBtn > div {
    width: 80%;
    height: 90%;
  }
`;
const Message = styled.div`
  width: 100%;
  font-size: 15px;
  display: flex;
  justify-content: center;
  color: ${({ isCorrect }) => (isCorrect ? "green" : "red")};
`;
const TermsForm = styled.div`
  width: 400px;
  height: 56%;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  overflow-y: auto;
`;
// focus-in-expand 애니메이션 정의
const focusInExpand = keyframes`
0% {
  transform: scale(0.5);
  opacity: 0;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;
const TermImgDiv = styled.div`
  width: 1200px;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  background-image: url(${termNote});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${focusInExpand} 0.5s ease-in-out; /* 애니메이션 적용 */
`;
const TermsTitle = styled.div`
  font-size: 24px; /* Adjust size as needed */
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

const TermsContent = styled.p`
  font-size: 15px; /* Adjust size as needed */
  font-weight: 500;
  line-height: 1.4; /* Adjust line height for better readability */
  color: #333; /* Darker text color */
`;

const TermsActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > .termAgree {
    height: auto;
    display: flex;
    height: auto;
  }
`;

const TermsCheckbox = styled.input`
  margin-right: 10px;
`;

const TermsLabel = styled.label`
  display: block;
  width: 150px;
  height: auto;
  font-size: 15px; /* Adjust size as needed */
`;

const TermsButton = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 17px; /* Adjust size as needed */
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "#8e3636" : "rgba(0, 0, 0, 0.2)"};
  }
`;

const TermsScrollableContent = styled.div`
  max-height: calc(100% - 100px);
  overflow-y: auto;
`;

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
const LoginWrapping = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// 모든 요소를 포함하는 App 컴포넌트
const SignUp = () => {
  // 키보드 입력
  const [inputEmail, setInputEmail] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [inputPwdCheck, setInputPwdCheck] = useState("");
  // 유효성 확인
  const [isId, setIsId] = useState("");
  const [isPwd, setIsPwd] = useState("");
  const [isPwdCheack, setIsPwdCheck] = useState("");
  const [isCode, setIsCode] = useState(false);
  //이메일 보낸 후 상태 저장.
  const [isEmailSent, setIsEmailSent] = useState(false);
  //인증코드 저장
  const [saveCertificationCode, setSaveCertificationCode] = useState(null);
  //인증 확인 상태
  const [isEmail, setIsEmail] = useState(false);
  // 에러 메세지
  const [idMessage, setIdMessage] = useState("");
  const [pwdMessage, setPwMessage] = useState("");
  //비밀번호 확인 메세지
  const [pwdCheckMessage, setPwdCheckMessage] = useState("");
  //주민등록번호 표현 상태 변수
  const [rrnFirstPart, setRrnFirstPart] = useState("");
  const [rrnSecondPart, setRrnSecondPart] = useState("");
  // 유효한 주민등록번호인지 확인
  const [isRrnValid, setIsRrnValid] = useState(false);
  //주민등록번호 메세지
  const [isRrnValidMessage, setIsRrnValidMessage] = useState("");
  // 이름 입력
  const [inputName, setInputName] = useState("");
  // 약관 보기 버튼 클릭 상태 변수
  const [isTermClickBtn, setIsTermClickBtn] = useState(false);
  // 약관 동의 체크 버튼
  const [isTermAccepted, setIsTermAccepted] = useState(false);
  // 모달 내용 변경
  const [modalContent, setModalContent] = useState("");
  // 모달 해더
  const [headerContents, SetHeaderContents] = useState("");
  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  //ContextApi로 email관리하기
  const { setEmail, setImgUrl } = useContext(UserEmailContext);

  const navigate = useNavigate();
  //카카오 로그인 props
  const location = useLocation();
  const { kakaoProp, kakaoEmail, kakaopwd, kakaoName, kakaoImgUrl } =
    location.state || {};
  const closeModal = () => {
    setModalOpen(false);
  };
  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setInputEmail(e.target.value);
    if (!emailRegex.test(e.target.value)) {
      setIdMessage("이메일 형식이 올바르지 않습니다.");
      setIsId(false);
    } else {
      emailIsExist(e.target.value);
    }
  };
  // // 이메일 중복 체크하는 함수
  const emailIsExist = async (input) => {
    const response = await LoginAxios.emailIsExist(input);
    if (response.data) {
      setIdMessage("중복된 이메일입니다.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식 입니다.");
      setIsId(true);
    }
  };

  // 비밀번호 8자리 이상.
  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPwd(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPwd(false);
    } else {
      setPwMessage("안전한 비밀번호입니다.)");
      setIsPwd(true);
    }
  };
  // 비밀번호 일치 확인
  const onCheckPw = (e) => {
    const passwordInput = e.target.value;
    setInputPwdCheck(passwordInput);
    if (passwordInput !== inputPwd) {
      setPwdCheckMessage("일치하지 않습니다.");
      setIsPwdCheck(false);
    } else {
      setPwdCheckMessage("일치합니다.");
      setIsPwdCheck(true);
    }
  };
  //주민등록번호 앞 6자리 숫자 유효성검사
  const handleRrnFirstPartChange = (e) => {
    const inputValue = e.target.value;

    if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 6) {
      setRrnFirstPart(inputValue);
      vaildRrn(inputValue, rrnSecondPart);
    }
  };
  //주민등록번호 뒤 1자리 숫자 유효성검사 후 6자리 입력
  const handleRrnSecondPartChange = (e) => {
    const inputValue = e.target.value;

    if (/^[1-4]?[0-9]*$/.test(inputValue) && inputValue.length <= 7) {
      setRrnSecondPart(inputValue);
      vaildRrn(rrnFirstPart, inputValue);
    }
  };
  // 유효성 검사 로직 추가
  const vaildRrn = (rrnFirstPartValue, rrnSecondPartValue) => {
    if (rrnFirstPartValue.length === 6 && rrnSecondPartValue.length === 7) {
      setIsRrnValid(true);
      setIsRrnValidMessage("유효합니다.");
    } else {
      setIsRrnValid(false);
      setIsRrnValidMessage("값이 유효하지 않습니다.");
    }

    if (rrnSecondPartValue === "" && rrnFirstPartValue === "") {
      setIsRrnValidMessage("");
    }
  };
  // 버튼 클릭 상태 업데이트
  const handleTermLookBtnClick = () => {
    setIsTermClickBtn(true);
  };

  // 체크박스 상태 업데이트
  const handleCheckboxChange = (e) => {
    setIsTermAccepted(e.target.checked);
  };

  // 동의 버튼 클릭 핸들러
  const handleAgreeButtonClick = () => {
    if (isTermAccepted) {
      setIsTermClickBtn(false);
    }
  };
  // 이름 변수에 저장
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  //주민등록번호 따로 받은 자리 합치는 함수
  const combineRRN = (firstPart, secondPart) => {
    // 계산 수행
    return firstPart + secondPart;
  };
  //회원가입 비동기 함수
  const signUpAxios = async (
    inputEmail,
    inputPwd,
    inputName,
    rrnFirstPart,
    rrnSecondPart
  ) => {
    const combinedRnn = combineRRN(rrnFirstPart, rrnSecondPart);
    try {
      const response = await LoginAxios.memberSignUp(
        inputEmail,
        inputPwd,
        inputName,
        combinedRnn
      );
      if (
        response.data === "Success" &&
        isEmail &&
        isCode &&
        isPwd &&
        isPwdCheack &&
        rrnFirstPart &&
        rrnSecondPart &&
        inputName &&
        isTermAccepted
      ) {
        navigate("/login");
      } else if (
        response.data === "Success" &&
        rrnFirstPart &&
        rrnSecondPart &&
        isTermAccepted
      ) {
        kakaoLogin(kakaoEmail, kakaopwd);
        setImgUrl(kakaoImgUrl);
        navigate("/mainpage");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //카카오로 온 경로
  const kakaoBtnOnClickHandler = () => {
    signUpAxios(kakaoEmail, kakaopwd, kakaoName, rrnFirstPart, rrnSecondPart);
  };
  //카카오 바로 로그인
  const kakaoLogin = async (kakoEmailvalue, kakaoPwdValue) => {
    try {
      const response = await LoginAxios.login(kakoEmailvalue, kakaoPwdValue);
      if (response.data.grantType === "bearer") {
        console.log("이거 : " + kakoEmailvalue);
        console.log("제발 : " + kakaoPwdValue);
        console.log("accessToken : ", response.data.accessToken);
        console.log("refreshToken : ", response.data.refreshToken);
        Common.setAccessToken(response.data.accessToken);
        Common.setRefreshToken(response.data.refreshToken);
        setEmail(kakoEmailvalue);
      } else {
        setModalOpen(true);
        SetHeaderContents("로그인 에러");
        setModalContent("암호화에 실패했습니다.");
      }
    } catch (error) {
      console.log(error);
      setModalOpen(true);
      SetHeaderContents("로그인 에러");
      setModalContent("계정이 없습니다.");
    }
  };
  // 회원가입 버튼을 클릭했을 경우 함수
  const signupBtnOnclickHandler = () => {
    signUpAxios(inputEmail, inputPwd, inputName, rrnFirstPart, rrnSecondPart);
  };

  // 이메일 인증 버튼 handler
  const emailCertificationBtnHandler = () => {
    if (isId) {
      sendVerificationEmail(inputEmail);
    }
  };
  // 이메일 전송시 파라미터 넘기는 함수
  const sendVerificationEmail = async (toEmail) => {
    const certificationCode = Math.floor(Math.random() * 900000) + 100000; // 100000부터 999999까지의 난수 발생
    setSaveCertificationCode(certificationCode);
    // 이메일 보내기
    // 여기서 정의해야 하는 것은 위에서 만든 메일 템플릿에 지정한 변수({{ }})에 대한 값을 담아줘야 한다.
    const templateParams = {
      toEmail: toEmail, // 수신 이메일
      toName: "고객님",
      certificationCode: certificationCode,
    };
    try {
      const response = await emailjs.send(
        "service_lwk6ny9", // 서비스 ID
        "service_lwk6ny9", // 템플릿 ID
        templateParams,
        "VKzT47hXDU3sC3R13" // public-key
      );
      console.log("이메일이 성공적으로 보내졌습니다:", response);
      setIdMessage("이메일이 성공적으로 보내졌습니다!");
      setIsId(true);
      setIsEmailSent(true);
      // 이메일 전송 성공 처리 로직 추가
    } catch (error) {
      console.error("이메일 보내기 실패:", error);
      setIdMessage("이메일 보내기 실패했습니다!");
      setIsId(false);
      setIsEmailSent(false);
      // 이메일 전송 실패 처리 로직 추가
    }
  };
  // 코드 확인 버튼 이벤트
  const emailCertificationCodeOnClick = () => {
    SetHeaderContents("인증코드확인");
    setModalOpen(true);
    setModalContent("확인되었습니다.");
    setIsCode(true);
  };
  //코드 모달 확인
  const codeModalOkBtnHandler = () => {
    closeModal();
    setIsEmail(true);
  };
  return (
    <Screen>
      <OverlapGroupWrapper>
        <OverlapGroup>
          <Rectangle>
            <LoginWrapping>
              <TitleDiv>{kakaoProp ? "Write More" : "Create Account"}</TitleDiv>
              <Modal
                open={modalOpen}
                header={headerContents}
                type={true}
                confirm={codeModalOkBtnHandler}
              >
                {modalContent}
              </Modal>
              <InputDiv>
                {!kakaoProp && (
                  <>
                    <InputDetailDiv>
                      <input
                        className="InputEmail"
                        value={inputEmail}
                        onChange={onChangeEmail}
                        placeholder="Email Address"
                      />
                      <Empty></Empty>
                      <EmailAthouized
                        isActive={isId}
                        onClick={emailCertificationBtnHandler}
                      >
                        Send
                      </EmailAthouized>
                    </InputDetailDiv>
                    {inputEmail && (
                      <Message isCorrect={isId}>{idMessage}</Message>
                    )}
                  </>
                )}
                {isEmailSent && (
                  <InputDetailDiv>
                    <input
                      className="InputCode"
                      value={saveCertificationCode}
                      placeholder="Email Code"
                      onChange={(e) => {
                        setSaveCertificationCode(e.target.value);
                      }}
                    />
                    <Empty></Empty>
                    <EmailAthouized
                      isActive={isEmailSent}
                      onClick={emailCertificationCodeOnClick}
                    >
                      check
                    </EmailAthouized>
                  </InputDetailDiv>
                )}
                {!kakaoProp && (
                  <>
                    <InputDetailDiv>
                      <input
                        type="password"
                        placeholder="Password"
                        className="InputClass"
                        value={inputPwd}
                        onChange={onChangePw}
                      />
                    </InputDetailDiv>
                    {inputPwd && (
                      <Message isCorrect={isPwd}>{pwdMessage}</Message>
                    )}
                  </>
                )}
                {!kakaoProp && (
                  <>
                    <InputDetailDiv>
                      <input
                        type="password"
                        placeholder="Password Check"
                        className="InputClass"
                        value={inputPwdCheck}
                        onChange={onCheckPw}
                      />
                    </InputDetailDiv>
                    {inputPwdCheck && (
                      <Message isCorrect={isPwdCheack}>
                        {pwdCheckMessage}
                      </Message>
                    )}
                  </>
                )}
                {!kakaoProp && (
                  <InputDetailDiv>
                    <input
                      className="InputClass"
                      placeholder="Full Name"
                      value={inputName}
                      onChange={handleInputName}
                    />
                  </InputDetailDiv>
                )}
                <InputDetailDiv>
                  <RegisterationInput1
                    pattern="[0~9]+"
                    value={rrnFirstPart}
                    placeholder="Social"
                    onChange={handleRrnFirstPartChange}
                  />
                  <Text> - </Text>
                  <RegisterationInput2
                    pattern="[0~9]+"
                    value={rrnSecondPart}
                    placeholder="Security Number"
                    onChange={handleRrnSecondPartChange}
                  />
                </InputDetailDiv>
                <Message isCorrect={isRrnValid}>{isRrnValidMessage}</Message>
                <InputDetailDiv2>
                  <TermsText>View Terms</TermsText>
                  <Empty />
                  <div className="lookBtn">
                    <EmailAthouized
                      isActive={true}
                      onClick={handleTermLookBtnClick}
                    >
                      Check
                    </EmailAthouized>
                  </div>
                </InputDetailDiv2>
                <TermImgDiv isOpen={isTermClickBtn}>
                  <TermsForm>
                    <TermsTitle>계정 사용에 관한 약관</TermsTitle>
                    <TermsScrollableContent>
                      <TermsContent>
                        1. **계정 생성 및 관리** <br />
                        &nbsp;1.1. 회원은 본 약관에 동의하고, 본 서비스에서
                        제공하는 절차에 따라 회원가입을 완료해야 합니다. <br />
                        &nbsp;1.2. 회원은 본인의 이메일 주소를 사용하여 하나의
                        계정만을 생성할 수 있습니다. <br />
                        &nbsp;1.3. 회원은 본인의 계정 정보를 타인과 공유하거나
                        양도할 수 없습니다. <br /> <br />
                        2. **회원 정보의 정확성** <br />
                        &nbsp;2.1. 회원은 회원가입 시 제공한 정보가 정확하고
                        최신 정보임을 보장해야 합니다. <br />
                        &nbsp;2.2. 회원정보가 변경된 경우, 회원은 즉시 본
                        서비스에 이를 업데이트해야 합니다. <br /> <br />
                        3. **계정 보안** <br />
                        &nbsp;3.1. 회원은 본인의 계정 비밀번호를 안전하게
                        관리해야 하며, 비밀번호 유출로 인한 모든 책임은 회원에게
                        있습니다. <br />
                        &nbsp;3.2. 회원은 계정의 무단 사용을 인지한 경우 즉시 본
                        서비스에 이를 통보해야 합니다. <br /> <br />
                        4. **서비스 이용** <br />
                        &nbsp;4.1. 회원은 본 서비스를 법령 및 본 약관에 따라
                        이용해야 합니다.
                        <br />
                        &nbsp;4.2. 회원은 본 서비스를 이용하여 불법 행위, 타인의
                        권리를 침해하는 행위를 해서는 안 됩니다. <br /> <br />
                        5. **계정 정지 및 해지** <br />
                        &nbsp;5.1. 회원이 본 약관을 위반한 경우, 본 서비스는
                        사전 통지 없이 회원의 계정을 일시 정지하거나 해지할 수
                        있습니다. <br />
                        &nbsp;5.2. 회원은 언제든지 본 서비스에 요청하여 계정을
                        해지할 수 있습니다. <br /> <br />
                        6. **책임 제한** <br />
                        &nbsp;6.1. 본 서비스는 회원의 귀책사유로 인한 계정 사용
                        상의 문제에 대해 책임을 지지 않습니다. <br />
                        &nbsp;6.2. 본 서비스는 회원 간 또는 회원과 제 3자 간의
                        분쟁에 대해 관여하지 않으며, 이에 대한 책임을 지지
                        않습니다. <br /> <br />
                        7. **약관의 변경** <br />
                        &nbsp;7.1. 본 서비스는 필요 시 본 약관을 변경할 수
                        있으며, 변경된 약관은 회원에게 공지한 후 효력이
                        발생합니다. <br />
                        &nbsp;7.2. 회원이 변경된 약관에 동의하지 않을 경우,
                        회원은 계정 해지를 통해 이용 계약을 종료할 수 있습니다.
                      </TermsContent>
                    </TermsScrollableContent>
                    <TermsActions>
                      <div className="termAgree">
                        <TermsCheckbox
                          type="checkbox"
                          checked={isTermAccepted}
                          onChange={handleCheckboxChange}
                        />
                        <TermsLabel>약관에 동의합니다.</TermsLabel>
                      </div>
                      <TermsButton
                        onClick={handleAgreeButtonClick}
                        disabled={!isTermAccepted}
                        isActive={isTermAccepted}
                      >
                        동의
                      </TermsButton>
                    </TermsActions>
                  </TermsForm>
                </TermImgDiv>
              </InputDiv>
              <Empty />
              {kakaoProp ? (
                <ButtonDiv>
                  <SignupButton
                    isActive={isRrnValid && isTermAccepted}
                    onClick={kakaoBtnOnClickHandler}
                  >
                    Credit Account
                  </SignupButton>
                </ButtonDiv>
              ) : (
                <ButtonDiv>
                  <SignupButton
                    isActive={
                      isEmail &&
                      isCode &&
                      isPwd &&
                      isPwdCheack &&
                      isRrnValid &&
                      inputName &&
                      isTermAccepted
                    }
                    onClick={signupBtnOnclickHandler}
                  >
                    Credit Account
                  </SignupButton>
                </ButtonDiv>
              )}
            </LoginWrapping>
          </Rectangle>
        </OverlapGroup>
      </OverlapGroupWrapper>
    </Screen>
  );
};

export default SignUp;
