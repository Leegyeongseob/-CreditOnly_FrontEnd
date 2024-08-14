import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import AnnouncementAxios from "../../axiosapi/AnnouncementAxios";

const Board = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  @media screen and (max-width: 768px) {
    height: 94vh;
  }
`;

const BtnDiv = styled.div`
  width: 97%;
  height: 5%;
  padding: 0 10% 0 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 5% 0 3%;
  }
`;

const Btn = styled.div`
  width: 90px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  color: #5a6acf;
  background-color: ${({ theme }) => theme.sideBar};
  transition: background-color 0.5s ease, color 0.5s ease;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.background};
  }
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 30px;
    margin-left: 2%;
    font-size: 12px;
  }
`;
const Title = styled.h1`
  width: 100%;
  height: 10%;
  padding-left: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
  font-weight: bolder;
  @media screen and (max-width: 768px) {
    margin-top: 5%;
  }
`;

const Contents = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Tdfont = styled.div`
  display: flex;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  tbody tr:hover {
    background-color: #dadada;
    cursor: pointer;
  }

  tr {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  td {
    width: 100%;
    padding: 10px;
    font-size: 22px;
    font-family: "Roboto-Regular", Helvetica;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }

  th.number,
  td.number {
    width: 100px;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    white-space: nowrap;
  }

  th.date,
  td.date {
    width: 100%;
    font-size: 14px;
    padding: 8px;
    border-bottom: 1px solid darkgray;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
  tbody tr:last-child td.date {
    border-bottom: none;
  }
`;

const PageStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5%;
  width: 100%;
  height: 10%;
  @media screen and (max-width: 768px) {
    margin-top: 5%;
    justify-content: center;
    padding-left: 0%;
    font-size: 14px;
  }

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    padding-top: 2%;
  }

  .pagination li {
    margin: 0 12px;
    cursor: pointer;
    font-size: 16px;
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }

  .pagination li a {
    text-decoration: none;
    color: gray;
  }

  .pagination li.active a {
    border-radius: 2px;
    padding: 7px;
    color: white;
    background-color: darkgray;
  }
`;

const AnBoard = () => {
  const { classTitle } = useParams();
  const [clickTitle, setClickTitle] = useState("");
  const [page, setPage] = useState(1);
  const [notices, setNotices] = useState([]);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 7;
  const navigate = useNavigate();

  useEffect(() => {
    switch (classTitle) {
      case "news":
        setClickTitle("새 소식");
        break;
      case "event":
        setClickTitle("이벤트");
        break;
      case "press":
        setClickTitle("보도 자료");
        break;
      default:
        setClickTitle("알 수 없음");
    }
  }, [classTitle]);

  useEffect(() => {
    const fetchNotices = async () => {
      setLoading(true);
      try {
        const response = await AnnouncementAxios.getAllBoards(classTitle);
        console.log(response.data);
        // 데이터 추출
        const fetchedNotices = response.data.map((notice) => ({
          id: notice.id,
          classTitle: notice.classTitle,
          title: notice.title,
          contents: notice.contents,
          createdDate: notice.createdDate,
        }));
        setNotices(fetchedNotices);
        setTotalItemsCount(fetchedNotices.length);
      } catch (error) {
        console.error("Failed to fetch notices", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, [classTitle, page]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleRowClick = (classNo) => {
    navigate(`/announcement/${classTitle}/${classNo}`);
  };

  const handleWriteClick = () => {
    navigate(`/announcement/${classTitle}/write`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Board>
      <BtnDiv>
        <Btn onClick={() => handleBackClick()}>뒤로</Btn>
        <Btn onClick={() => handleWriteClick()}>글 쓰기</Btn>
      </BtnDiv>
      <Title>{clickTitle}</Title>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Contents>
          <Tdfont>
            <table>
              <tbody>
                {notices &&
                  notices
                    .slice()
                    .reverse()
                    .map((notice) => (
                      <tr
                        key={notice.id}
                        onClick={() => handleRowClick(notice.title)}
                      >
                        <td>{notice.title}</td>
                        <td className="date">{notice.createdDate}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </Tdfont>
        </Contents>
      )}
      <PageStyle>
        <Pagination
          activePage={page}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={100}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </PageStyle>
    </Board>
  );
};

export default AnBoard;
