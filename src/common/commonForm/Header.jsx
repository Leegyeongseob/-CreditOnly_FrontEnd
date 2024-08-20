import styled from "styled-components";
import Logo from "../../img/background/CreditOnlyLogo.png";
import logosearch from "../../img/loginImg/findglass.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import UserToggle from "./UserToggle";
import { useContext, useEffect, useState, useCallback } from "react";
import SettingAxios from "../../axiosapi/SettingAxios";
import { UserEmailContext } from "../../contextapi/UserEmailProvider";
import MainAxios from "../../axiosapi/MainAxios";
import Alarm from "../../img/commonImg/알림.png";
import AlarmDot from "../../img/commonImg/알림Dot.png";
import MemberAxiosApi from "../../axiosapi/MemberAxiosApi";
import defaultProfile from "../../img/mainImg/pro.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 6vh;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease,
    border-bottom 0.5s ease;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const LeftBox = styled.div`
  width: 15%;
  min-width: 117px;
  height: 100%;
  background-color: ${({ theme }) => theme.sideBar};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease,
    border-right 0.5s ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    position: ${({ isHeader }) => (isHeader ? "fixed" : "static")};
    width: ${({ isHeader }) => (isHeader ? "200px" : "15%")};
    height: ${({ isHeader }) => (isHeader ? "6vh" : "100%")};
    background-color: ${({ isHeader, theme }) =>
      isHeader ? theme.sideBar : theme.sideBar};
    top: ${({ isHeader }) => (isHeader ? "0" : "auto")};
    left: ${({ isHeader }) => (isHeader ? "0" : "auto")};
    /* : 1px solid ${({ theme }) => theme.border}; */
    border-right: ${({ isHeader, theme }) =>
      isHeader ? theme.borderR : "none"};
    z-index: ${({ isHeader }) => (isHeader ? "100" : "1")};
  }
`;

const SideBarToggle = styled.div`
  width: 10%;
  min-width: 50px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 1201px) {
    display: none;
  }
`;

const RightBox = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
    display: ${({ isHeader }) => (isHeader ? "flex" : "none")};
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    width: 45%;
  }
`;
const SearchInputDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 430px) {
    font-size: 8px;
  }
`;
const SearchInput = styled.input.attrs({ type: "text" })`
  display: flex;
  width: 85%;
  height: 50%;
  padding: 2%;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1px solid darkgray;
  }
  @media screen and (max-width: 430px) {
    font-size: 8px;
    justify-content: flex-start;
  }
`;
const SearchOutputDiv = styled.div`
  width: 40vw;
  max-height: 30vh; // 최대 높이 설정
  position: absolute; // 입력창을 가리지 않도록
  top: 100%; // 입력창의 바로 아래에 위치시킴
  display: ${({ searchComplete }) => (searchComplete ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto; // 내용이 넘칠 경우 스크롤
  background-color: transparent; // 배경색 설정
  border-radius: 5px;
  z-index: 100; // 입력창 위에 표시되도록
`;

