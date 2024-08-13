import styled from "styled-components";
import back1 from "../../img/ad/image.png";
import { symbol } from "prop-types";

const Basic = styled.div`
  width: 100vw;
  height: 500vh;
`;
const First = styled.div`
  width: 100%;
  height: 100%;
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
  height: 80%;
  display: flex;
  background-color: aquamarine;
`;
const IntroDetail = styled.div`
  width: 50%;
  height: 50%;
  max-width: 100vh;
  /* background-color: lightgray; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IntroBigD = styled.div`
  color: black;
  width: 80%;
  height: 40%;
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
  width: 50%;
  max-width: 300px;
  height: 10%;
  max-height: 100px;
  border-radius: 10px;
  background-color: #00af09;
  color: white;
  word-wrap: break-word; /* 단어가 길 경우 줄바꿈 */
  word-break: break-all; /* 긴 단어가 있을 경우 줄바꿈 */
  white-space: normal; /* 텍스트 줄바꿈 허용 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
const AdBackImage = styled.div`
  background-image: url(${back1});
  width: 50%;
  background-repeat: no-repeat;
  height: 50%;
  /* max-height: 400px; */
  /* background-color: aliceblue; */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Google = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
`;
const AdInquiry = () => {
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
            <DoorCloth>문의: CreditOnly@gmail.com</DoorCloth>
          </IntroDetail>
          <AdBackImage></AdBackImage>
        </IntroBox>
        <Google></Google>
      </First>
    </Basic>
  );
};
export default AdInquiry;
