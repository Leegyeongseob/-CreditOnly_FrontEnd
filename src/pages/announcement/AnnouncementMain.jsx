import styled from "styled-components";
const Contain = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Aside = styled.div`
  width:27%;
  height: 90%;
  border-radius:15px;
  background-color: #f9f9fd;

`;
const Title = styled.div`
  width:100%;
  height: 8%;
  padding-left: 10%;
  font-size:20px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const ListItemDiv = styled.div`
  width: 100%;
  height: 21%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const ListItem = styled.div`
  width:86%;
  height:80%;
  background-color: #e4e7f5;
  border-radius: 15px;
  cursor: pointer;
`;
const ItemDate = styled.div`
  width:100%;
  height: 15%;
  font-size :14px;
  padding-left:10%;
  padding-top: 3%;
`;
const ItemTitle = styled.div`
  width:100%;
  height: 30%;
  font-size: 25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ItemContent = styled.div`
  width:100%;
  height: 60%;
  font-size:16px;
  display  : flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const MoreBtnDiv = styled.div`
  width:100%;
  height: 8%;
  padding-left: 10%;
  font-size:20px;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const MoreBtnArrow = styled.div`
  width:30px;
  height: 100%;
  font-size:20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease; /* 애니메이션 효과를 부드럽게 하기 위한 전환 효과 */
`;
const MoreBtn = styled.div`
  width:100%;
  height: 100%;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 
`;
const MoreBtnAndArrowDiv = styled.div`
  width:auto;
  height: auto;
  display: flex;
  &:hover ${MoreBtnArrow} {
    transform: translateX(90%); /* 부모 요소에 호버 시 버튼을 오른쪽으로 10px 이동 */
    color: #8290ee; /* 버튼 텍스트 색상 변경 */
  }
`
const MoreBtnEmptyDiv = styled.div`
  width:74%;
  height: 100%;
`;
const AnnouncementMain =()=>{
  // 너무 길 경우 ...으로 생략하는 함수
  const truncateContents = (text) => {
    return text.length > 20 ? text.slice(0, 20) + "..." : text;
  };
  return(
    <Contain> 
      <Aside>
        <Title>새 소식</Title>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <MoreBtnDiv>
          <MoreBtnEmptyDiv/>
          <MoreBtnAndArrowDiv>
            <MoreBtn>더보기</MoreBtn>
            <MoreBtnArrow>&gt;&gt;</MoreBtnArrow>
          </MoreBtnAndArrowDiv>
        </MoreBtnDiv>
      </Aside>
      <Aside>
      <Title>이벤트</Title>
      <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <MoreBtnDiv>
          <MoreBtnEmptyDiv/>
          <MoreBtnAndArrowDiv>
            <MoreBtn>더보기</MoreBtn>
            <MoreBtnArrow>&gt;&gt;</MoreBtnArrow>
          </MoreBtnAndArrowDiv>
        </MoreBtnDiv>
      </Aside>
      <Aside>
      <Title>보도 자료</Title>
      <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <ListItemDiv>
          <ListItem>
            <ItemDate>2024.07.25</ItemDate>
            <ItemTitle>삼성패스 로그인 종료일 변경 안내</ItemTitle>
            <ItemContent>삼성패스 종료 후에도 삼성패스 지문을 이용하시던 고객님께서는 신규로 지문을 등록하시고</ItemContent>
          </ListItem>
        </ListItemDiv>
        <MoreBtnDiv>
          <MoreBtnEmptyDiv/>
          <MoreBtnAndArrowDiv>
            <MoreBtn>더보기</MoreBtn>
            <MoreBtnArrow>&gt;&gt;</MoreBtnArrow>
          </MoreBtnAndArrowDiv>
        </MoreBtnDiv>
      </Aside>
    </Contain>   
  );
}

export default AnnouncementMain;