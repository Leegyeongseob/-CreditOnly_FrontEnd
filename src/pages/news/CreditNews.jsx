import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";
import { items } from "./data"; // data.js에서 items를 import

import Banner from "../banner/Banner";

const Container = styled.div`
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
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 250px;
  }
`;

const CreditInfo = styled.div`
  width: 39%;
  height: 92%;
  background-color: ${({ theme }) => theme.commponent};
  transition: background-color 0.5s ease;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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
  transition: background-color 0.5s ease;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
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
  background-color: ${({ theme }) => theme.sideBar};
  transition: background-color 0.5s ease;
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
  background-color: ${({ theme }) => theme.sideBar};
  transition: background-color 0.5s ease;
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
  const getFilteredItems = (category, limit) =>
    items.filter((item) => item.category === category).slice(0, limit);

  const informationItems = getFilteredItems("신용조회 정보모음", 4);
  const appItems = getFilteredItems("신용조회 어플추천", 2);
  const cardItems = getFilteredItems("신용카드와 신용정보", 2);

  return (
    <Container>
      <TopSide>
        <Adbanner>
          <Banner />
        </Adbanner>
        <CreditInfo>
          <TitleWrap>
            <TitlePage>신용조회 정보모음</TitlePage>
            <StyledLink to="/information-list/신용조회 정보모음">
              <IcBaselinePlus />
            </StyledLink>
          </TitleWrap>
          <CardListWrapper>
            {informationItems.map((item) => (
              <CardList key={item.id} to={`/news/${item.id}`}>
                <Limg alt={item.title} src={item.imageUrl} />
                <InformationText>{item.title}</InformationText>
              </CardList>
            ))}
          </CardListWrapper>
        </CreditInfo>
      </TopSide>
      <BottomSide>
        <CreditView>
          <TitleWrap>
            <TitlePage>신용조회 어플추천</TitlePage>
            <StyledLink to="/information-list/신용조회 어플추천">
              <IcBaselinePlus />
            </StyledLink>
          </TitleWrap>
          <ListWrapper>
            {appItems.map((item) => (
              <ListGroup key={item.id} to={`/news/${item.id}`}>
                <Simg alt={item.title} src={item.imageUrl} />
                <ListDetailWrap>
                  <TextWrapper>{item.title}</TextWrapper>
                  <DetailWrap>{item.content}</DetailWrap>
                </ListDetailWrap>
              </ListGroup>
            ))}
          </ListWrapper>
        </CreditView>
        <CreditView>
          <TitleWrap>
            <TitlePage>신용카드와 신용정보</TitlePage>
            <StyledLink to="/information-list/신용카드와 신용정보">
              <IcBaselinePlus />
            </StyledLink>
          </TitleWrap>
          <ListWrapper>
            {cardItems.map((item) => (
              <ListGroup key={item.id} to={`/news/${item.id}`}>
                <Simg alt={item.title} src={item.imageUrl} />
                <ListDetailWrap>
                  <TextWrapper>{item.title}</TextWrapper>
                  <DetailWrap>{item.content}</DetailWrap>
                </ListDetailWrap>
              </ListGroup>
            ))}
          </ListWrapper>
        </CreditView>
      </BottomSide>
    </Container>
  );
};

export default CreditNews;
