import styled from "styled-components";
import UserImgs from "../../img/commonImg/프로필예시.jpeg";
import { Link } from "react-router-dom";

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
  height: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const HelpList = styled.div`
  width: 97.6%;
  height: 92%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BottomSide = styled.div`
  width: 92%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const HelpSend = styled.div`
  width: 97.6%;
  height: 92%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HelpPage = () => {
  return (
    <Container>
      <TopSide>
        <HelpList></HelpList>
      </TopSide>
      <BottomSide>
        <HelpSend></HelpSend>
      </BottomSide>
    </Container>
  );
};
export default HelpPage;
