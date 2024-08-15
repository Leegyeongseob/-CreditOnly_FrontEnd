import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AnnouncementAxios from "../../axiosapi/AnnouncementAxios";
import { UserEmailContext } from "../../contextapi/UserEmailProvider";
import Modal from "../help/HelpModal";
import modalImg from "../../img/commonImg/전구 아이콘.gif";

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
  width: 92%;
  height: 5%;
  padding: 0 2% 0 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0 5% 0 3%;
  }
`;

const EditBtn = styled.div`
  width: 200px;
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

const TitleDiv = styled.div`
  width: 92%;
  height: 10%;
  margin-top: 1%;
  padding-top: 1%;
  padding-left: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.commponent};
  transition: background-color 0.5s ease;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;
const Title = styled.h1`
  width: 285px;
  height: 90%;
  padding-left: 1%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  font-weight: bolder;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding-left: 8%;
    font-size: 25px;
  }
`;

const Contents = styled.div`
  width: 92%;
  height: 74%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const TitleBox = styled.div`
  width: 95%;
  height: 15%;
  margin-top: 1%;
  padding-left: 2%;
  background-color: ${({ theme }) => theme.sideBar};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 88%;
    padding-left: 5%;
  }
`;

const TitleUp = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  @media screen and (max-width: 1200px) {
    font-size: 19px;
  }
`;

const TitleDown = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 17px;
  }
`;

const HelpBoardText = styled.div`
  width: 96%;
  height: 90%;
  font-size: 22px;
  padding: 3%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    padding: 8%;
  }
`;
const HelpBoard = styled.div`
  width: 95%;
  height: 80%;
  margin-bottom: 2%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.sideBar};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    width: 88%;
  }
`;

const AnBoardDetails = () => {
  const { email, adminEmails = [] } = useContext(UserEmailContext);
  const { classTitle, noticeId } = useParams(); // noticeId 추가
  const location = useLocation();
  const navigate = useNavigate();

  // location.state로 전달된 notice를 우선 가져오고, 없으면 null로 초기화
  const [notice, setNotice] = useState(location.state?.notice || null);
  const [clickTitle, setClickTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const isAdmin = adminEmails.includes(email);

  useEffect(() => {
    // classTitle에 따라 타이틀 설정
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
    // notice 데이터가 없으면 서버에서 다시 불러옴
    const fetchNotice = async () => {
      if (!notice || notice.id !== noticeId) {
        try {
          const response = await AnnouncementAxios.getAnnouncement(noticeId);
          setNotice(response.data);
        } catch (error) {
          console.error("Failed to fetch notice", error);
        }
      }
    };

    fetchNotice();
  }, [notice, noticeId]);

  const handleBackClick = () => {
    navigate(`/announcement/${classTitle}`);
  };

  const handleEditClick = async () => {
    try {
      const updatedNotice = {
        ...notice,
        title: "수정된 제목", // 예시로 수정된 제목
        contents: "수정된 내용", // 예시로 수정된 내용
      };
      await AnnouncementAxios.updateAnnouncement(notice.id, updatedNotice);
      setNotice(updatedNotice); // notice 상태 업데이트
    } catch (error) {
      console.error("Error updating announcement:", error);
    }
  };

  const handleDelClick = async () => {
    try {
      await AnnouncementAxios.deleteAnnouncement(notice.id);
      setModalOpen(true);
      setModalContent("게시글 삭제가 완료되었습니다.");
    } catch (error) {
      console.error("Error deleting announcement:", error);
    }
  };

  const codeModalOkBtnHandler = () => {
    closeNextModal();
  };

  const closeNextModal = () => {
    setModalOpen(false);
    navigate(`/announcement/${classTitle}`);
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate(`/announcement/${classTitle}`);
  };

  return (
    <Board>
      <BtnDiv>
        <Btn onClick={handleBackClick}>뒤로</Btn>
        {isAdmin && (
          <EditBtn>
            <Btn onClick={handleEditClick}>수정</Btn>
            <Btn onClick={handleDelClick}>삭제</Btn>
          </EditBtn>
        )}
      </BtnDiv>
      <TitleDiv>
        <Title>{clickTitle}</Title>
      </TitleDiv>
      <Contents>
        <TitleBox>
          <TitleUp>제목 : {notice?.title || "제목 없음"}</TitleUp>
          <TitleDown>작성일 : {notice?.createdDate || "날짜 없음"}</TitleDown>
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
      <Modal
        open={modalOpen}
        header="1:1 문의하기"
        type={true}
        close={closeModal}
        img={modalImg}
        confirm={codeModalOkBtnHandler}
      >
        {modalContent}
      </Modal>
    </Board>
  );
};

export default AnBoardDetails;
