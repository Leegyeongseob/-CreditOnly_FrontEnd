import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { items } from "./data";

const Container = styled.div`
  width: 99%;
  height: 100%;
`;

const TopBar = styled.div`
  width: 100%;
  height: 10%;
`;

const ListWrap = styled.div`
  width: 100%;
  height: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
 
`;

const ListGroup = styled.div`
  
  background-color: #e4e7f5;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b81b1b;
  border-bottom: ${(props) => (props.isLast ? "none" : "1px solid #b81b1b")};
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

const TextWrapper = styled.h3`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const DetailWrap = styled.p`
  width: 100%;
  letter-spacing: 0.5px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 0;
  width: 300px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  border: 1px solid #007bff;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    color: white;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const NewsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("all");
  const [searchResults, setSearchResults] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredItems = items.filter((item) => {
      if (searchOption === "title") {
        return item.title.toLowerCase().includes(lowerCaseTerm);
      }
      if (searchOption === "content") {
        return item.content.toLowerCase().includes(lowerCaseTerm);
      }
      if (searchOption === "all") {
        return (
          item.title.toLowerCase().includes(lowerCaseTerm) ||
          item.content.toLowerCase().includes(lowerCaseTerm)
        );
      }
      return false;
    });
    setSearchResults(filteredItems);
    setCurrentPage(1); // 검색 시 첫 페이지로 이동
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const currentItems = (searchResults === null ? items : searchResults).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(
    (searchResults === null ? items : searchResults).length / itemsPerPage
  );

  return (
    <Container>
      <TopBar></TopBar>
      <ListWrap>
        {currentItems.length > 0 ? (
          currentItems.map((result, index) => (
            <Link key={result.id} to={`/informaition-list/${result.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
             <ListGroup isLast={index === currentItems.length - 1}>
                <Simg alt="Image" src="rectangle-10228-2.png" />
                <ListDetailWrap>
                  <TextWrapper>{result.title}</TextWrapper>
                  <DetailWrap>{result.content}</DetailWrap>
                </ListDetailWrap>
              </ListGroup>
            </Link>
          ))
        ) : (
          <p>검색 결과가 없습니다.</p>
        )}
      </ListWrap>
      <SearchContainer>
        <Select value={searchOption} onChange={handleOptionChange}>
          <option value="all">제목+내용</option>
          <option value="title">제목</option>
          <option value="content">내용</option>
        </Select>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력하세요..."
        />
        <Button onClick={handleSearch}>검색</Button>
      </SearchContainer>
      <Pagination>
        <PageButton
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          맨 처음
        </PageButton>
        <PageButton
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </PageButton>
        {[...Array(totalPages)].map((_, index) => (
          <PageButton
            key={index}
            active={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </PageButton>
        <PageButton
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          맨 끝
        </PageButton>
      </Pagination>
    </Container>
  );
};

export default NewsList;
