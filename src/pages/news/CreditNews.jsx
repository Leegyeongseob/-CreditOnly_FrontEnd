import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const Container = styled.div`

  width: 99%;
  height: 100%;
`;

const Group = styled.div`

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Banner = styled.div`
 
  background-color: #f9f9fd;
  border-radius: 10px;
  width: 46%;
  height: 48%;
  margin-left: 5vw;
`;
const Information = styled.div`

  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  height: 48%;
  width: 41%;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
`;
const App = styled.div`

  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  height: 48%;
  width: 45%;
  flex-direction: column;
  justify-content: center;
  margin-left: 2vw;
`;
const Card = styled.div`
 
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  height: 48%;
  width: 45%;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
`;
const TitleWrap = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0 1vw;
`;
const TitlePage = styled.div`
  color: #5e5e5e;
  font-size: 20px;
`;

const IcBaselinePlus = styled(FaPlus)`
  margin-right: 10px;
`;

const CardListWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
`;
const CardList = styled.div`
 
  background-color: #e4e7f5;
  height: 45%;
  width: 43%;
  display: flex;
  flex-direction: column;
`;
const Limg = styled.img`
 
  width: 100%;
  height: 70%;
  object-fit: cover;
`;
const InformationText = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListGroup = styled.div`
  background-color: #e4e7f5;
  display: flex;
  width: 90%;
  height: 42%;
  justify-content: space-around;
  align-items: center;
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
const TextWrapper = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;
const DetailWrap = styled.div`
  width: 100%;
  letter-spacing: 0.5px;
  line-height: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
  
`;

const CreditNews = () => {
  return (
    <Container>
      <Group>
        <Banner></Banner>
        <Information>
          <TitleWrap>
            <TitlePage>신용조회 정보모음</TitlePage>
            <IcBaselinePlus
              alt="Ic baseline plus"
              src="ic-baseline-plus-2.svg"
            />
          </TitleWrap>
          <CardListWrapper>
            <CardList>
              <Limg alt="Rectangle" src="rectangle-10229.png" />
              <InformationText>신용정보 활용 팁</InformationText>
            </CardList>

            <CardList>
              <Limg alt="Rectangle" src="rectangle-10231.png" />
              <InformationText>신용불량자를 위한 정보</InformationText>
            </CardList>

            <CardList>
              <Limg alt="Rectangle" src="rectangle-10231-2.png" />
              <InformationText>신용불량자를 위한 정보</InformationText>
            </CardList>

            <CardList>
              <Limg alt="Rectangle" src="rectangle-10231-3.png" />
              <InformationText>신용불량자를 위한 정보</InformationText>
            </CardList>
          </CardListWrapper>
        </Information>
        <App>
          <TitleWrap>
            <TitlePage>신용조회 어플추천</TitlePage>
            <IcBaselinePlus />
          </TitleWrap>

          <ListWrapper>
            <ListGroup>
              <Simg alt="Rectangle" src="rectangle-10232.png" />
              <ListDetailWrap>
                <TextWrapper>알다어플로 확인하기</TextWrapper>
                <DetailWrap>
                  이는 자산 관리 및 전국적인 무료 신용 조회를 가능하게 하는
                  ‘알’응용 프로그램입니다. 내 신용에 따르면 
                </DetailWrap>
              </ListDetailWrap>
            </ListGroup>

            <ListGroup>
              <Simg alt="Rectangle" src="rectangle-10228.png" />
              <ListDetailWrap>
                <TextWrapper>핀셋어플로 확인하기</TextWrapper>
                <DetailWrap>
                  한 달에 한 번뿐이라고 생각했지만, 몇번이나 보고 계속 할 수
                  있습니다. 또한 신용등급 조회 서비스는 기...
                </DetailWrap>
              </ListDetailWrap>
            </ListGroup>
          </ListWrapper>
        </App>
        <Card>
          <TitleWrap>
            <TitlePage>신용카드와 신용정보</TitlePage>
            <IcBaselinePlus />
          </TitleWrap>

          <ListWrapper>
            <ListGroup>
              <Simg alt="Rectangle" src="image.png" />
              <ListDetailWrap>
                <TextWrapper>신용카드해지시 신용등급이 낮아질까?</TextWrapper>
                <DetailWrap>
                  각 신용 카드가 있다고 생각합니다. 다양한 신용카드가 발급되면,
                  쇼핑이나 커피숍 마트 시네마 등의 혜택...
                </DetailWrap>
              </ListDetailWrap>
            </ListGroup>

            <ListGroup>
              <Simg alt="Rectangle" src="rectangle-10228-2.png" />
              <ListDetailWrap>
                <TextWrapper>
                  자신의 신용등급으로 신용카드 발급자격 확인하기
                </TextWrapper>
                <DetailWrap>
                  신인이 먼저 물어 질문 중 하나는 신용 카드의 적격 여부입니다.
                  시뮬레이션입니다. 신용 등급으로 신용카드...
                </DetailWrap>
              </ListDetailWrap>
            </ListGroup>
          </ListWrapper>
        </Card>
      </Group>
    </Container>
  );
};
export default CreditNews;
