import styled from "styled-components";
import Ad1 from "../../img/mainImg/Ad1.png";
import Ad2 from "../../img/mainImg/Ad2.png";
import Ad3 from "../../img/mainImg/Ad3.png";
import Ad4 from "../../img/mainImg/Ad4.png";
import Ad5 from "../../img/mainImg/Ad5.png";
import Logo from "../../img//background/CreditOnlyLogo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
  background-color: #f9f9fd;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  background-color: #f9f9fd;
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
  background-color: #f9f9fd;
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
