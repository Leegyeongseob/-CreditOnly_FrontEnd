import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAxios from "../../axiosapi/LoginAxios";
import Modal from "../../common/utils/ImageModal";
import findIdImg from "../../img/loginImg/아이디찾기.gif";

const FindByEmailWarp = styled.div`
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
  outline: none; /* 포커스 시 외곽선 제거 */
  border-radius: 10px;
  background: white; /* 배경 투명 */
  border-color: grey;
  position: relative;
  width: 100%; /* 전체 너비 */
  padding: 8px; /* 적절한 여백 추가 */
  box-sizing: border-box; /* 패딩과 보더를 포함한 박스 사이징 설정 */

  font-size: 18px;
`;
const FindEmail = () => {
  //주민등록번호 표현 상태 변수
  // const [rrnFirstPart, setRrnFirstPart] = useState("");
  // const [rrnSecondPart, setRrnSecondPart] = useState("");
  // // 유효한 주민등록번호인지 확인
  // const [isRrnValid, setIsRrnValid] = useState(false);
  // //주민등록번호 메세지
  // const [isRrnValidMessage, setIsRrnValidMessage] = useState("");
  // // 이름값 저장
  // const [Name, setName] = useState("");

  // // 찾은 결과 ID값 저장
  // const [email, setEmail] = useState("");
  // // 모달 해더
  // const [headerContents, SetHeaderContents] = useState("");
  // // 모달 내용
  // const [modalContent, setModalContent] = useState("");
  // //팝업 처리
  // const [modalOpen, setModalOpen] = useState(false);
  // const navigate = useNavigate();
  // //코드 모달 확인
  // const codeModalOkBtnHandler = () => {
  //   closeModal();
  //   if (email !== "") {
  //     navigate("/login-page");
  //   }
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };
  // const findIdOnclickHandler = () => {
  //   findIdAxios();
  // };
  // // 아이디찾기 버튼 이벤트 및 결과 출력
  // const findIdAxios = async () => {
  //   const combinedRnn = combineRRN(rrnFirstPart, rrnSecondPart);
  //   try {
  //     const showUserId = await LoginAxios.findIdResult(Name, combinedRnn);
  //     SetHeaderContents("아이디 확인");
  //     setModalOpen(true);
  //     if (showUserId.data === "") {
  //       setModalContent("잘못된 요청입니다. 입력 값을 확인해주세요.");
  //     } else {
  //       setModalContent(`아이디: ${showUserId.data} 입니다.`);
  //       setEmail(showUserId.data);
  //     }
  //     // console.log(showEmail);
  //   } catch (error) {
  //     if (error.response) {
  //       // 서버가 응답했지만 상태 코드가 2xx 범위를 벗어나는 경우
  //       switch (error.response.status) {
  //         case 400:
  //           setModalContent("잘못된 요청입니다. 입력 값을 확인해주세요.");
  //           break;
  //         case 401:
  //           setModalContent("잘못된 요청입니다. 입력 값을 확인해주세요.");
  //           console.log();
  //           break;
  //         case 403:
  //           setModalContent("접근 권한이 없습니다.");
  //           break;
  //         case 404:
  //           setModalContent("서버를 찾을 수 없습니다.");
  //           break;
  //         case 500:
  //           setModalContent(
  //             "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요."
  //           );
  //           break;
  //         default:
  //           setModalContent(
  //             `오류가 발생했습니다: ${error.response.statusText}`
  //           );
  //       }
  //     } else if (error.request) {
  //       // 요청이 서버에 도달하지 못한 경우 (네트워크 오류 등)
  //       setModalContent("서버가 응답하지 않습니다.");
  //     } else {
  //       // 요청을 설정하는 중에 오류가 발생한 경우
  //       setModalContent(`오류가 발생했습니다: ${error.message}`);
  //     }
  //   }
  // };

  // // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  // //주민등록번호 앞 6자리 숫자 유효성검사
  // const handleRrnFirstPartChange = (e) => {
  //   const inputValue = e.target.value;

  //   if (/^[0-9]*$/.test(inputValue) && inputValue.length <= 6) {
  //     setRrnFirstPart(inputValue);
  //   }

  //   // 유효성 검사 로직 추가
  //   if (inputValue.length === 6 && rrnSecondPart.length === 1) {
  //     setIsRrnValid(true);
  //     setIsRrnValidMessage("유효합니다.");
  //   } else {
  //     setIsRrnValid(false);
  //     setIsRrnValidMessage("값이 유효하지 않습니다.");
  //   }

  //   if (inputValue === "" && rrnSecondPart === "") {
  //     setIsRrnValidMessage("");
  //   }
  // };
  // //주민등록번호 뒤 1자리 숫자 유효성검사
  // const handleRrnSecondPartChange = (e) => {
  //   const inputValue = e.target.value;

  //   if (/^[1-4]{0,1}$/.test(inputValue) && inputValue.length <= 1) {
  //     setRrnSecondPart(inputValue);
  //   }

  //   // 유효성 검사 로직 추가
  //   if (rrnFirstPart.length === 6 && inputValue.length === 1) {
  //     setIsRrnValid(true);
  //     setIsRrnValidMessage("유효합니다.");
  //   } else {
  //     setIsRrnValid(false);
  //     setIsRrnValidMessage("값이 유효하지 않습니다.");
  //   }

  //   if (inputValue === "" && rrnFirstPart === "") {
  //     setIsRrnValidMessage("");
  //   }
  // };
  // //주민등록번호 따로 받은 자리 합치는 함수
  // const combineRRN = (firstPart, secondPart) => {
  //   // 문자열을 숫자로 변환
  //   const firstNum = parseInt(firstPart, 10);
  //   const secondNum = parseInt(secondPart, 10);

  //   // 계산 수행
  //   return firstNum * 10 + secondNum;
  // };
  // // 이름 입력 함수
  // const nameInputOnChange = (e) => {
  //   const name = e.target.value;
  //   setName(name);
  // };

  return (
    <FindByEmailWarp>
      <Forgot>아이디 찾기</Forgot>
      <Inst placeholder="이름을 입력해주세요"></Inst>
      <Inst placeholder="주민번호를 입력해주세요"></Inst>
    </FindByEmailWarp>
  );
};

export default FindEmail;
