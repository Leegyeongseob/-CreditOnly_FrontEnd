import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackAUimage from "../../img/aboutUs/AboutUsima.png";

const Basic = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
`;
const Top = styled.div`
  width: 100%;
  height: 5%;
  max-height: 30px;
  background-color: #cbcda9;
`;

const HACBtnWrap = styled.div`
  width: 100%;
  height: 10%;
  max-height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;
const HACBtn = styled.div`
  width: 20%;
  max-width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: aquamarine;
  font-size: 15px;
  cursor: pointer;
  user-select: none;
`;
const AUImage = styled.div`
  background-image: url(${BackAUimage});
  width: 100%;
  height: 40%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const ImageTextBox = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10%;
`;
const ImageTextTop = styled.div`
  font-size: 40px;
  color: white;
  /* background-color: aqua; */
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
const ImageTextDetail = styled.div`
  /* background-color: blue; */
  font-size: 20px;
  color: white;
`;
const AboutUs = () => {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/mainpage");
  };
  const GoAboutUs = () => {
    navigate("/aboutus");
  };
  return (
    <Basic>
      <Top></Top>
      <HACBtnWrap>
        <HACBtn onClick={GoHome}>HOME</HACBtn>
        <HACBtn onClick={GoAboutUs}>ABOUT US</HACBtn>
        <HACBtn>CONTACT</HACBtn>
      </HACBtnWrap>
      <AUImage>
        <ImageTextBox>
          <ImageTextTop>ABOUT US</ImageTextTop>
          <ImageTextDetail>
            가격은 당신이 지불하는 것이다. 가치는 당신이 얻는 것이다
          </ImageTextDetail>
        </ImageTextBox>
      </AUImage>
    </Basic>
  );
};

export default AboutUs;
