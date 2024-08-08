import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { items } from './data'; // data.js에서 items를 import

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Ad1 from "../../img/error/400error.png";
import Ad2 from "../../img/error/401error.png";
import Ad3 from "../../img/error/403error.png";
import Ad4 from "../../img/error/500error.png";

const Container = styled.div`
  width: 99%;
  height: 100%;
`;

const Group = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
    width: 0.5vw;
    height: 1vh;
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Banner = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  width: 46%;
  height: 48%;
  margin-left: 5vw;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const Information = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  height: 48%;
  width: 41%;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
`;

const App = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  height: 48%;
  width: 45%;
  flex-direction: column;
  justify-content: center;
  margin-left: 2vw;
`;

const Card = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  height: 48%;
  width: 45%;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
`;

const TitleWrap = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0 1vw;
`;

const TitlePage = styled.div`
  color: #5e5e5e;
  font-size: 20px;
`;

const IcBaselinePlus = styled(FaPlus)`
  margin-right: 10px;
`;

const CardListWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
`;

const CardList = styled(Link)`
  background-color: #e4e7f5;
  height: 45%;
  width: 43%;
  display: flex;
  flex-direction: column;
  margin: 1%; /* Added margin for spacing */
  border-radius: 10px; /* Added border-radius for consistency */
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
`;

const Limg = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px; /* Ensure image has consistent border radius */
`;

const InformationText = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListGroup = styled(Link)`
  background-color: #e4e7f5;
  display: flex;
  width: 90%;
  height: 42%;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px; /* Added border-radius for consistency */
  margin-bottom: 10px; /* Added margin for spacing */
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
`;

const Simg = styled.img`
  border-radius: 50%;
  height: 100px;
  object-fit: cover;
  width: 100px;
`;

const ListDetailWrap = styled.div`
  width: 70%;
  height: 74%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TextWrapper = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const DetailWrap = styled.div`
  width: 100%;
  letter-spacing: 0.5px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// StyledLink to override default Link styles
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* Inherit color from parent */
  display: inline; /* Ensures link behaves as a block-level element */
  &:hover {
   color: blue;
  }
`;

const CreditNews = () => {
  // 필터링된 데이터
  const getFilteredItems = (category, limit) => items
    .filter(item => item.category === category)
    .slice(0, limit);

  const informationItems = getFilteredItems("신용조회 정보모음", 4);
  const appItems = getFilteredItems("신용조회 어플추천", 2);
  const cardItems = getFilteredItems("신용카드와 신용정보", 2);

  return (
    <Container>
      <Group>
        <Banner>
        <StyledSwiper
            key="swiper"
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <Slide imageurl={Ad1} />
            <Slide imageurl={Ad2} />
            <Slide imageurl={Ad3} />
            <Slide imageurl={Ad4} />
          </StyledSwiper>
          </Banner>
        <Information>
          <TitleWrap>
            <TitlePage>신용조회 정보모음</TitlePage>
            <StyledLink to="/information-list/신용조회 정보모음">
              <IcBaselinePlus />
            </StyledLink>
          </TitleWrap>
          <CardListWrapper>
            {informationItems.map(item => (
              <CardList key={item.id} to={`/news/${item.id}`}>
                
                  <Limg alt={item.title} src={item.imageUrl} />
                  <InformationText>{item.title}</InformationText>
                
              </CardList>
            ))}
          </CardListWrapper>
        </Information>
        <App>
          <TitleWrap>
            <TitlePage>신용조회 어플추천</TitlePage>
            <StyledLink to="/information-list/신용조회 어플추천">
              <IcBaselinePlus />
            </StyledLink>
          </TitleWrap>
          <ListWrapper>
            {appItems.map(item => (
              <ListGroup key={item.id} to={`/news/${item.id}`}>
                
                  <Simg alt={item.title} src={item.imageUrl} />
                  <ListDetailWrap>
                    <TextWrapper>{item.title}</TextWrapper>
                    <DetailWrap>{item.content}</DetailWrap>
                  </ListDetailWrap>
                
              </ListGroup>
            ))}
          </ListWrapper>
        </App>
        <Card>
          <TitleWrap>
            <TitlePage>신용카드와 신용정보</TitlePage>
            <StyledLink to="/information-list/신용카드와 신용정보">
              <IcBaselinePlus />
            </StyledLink>
          </TitleWrap>
          <ListWrapper>
            {cardItems.map(item => (
              <ListGroup key={item.id} to={`/news/${item.id}`}>
               
                  <Simg alt={item.title} src={item.imageUrl} />
                  <ListDetailWrap>
                    <TextWrapper>{item.title}</TextWrapper>
                    <DetailWrap>{item.content}</DetailWrap>
                  </ListDetailWrap>
               
              </ListGroup>
            ))}
          </ListWrapper>
        </Card>
      </Group>
    </Container>
  );
};

export default CreditNews;