const SearchOutput = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  outline: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  cursor: ${({ result }) => (result ? "pointer" : "default")};
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  & > .title {
    font-weight: 600;
  }
  & > .contents {
    font-size: 14px;
  }

  &:hover {
    ${({ result }) =>
      result &&
      `
      transform: scale(0.95);
      box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.4);
      color:  #5549f7;
    `}
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
  @media screen and (max-width: 430px) {
    width: 10px;
    height: 10px;
    margin-left: 70%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
  @media screen and (max-width: 330px) {
    width: 35px;
    height: 35px;
  }
`;

const ToggleIcon = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0.8)")};
`;

const Toggle = styled.div`
  width: 60px;
  height: 32px;
  background-color: ${({ theme }) => theme.toggle};
  border-radius: 104px;
  box-shadow: 2px 2px 6px #90909040;
  /* border: 1px solid #c0c0c0; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 430px) {
    width: 40px;
    height: 25px;
  }
  @media screen and (max-width: 330px) {
    width: 30px;
  }
`;

const ToggleBox = styled.div`
  min-width: 52px;
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;
  @media screen and (max-width: 1200px) {
    width: 8%;
  }
  @media screen and (max-width: 430px) {
    min-width: 45px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 330px) {
    min-width: 35px;
    justify-content: flex-start;
  }
`;

const UserBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 30%;
  height: 100%;
`;

const UserProfile = styled.div`
  width: 10%;
  min-width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 430px) {
    min-width: 30px;
  }
`;

const UserImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

const UserName = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 5%;
  padding-left: 1%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto-Regular", Helvetica;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Dont = styled.div`
  width: 25%;
  height: 100%;
  @media screen and (max-width: 1200px) {
    width: 40%;
  }
`;
const AlarmSet = styled.div`
  width: 25px;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const IconAlarm = styled.div`
  width: 25px;
  height: 25px;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Header = ({
  toggleSideBar,
  isHeader,
  toggleDarkMode,
  isDarkMode,
  toggleAlarmBar,
  hasUnreadNotifications,
  toggleUserToggle, // 추가
  isUserToggleVisible, // 추가
}) => {
  const location = useLocation(); // 현재 경로를 가져옴
  const [isOpen, setIsOpen] = useState(false);
  const { email, imgUrl, setImgUrl, kakaoImgUrl } =
    useContext(UserEmailContext);
  const [user, setUser] = useState([{ name: "", email: "" }]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchComplete, setSearchComplete] = useState(false);
  const navigate = useNavigate();

  // 카카오 프로필 사진 저장 비동기 함수
  const kakaoProfileImgAxios = useCallback(
    async (emailValue, imgUrlData) => {
      const res = await MemberAxiosApi.profileUrlSave(emailValue, imgUrlData);
      console.log("kakaoProfile:", res.data);
      setImgUrl(imgUrlData);
    },
    [setImgUrl]
  );

  // 이메일로 프로필 이미지 가져오기
  const getProfileImg = useCallback(
    async (emailValue) => {
      const response = await MemberAxiosApi.searchProfileUrl(emailValue);
      // 이미지가 DB에 없을 때
      if (response.data === "notExist") {
        console.log("kakaoImgUrl : ", kakaoImgUrl);
        if (kakaoImgUrl) {
          kakaoProfileImgAxios(email, kakaoImgUrl);
        }
        // 일반 로그인인 경우
        else {
          setImgUrl(defaultProfile);
        }
      }
      // 이미지가 DB에 있을 때
      else {
        setImgUrl(response.data);
      }
    },
    [kakaoImgUrl, email, kakaoProfileImgAxios, setImgUrl]
  );

  useEffect(() => {
    // 프로필 이미지 가져오기
    getProfileImg(email);
  }, [getProfileImg, email]);

  useEffect(() => {
    // 사용자 정보를 가져오는 함수
    const fetchUserInfo = async () => {
      try {
        const response = await SettingAxios.getUserInfo(email);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error + setIsOpen);
      }
    };

    fetchUserInfo();
  }, [email]);

  // LeftBox 배경색을 결정하는 함수
  const getLeftBoxBackgroundColor = () => {
    if (location.pathname === "/chat") {
      return isDarkMode ? "#242424" : "#fff";
    } else {
      return "theme.sideBar";
    }
  };

  // 엔터로 검색
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // 검색 버튼 이벤트 핸들러
  const handleSearch = () => {
    setSearchComplete(true);
    fetchData();
    setSearchTerm("");
  };

  // 데이터 가져오는 비동기 함수
  const fetchData = async () => {
    try {
      const searchList = await MainAxios.dataSearch(email, searchTerm);
      console.log(searchList.data);
      setSearchData(searchList.data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  return (
    <HeaderContainer isOpen={isOpen}>
      <LeftBox
        isHeader={isHeader}
        style={{
          backgroundColor: getLeftBoxBackgroundColor(), // 배경색 적용
        }}
      >
        <SideBarToggle onClick={toggleSideBar}>
          <IoMenuOutline size={30} color="#8290ee" />
        </SideBarToggle>
        <LogoBox to="/mainpage" isHeader={isHeader}>
          <SymLogo />
        </LogoBox>
        <LogoTitle to="/mainpage">신용만</LogoTitle>
      </LeftBox>
      <RightBox>
        <SearchBox>
          <SearchInputDiv>
            <SearchInput
              placeholder="검색어를 입력해주세요."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <Searchlogo
              src={logosearch}
              onClick={() => {
                handleSearch();
              }}
            />
          </SearchInputDiv>
          <SearchOutputDiv searchComplete={searchComplete}>
            {searchData.length > 0 ? (
              searchData.map((item) => (
                <SearchOutput
                  result={true}
                  key={item.id}
                  onClick={() => {
                    if (item.page === "information") {
                      navigate(
                        `/${item.page}/${item.classTitle}/${item.contents}`
                      );
                      setSearchComplete(false);
                    } else if (item.page === "announcement") {
                      navigate(`/${item.page}/news`);
                      setSearchComplete(false);
                    } else {
                      navigate(`/${item.page}`);
                      setSearchComplete(false);
                    }
                  }}
                >
                  <div className="title">{item.title}</div>
                  <div className="contents">{item.contents}</div>
                </SearchOutput>
              ))
            ) : (
              <SearchOutput result={false}>
                <div className="noResult">검색 결과가 없습니다.</div>
              </SearchOutput>
            )}
          </SearchOutputDiv>
        </SearchBox>
        <ToggleBox>
          <Toggle onClick={toggleDarkMode}>
            <IconWrapper>
              <ToggleIcon isVisible={isDarkMode}>
                <BsMoonStars size={19} color="#c0c0c0" />
              </ToggleIcon>
              <ToggleIcon isVisible={!isDarkMode}>
                <BsSunFill size={23} color="#ffd400" />
              </ToggleIcon>
            </IconWrapper>
          </Toggle>
        </ToggleBox>
        <UserBox>
          <UserDiv>
            <UserProfile>
              <UserImg imageurl={imgUrl} />
            </UserProfile>
            <UserName>{user.name}</UserName>
          </UserDiv>
          <UserToggle
            isOpen={isUserToggleVisible}
            setIsOpen={toggleUserToggle}
            email={user.email}
          />
          <Dont />
          <AlarmSet onClick={toggleAlarmBar}>
            {hasUnreadNotifications ? (
              // <VscBellDot size={25} color="#ffd400" />

              <IconAlarm imageurl={AlarmDot} />
            ) : (
              // <VscBell size={25} color="#717694" />

              <IconAlarm imageurl={Alarm} />
            )}
          </AlarmSet>
        </UserBox>
      </RightBox>
    </HeaderContainer>
  );
};
export default Header;
