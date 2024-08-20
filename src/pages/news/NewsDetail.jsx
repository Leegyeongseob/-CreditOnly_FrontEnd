import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TbArrowBack } from "react-icons/tb";
import InformationAxios from "../../axiosapi/InformationAxios"; // API 호출을 위한 모듈
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import Comments from "./Comment/Comment";

const Wrap = styled.div`
  display: flex;
  
`;

const CommentsToggle = styled.div`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 3; 
  cursor: pointer;
  display: none; /* 기본적으로 숨김 */

  @media screen and (max-width: 768px) {
    display: block; /* 화면 너비가 768px 이하일 때만 보이게 설정 */
  }

  /* SVG 스타일 조정 */
  svg {
    width: 100px; /* 원하는 너비로 설정 */
    height: 50px; /* 원하는 높이로 설정 */
    
  }

`;

const Container = styled.div`
  width: 70%;
  margin: 1% auto;
  margin-right: 2%;
  padding: 2%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 754px;

  @media screen and (max-width: 760px) {
    width: 93%;
    opacity: ${({ showComments }) => (showComments ? 0 : 1)};
    pointer-events: ${({ showComments }) => (showComments ? "none" : "auto")};
  }
`;

const TopSection = styled.div`
  display: flex;
`;

const BackButtonContainer = styled.div`
  margin-right: 5px;
  margin-bottom: 6px;
`;

const BackButton = styled.button`
  padding: 10px;
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
  gap: 10px;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2% auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 2%;
  color: ${({ theme }) => theme.color};
  @media screen and (max-width: 768px) {
    font-size: clamp(15px, 3vw, 24px);
  }
`;

const CreationDate = styled.p`
  font-size: 18px;
  color: #666;
  color: ${({ theme }) => theme.color};
  @media screen and (max-width: 768px) {
    font-size: clamp(11px, 3vw, 18px);
  }
`;

const NewsImg = styled.img`
  width: 100%;
  height: 40%;
`;

const Content = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  color: ${({ theme }) => theme.color};
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
  const [showComments, setShowComments] = useState(false);

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
      <CommentsToggle onClick={() => setShowComments(!showComments)}>
        {showComments ? <LiaToggleOffSolid /> : <LiaToggleOnSolid />}
      </CommentsToggle>
      <Container showComments={showComments}>
        <TopSection>
          <BackButtonContainer>
            <BackButton onClick={() => navigate(-1)}>
              <TbArrowBack />
            </BackButton>
          </BackButtonContainer>

          <Header>
            <Title>{item.title}</Title>
            <CreationDate>{formatDate(item.publishedDate)}</CreationDate>
          </Header>
        </TopSection>
        <DetailWrap>
          <NewsImg alt={item.title} src={item.imageUrl} />

          <Content>{item.content}</Content>
        </DetailWrap>
      </Container>
      <Comments informationId={id} showComments={showComments} />
    </Wrap>
  );
};

export default NewsDetail;
