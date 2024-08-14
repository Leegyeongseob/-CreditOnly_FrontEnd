import styled from "styled-components";
import back1 from "../../img/ad/image.png";
import { symbol } from "prop-types";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Basic = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: mediumorchid;
`;
const First = styled.div`
  width: 100%;
  height: 70%;
  max-height: 100vh;
  background-color: #d7f5dc;
`;
const Head = styled.div`
  width: 100%;
  height: 10%;
  max-height: 100px;
  /* background-color: brown; */
  display: flex;
  gap: 5%;
  justify-content: end;
  align-items: center;
  padding-right: 5%;
`;
const HeadBtn = styled.div`
  width: 15%;
  max-width: 200px;
  height: 50%;
  color: black;
  font-weight: bold;
  /* background-color: aqua; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeadBtnText = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;
  &:hover {
    color: #00b91f;
  }
`;
const IntroBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: #48ff66; */
`;
const IntroDetail = styled.div`
  width: 50%;
  height: 90%;
  max-width: 100vh;
  /* background-color: lightgray; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-left: 10%; */
  /* padding-top: 20%; */
`;
const IntroBigD = styled.div`
  color: black;
  width: 80%;
  height: 28%;
  font-size: min(4vw, 40px);
  font-weight: bold;
  word-wrap: break-word; /* 단어가 길 경우 줄바꿈 */
  word-break: break-all; /* 긴 단어가 있을 경우 줄바꿈 */
  white-space: normal; /* 텍스트 줄바꿈 허용 */
  justify-content: center;
  display: flex;
  /* background-color: aliceblue; */
`;
const DoorCloth = styled.div`
  font-size: min(2vw, 20px);
  width: 50%;
  max-width: 300px;
  min-width: 100px;
  height: 10%;
  max-height: 50px;
  border-radius: 10px;
  background-color: #00af09;
  color: white;
  word-wrap: break-word; /* 단어가 길 경우 줄바꿈 */
  word-break: break-all; /* 긴 단어가 있을 경우 줄바꿈 */
  white-space: normal; /* 텍스트 줄바꿈 허용 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;
const AdBackImage = styled.div`
  background-image: url(${back1});
  width: 70%;
  max-width: 800px;
  background-repeat: no-repeat;
  height: 90%;
  max-height: 800px;
  /* max-height: 400px; */
  /* background-color: #3ea4fd; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Google = styled.div`
  width: 100%;
  height: 30%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
`;

const SubscribeBox = styled.div`
  width: 50%;
  min-width: 350px;
  max-width: 700px;
  height: 80%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  /* background-color: black; */
`;
const SubTitle = styled.div`
  /* background-color: aquamarine; */
  width: 40%;
  height: 20%;
  color: #00af09;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 15px;
`;
const SubIntro = styled.div`
  /* background-color: darkorange; */
  color: black;
  font-size: clamp(14px, 1.8vw, 20px);
  width: 100%;
  height: 25%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const AdInquiry = () => {
  const [emailText, setEmailText] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit(); // 엔터 키와 버튼 클릭 모두 같은 함수 호출
    }
  };
  const handleSubmit = () => {
    console.log(emailText); // 입력된 값을 처리합니다.
    setEmailText(""); // 입력창을 초기화합니다.
  };
  const handleChange = (e) => {
    setEmailText(e.target.value);
  };
  const handleCopyClipBoard = (text) => {
    try {
      navigator.clipboard.writeText(text);
      alert("클립보드에 복사되었습니다");
    } catch (error) {
      alert("클립보드 복사에 실패했습니다");
    }
  };

  return (
    <Basic>
      <First>
        <Head>
          <HeadBtn>
            <HeadBtnText>Home</HeadBtnText>
          </HeadBtn>
          <HeadBtn>
            <HeadBtnText>About US</HeadBtnText>
          </HeadBtn>
          <HeadBtn>
            <HeadBtnText>Login</HeadBtnText>
          </HeadBtn>
        </Head>
        <IntroBox>
          <IntroDetail>
            <IntroBigD>
              신뢰와 정확성으로 고객의 금융 미래를 밝히는 광고, 우리와 함께
              시작하세요
            </IntroBigD>
            <DoorCloth
              onClick={() => handleCopyClipBoard("CreaditOnly@gmail.com")}
            >
              문의: CreditOnly@gmail.com
            </DoorCloth>
          </IntroDetail>
          <AdBackImage></AdBackImage>
        </IntroBox>
      </First>
      <Google>
        <SubscribeBox>
          <SubTitle>SUBSCRIBE</SubTitle>
          <SubIntro>
            메일을 남겨주시면 저희에 대한 최신 소식을 받으실 수 있습니다.
          </SubIntro>
        </SubscribeBox>
      </Google>
    </Basic>
  );
};
export default AdInquiry;
