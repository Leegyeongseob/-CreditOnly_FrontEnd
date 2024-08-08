import styled from "styled-components";
import Logo from "../../img/background/CreditOnlyLogo.png";
import logosearch from "../../img/loginImg/findglass.png";
import exProfile from "../../img/commonImg/프로필예시.jpeg";
import { Link } from "react-router-dom";
import {
  IoNotificationsOutline,
  IoChevronDown,
  IoChevronUp,
  IoSettingsOutline,
  IoReaderOutline,
  IoAtOutline,
  IoLogOutOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { useState } from "react";
import SideBar from "./SideBar";

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
  min-width: 117px;
  height: 100%;
  background-color: #f1f2f7;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SideBarToggle = styled.div`
  width: 10%;
  min-width: 50px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.04);
  }
  /* @media screen and (min-width: 1200px) {
    display: none;
  } */
`;

const RightBox = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled(Link)`
  width: 20%;
  height: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
  &:hover {
    transform: scale(1.04);
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const SymLogo = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LogoTitle = styled(Link)`
  width: 50%;
  height: 90%;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserProfile = styled.div`
  width: 10%;
  min-width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const UserName = styled.div`
  width: 25%;
  height: 100%;
  padding-left: 1%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto-Regular", Helvetica;
  white-space: nowrap;
`;

const TopToggle = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 7%;
  right: 8.5%;
  width: 220px;
  background-color: #ffffff;
  border: 1px solid #c8cbd9;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const DropdownItem = styled(Link)`
  padding: 10px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto-Regular", Helvetica;
  color: #1f384c;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #f9f9fd;
  }
`;

const AlarmSet = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleToggleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleSideBarClick = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <HeaderContainer>
      <LeftBox>
        <SideBarToggle onClick={handleSideBarClick}>
          <IoMenuOutline size={30} color="#8290ee" />
        </SideBarToggle>
        <LogoBox to="/mainpage">
          <SymLogo />
        </LogoBox>
        <LogoTitle to="/mainpage">신용만</LogoTitle>
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
          <UserProfile>
            <UserImg imageurl={exProfile} />
          </UserProfile>
          <UserName>강해린</UserName>
          <TopToggle onClick={handleToggleClick}>
            {isDropdownVisible ? (
              <IoChevronUp size={18} color="#717694" />
            ) : (
              <IoChevronDown size={18} color="#717694" />
            )}
          </TopToggle>
          {isDropdownVisible && (
            <DropdownMenu>
              <DropdownItem>
                <IoReaderOutline size={20} color="gray" />내 신용정보
              </DropdownItem>
              <DropdownItem>
                <IoAtOutline size={20} color="gray" />
                00bsj@naver.com
              </DropdownItem>
              <DropdownItem to="/setting" onClick={handleToggleClick}>
                <IoSettingsOutline size={20} color="gray" />
                설정
              </DropdownItem>
              <DropdownItem>
                <IoLogOutOutline size={20} color="gray" />
                로그아웃
              </DropdownItem>
            </DropdownMenu>
          )}
          <AlarmSet>
            <IoNotificationsOutline size={25} color="#717694" />
          </AlarmSet>
        </UserBox>
      </RightBox>
      <SideBar isVisible={isSidebarVisible} />
    </HeaderContainer>
  );
};
export default Header;
