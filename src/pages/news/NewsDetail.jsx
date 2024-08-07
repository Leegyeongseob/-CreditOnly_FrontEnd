import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { items } from "./data";

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Author = styled.p`
  font-size: 18px;
  color: #666;
`;

const Content = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
`;
  
const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
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
      <Header>
        <Title>{item.title}</Title>
        <Author>작성자: {item.author}</Author>
      </Header>
      <Content>{item.content}</Content>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </Container>
  );
};

export default NewsDetail;
