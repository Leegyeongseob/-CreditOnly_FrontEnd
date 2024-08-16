import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import InformationAxios from "../../axiosapi/InformationAxios";

const Container = styled.div`
  width: 99%;
  height: 100%;
`;

const TopBar = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CategoryButton = styled.button`
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

const ListWrap = styled.div`
  width: 100%;
  height: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
`;

const ListGroup = styled.div`
  background-color: ${({ theme }) => theme.sideBar};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100%;
  height: 20%;
  justify-content: space-around;
  align-items: center;
  display: flex;
  align-items: center;
  /* border-bottom: 1px solid #b81b1b; */
  border-bottom: ${(props) => (props.isLast ? "none" : "1px solid #242222b5")};
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
  height: 54%;
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
  background-color: ${({ theme }) => theme.sideBar};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 0;
  width: 300px;
  outline: none;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;

  &:focus {
    border-color: #000;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.borderBottom};
  color: ${({ theme }) => theme.color};
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.overflow};
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.borderBottom : theme.overflow};
  color: ${({ active, theme }) => (active ? theme.color : theme.color)};
  border: 1px solid #000;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.overflow};
    color: white;
  }

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

const categories = [
  "전체",
  "신용조회 정보모음",
  "신용조회 어플추천",
  "신용카드와 신용정보",
];

const NewsList = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOption, setSearchOption] = useState("all");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(category || "전체");
  const [items, setItems] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (selectedCategory === "전체") {
          const fetchedItems = await InformationAxios.getAllInformation();
          setItems(fetchedItems);
        } else {
          const fetchedItems = await InformationAxios.getInformationByCategory(
            selectedCategory
          );
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };

    fetchItems();
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(category || "전체");
  }, [category]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSearchOption(e.target.value);
  };

  const handleSearch = () => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredItems = items.filter((item) => {
      const matchesSearch =
        (searchOption === "title" &&
          item.title.toLowerCase().includes(lowerCaseTerm)) ||
        (searchOption === "content" &&
          item.content.toLowerCase().includes(lowerCaseTerm)) ||
        (searchOption === "all" &&
          (item.title.toLowerCase().includes(lowerCaseTerm) ||
            item.content.toLowerCase().includes(lowerCaseTerm)));
      const matchesCategory =
        selectedCategory === "전체" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setSearchResults(filteredItems);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const currentItems = (searchResults.length ? searchResults : items)
    .filter(
      (item) =>
        selectedCategory === "전체" || item.category === selectedCategory
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(
    (searchResults.length ? searchResults : items).filter(
      (item) =>
        selectedCategory === "전체" || item.category === selectedCategory
    ).length / itemsPerPage
  );

  const pageNumbers = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <TopBar>
        {categories.map((cat) => (
          <CategoryButton
            key={cat}
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </CategoryButton>
        ))}
      </TopBar>
      <ListWrap>
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListGroup isLast={index === currentItems.length - 1}>
                <Simg alt={item.title} src={item.imageUrl} />
                <ListDetailWrap>
                  <TextWrapper>{item.title}</TextWrapper>
                  <DetailWrap>{item.content}</DetailWrap>
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
        {pageNumbers.map((num) => (
          <PageButton
            key={num}
            active={currentPage === num}
            onClick={() => setCurrentPage(num)}
          >
            {num}
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
