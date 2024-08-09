import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { items } from "./data";
import Ad4 from "../../img/error/500error.png";

import Comments from "./Comment/ComTest";

const Container = styled.div`
  width: 80%;
  margin: 1% auto;
  padding: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const BackButtonContainer = styled.div`
  width: 100%;
  height: 7%;
  text-align: right; // Aligns child elements to the right
`;

const BackButton = styled.button`
  width: 9%;
  height: 100%;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
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
  border: 1px solid red;
  width: 100%;
  height: 40%;
`;
const Content = styled.div`
  border: 1px solid red;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating fetching item from backend
    const fetchItem = () => {
      setLoading(true);
      try {
        const newsItem = items.find((item) => item.id === parseInt(id, 10));
        if (newsItem) {
          setItem(newsItem);
        } else {
          setError("News item not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, items]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>News item not found.</p>;

  return (
    <Container>
      <BackButtonContainer>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </BackButtonContainer>
      <DetailWrap>
        <Header>
          <Title>{item.title}</Title>
          <Author>작성자: {item.author}</Author>
        </Header>

        {/*NewsImg <img alt={item.title} src={item.imageUrl}} /> */}
        <NewsImg src={Ad4} />

        <Content>{item.content}</Content>
      </DetailWrap>

      <Comments />
    </Container>
  );
};

export default NewsDetail;
