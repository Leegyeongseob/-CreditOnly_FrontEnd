import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { exText } from "./AnBoard"; // 예시 데이터 사용
import AnnouncementAxios from "../../axiosapi/AnnouncementAxios";
import { UserEmailContext } from "../../contextapi/UserEmailProvider";

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

const HelpBoard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const EditBtn = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HelpBoardText = styled.div`
  width: 96%;
  height: 90%;
  font-size: 22px;
  padding: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleLeft = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  @media screen and (max-width: 1100px) {
    font-size: 19px;
  }
`;

const TitleRight = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  @media screen and (max-width: 1100px) {
    font-size: 17px;
  }
`;

const AnBoardDetails = () => {
  const { email, adminEmails = [] } = useContext(UserEmailContext);
  const { classTitle } = useParams();
  const location = useLocation();
  const { notice } = location.state || {}; // 전달된 notice 객체를 가져옴
  const [clickTitle, setClickTitle] = useState("");
  const navigate = useNavigate();
  const isAdmin = adminEmails.includes(email);

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

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleEditClick = () => {};
  const handleDelClick = () => {};

  return (
    <Board>
      <BtnDiv>
        <Btn onClick={handleBackClick}>뒤로</Btn>
        <EditBtn>
          {isAdmin && (
            <>
              <Btn onClick={() => handleEditClick()}>수정</Btn>
              <Btn onClick={() => handleDelClick()}>삭제</Btn>
            </>
          )}
        </EditBtn>
      </BtnDiv>
      <Title>{clickTitle}</Title>
      <Contents>
        <TitleBox>
          <TitleLeft>제목 : {notice?.title || "제목 없음"}</TitleLeft>
          <TitleRight>작성일: {notice?.createdDate || "날짜 없음"}</TitleRight>
        </TitleBox>
        <HelpBoard>
          <HelpBoardText>
            {notice ? (
              <div>
                <p>{notice.contents}</p>
              </div>
            ) : (
              <p>공지사항을 찾을 수 없습니다.</p>
            )}
          </HelpBoardText>
        </HelpBoard>
      </Contents>
    </Board>
  );
};

export default AnBoardDetails;
