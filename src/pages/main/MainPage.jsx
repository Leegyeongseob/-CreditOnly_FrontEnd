import styled from "styled-components";
import Ad1 from "../../img/mainImg/Ad1.png";
import Ad2 from "../../img/mainImg/Ad2.png";
import Ad3 from "../../img/mainImg/Ad3.png";
import Ad4 from "../../img/mainImg/Ad4.png";
import Ad5 from "../../img/mainImg/Ad5.png";
import Logo from "../../img//background/CreditOnlyLogo.png";
import MemberAxiosApi from "../../axiosapi/MemberAxiosApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;

const TopSide = styled.div`
  width: 92%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Adbanner = styled.div`
  width: 58.6%;
  height: 92%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  .swiper-pagination {
    padding: 1px;
  }
  .swiper-pagination-bullet {
    background: #8290ee; // 페이지네이션 점 색상 변경
    width: 9px;
    height: 9px;
    &:hover {
      opacity: 0.7;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #8290ee; // 네비게이션 버튼 색상 변경
    &:hover {
      opacity: 0.6;
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 1.5rem;
  }
`;

const Slide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: background-color 0.5s ease;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.overlay}; /* 다크 모드의 오버레이 색상 */
    transition: background-color 0.5s ease;
    pointer-events: none; /* Ensure it does not interfere with mouse events */
  }
`;

const SlideLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const SlideLink2 = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const CreditInfo = styled.div`
  width: 39%;
  height: 92%;
  background-color: ${({ theme }) => theme.commponent};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 230px;
    margin-top: 5%;
  }
`;

const BottomSide = styled.div`
  width: 92%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreditView = styled.div`
  width: 48.8%;
  height: 92%;
  background-color: ${({ theme }) => theme.commponent};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 230px;
    margin-top: 5%;
  }
`;

const MainPage = () => {
  //카카오 로그인시 프로필 자동 변경
  const kakaoProfileUrl = sessionStorage.getItem("kakaoImgUrl");
  const email = sessionStorage.getItem("email");

  //카카오 프로필 사진저장 비동기 함수
  const kakaoProfileImgAxios = async (emailvalue, kakaoProfile) => {
    const res = await MemberAxiosApi.profileUrlSave(emailvalue, kakaoProfile);
    console.log("kakaoProfile:", res.data);
  };
  useEffect(() => {
    //프로필 이미지 가져오기
    getProfileImg(email);
  }, []);
  // 이메일로 프로필 이미지 가져오기
  const getProfileImg = async (emailValue) => {
    const response = await MemberAxiosApi.searchProfileUrl(emailValue);
    //카카오 로그인인 경우에만 카카오 프로필 이미지 저장
    if (response.data === "notExist" && kakaoProfileUrl) {
      kakaoProfileImgAxios(email, kakaoProfileUrl);
    }
  };
  return (
    <Container>
      <TopSide>
        <Adbanner>
          <StyledSwiper
            key="swiper"
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <Slide imageurl={Ad1}>
              <SlideLink to="/mainpage" />
            </Slide>
            <Slide imageurl={Ad2}>
              <SlideLink to="/evaluation" />
            </Slide>
            <Slide imageurl={Ad3}>
              <SlideLink to="/chat" />
            </Slide>
            <Slide imageurl={Ad4}>
              <SlideLink2
                href="https://www.palette-couple.store"
                target="_blank"
              />
            </Slide>
            <Slide imageurl={Ad5}>
              <SlideLink to="/information" />
            </Slide>
          </StyledSwiper>
        </Adbanner>
        <CreditInfo imageurl={Logo}>신용점수</CreditInfo>
      </TopSide>
      <BottomSide>
        <CreditView imageurl={Logo}>신용점수 올리는 팁</CreditView>
        <CreditView imageurl={Logo}>시각화</CreditView>
      </BottomSide>
    </Container>
  );
};
export default MainPage;
