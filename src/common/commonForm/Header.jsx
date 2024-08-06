import styled from "styled-components";
import Logo from "../../img/background/logo.png";
import logosearch from "../../img/loginImg/findglass.png";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #c8cbd9;
`;

const LeftBox = styled.div`
  width: 15%;
  height: 100%;
  background-color: #f1f2f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RightBox = styled.div`
  width: 86%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled(Link)`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 50%;
  background-color: #96a8de;
  /* background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; */
  &:hover {
    transform: scale(1.04);
  }
`;

const LogoTitle = styled(Link)`
  width: 50%;
  height: 90%;
  padding-left: 4%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #5a67ba;
  font-family: "Poppins-Bold", Helvetica;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    font-size: 16px;
  }
`;

const SearchBox = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input.attrs({ type: "text" })`
  display: flex;
  width: 85%;
  height: 50%;
  padding: 2%;
  background-color: #f6f6fb;
  color: #1f384c;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1px solid darkgray;
  }
`;

const Searchlogo = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  margin-left: 80%;
  &:hover {
    transform: scale(1.05);
  }
`;

const ToggleBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toggle = styled.div`
  width: 68px;
  height: 32px;
  background-color: #78c6ff;
  border-radius: 104px;
  box-shadow: 0px 2.5px 6.25px #90909040;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MerchantName = styled.div`
  width: 85px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 13px;
  font-weight: 400;
  background-color: #f5f6fa;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ebecef;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftBox>
        <LogoBox to="/"></LogoBox>
        <LogoTitle to="/">신용만</LogoTitle>
      </LeftBox>
      <RightBox>
        <SearchBox>
          <SearchInput
            placeholder="검색어를 입력해주세요."
            //   value={searchTerm}
            //   onChange={(e) => setSearchTerm(e.target.value)}
            //   onKeyPress={handleKeyPress}
          />
          <Searchlogo
            src={logosearch}
            //   onClick={() => {
            //     handleSearch();
            //   }}
          />
        </SearchBox>
        <ToggleBox>
          <Toggle></Toggle>
        </ToggleBox>
        <UserBox>
          <MerchantName>로그인</MerchantName>
        </UserBox>
      </RightBox>
    </HeaderContainer>
  );
};
export default Header;
