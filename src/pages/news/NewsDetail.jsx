import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import InformationAxios from "../../axiosapi/InformationAxios"; // API 호출을 위한 모듈

import Comments from "./Comment/Comment";

const Container = styled.div`
  width: 70%;
  margin: 1% auto;
  margin-right: 2%;
  padding: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const BackButtonContainer = styled.div`
    width: 10%;
    height: 7%;
    position: absolute;
    z-index: 10;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ active, theme }) =>
    active ? theme.commponent : theme.borderBottom};
  color: ${({ theme }) => theme.color};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    scale: calc(1.1);
  }
`;

const DetailWrap = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto; /* Enable vertical scrolling */
  display: flex;
  flex-direction: column;
  gap: 6%;
  margin-top: 3%;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2% 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 2%;
`;

const Author = styled.p`
  font-size: 18px;
  color: #666;
`;

const NewsImg = styled.img`
  width: 100%;
  height: 40%;
`;

const Content = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;
const Wrap = styled.div`
  display: flex;
`;

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
};

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      try {
        const response = await InformationAxios.getInformationById(id);
        setItem(response);
      } catch (err) {
        setError("뉴스 항목을 찾을 수 없습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!item) return <p>뉴스 항목을 찾을 수 없습니다.</p>;

  return (
    <Wrap>
      <Container>
        <BackButtonContainer>
          <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
        </BackButtonContainer>

        <DetailWrap>
          <Header>
            <Title>{item.title}</Title>
            <Author>{formatDate(item.publishedDate)}</Author>
          </Header>

          <NewsImg alt={item.title} src={item.imageUrl} />

          <Content>{item.content}</Content>
        </DetailWrap>

      </Container>
        <Comments informationId={id} />
    </Wrap>
  );
};

export default NewsDetail;
