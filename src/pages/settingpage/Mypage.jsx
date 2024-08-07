import styled from "styled-components";
import UserImgs from "../../img/commonImg/프로필예시.jpeg";
import { Link } from "react-router-dom";
import Logo from "../../img//background/CreditOnlyLogo.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopSide = styled.div`
  width: 92%;
  height: 44%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const UserProfile = styled.div`
  width: 37%;
  height: 91.5%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserImgBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const UserImg = styled.div`
  width: 175px;
  height: 175px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const UserNameBox = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserName = styled.div`
  width: 175px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #5f5f5f;
  background-color: #f9f9fd;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  width: 60.6%;
  height: 92%;
  background-color: #f6f6fb;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Info = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 10px;
  background-color: #edeef5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const InfoTitle = styled.div`
  width: 40%;
  font-size: 18px;
  padding-left: 5%;
  font-family: "Roboto-Regular", Helvetica;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const InfoContents = styled.div`
  width: 60%;
  padding-right: 5%;
  font-size: 18px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const BtnDiv = styled.div`
  width: 60%;
  padding-right: 4%;
  font-size: 18px;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const PwBtn = styled(Link)`
  width: 110px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 13px;
  font-weight: 400;
  color: #5a6acf;
  background-color: #fbfcfe;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ebecef;
  }
`;

const BottomSide = styled.div`
  width: 92%;
  height: 38%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const CreditView = styled.div`
  width: 37%;
  height: 88%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ChatView = styled.div`
  width: 29.1%;
  height: 88%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LowSide = styled.div`
  width: 92%;
  height: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const UserDelBox = styled.div`
  width: 100%;
  height: 72%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const UserDel = styled.div`
  width: 40%;
  font-size: 18px;
  padding-left: 3%;
  font-family: "Roboto-Regular", Helvetica;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const UserDelBtn = styled(Link)`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4%;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  color: #5a6acf;
  background-color: #fbfcfe;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ebecef;
  }
`;

const Mypage = () => {
  return (
    <Container>
      <TopSide>
        <UserProfile>
          <UserImgBox>
            <UserImg imageurl={UserImgs} />
          </UserImgBox>
          <UserNameBox>
            <UserName>강해린</UserName>
          </UserNameBox>
        </UserProfile>
        <UserInfo>
          <InfoBox>
            <Info>
              <InfoTitle>이메일</InfoTitle>
              <InfoContents>00bsj@naver.com</InfoContents>
            </Info>
            <Info>
              <InfoTitle>생년월일</InfoTitle>
              <InfoContents>2000.11.03</InfoContents>
            </Info>
            <Info>
              <InfoTitle>비밀번호</InfoTitle>
              <BtnDiv>
                <PwBtn to="/findbypwd">비밀번호 변경</PwBtn>
              </BtnDiv>
            </Info>
            <Info>
              <InfoTitle>가입일</InfoTitle>
              <InfoContents>2024.08.07</InfoContents>
            </Info>
          </InfoBox>
        </UserInfo>
      </TopSide>
      <BottomSide>
        <CreditView imageurl={Logo}>신용점수</CreditView>
        <ChatView imageurl={Logo}>문의내역</ChatView>
        <ChatView imageurl={Logo}>챗봇</ChatView>
      </BottomSide>
      <LowSide>
        <UserDelBox>
          <UserDel>회원탈퇴</UserDel>
          <UserDelBtn>회원탈퇴</UserDelBtn>
        </UserDelBox>
      </LowSide>
    </Container>
  );
};
export default Mypage;
