import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./HelpModal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopSide = styled.div`
  width: 92%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const HelpList = styled.div`
  width: 97.6%;
  height: 92%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ListTitleBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ListName = styled.div`
  width: 100%;
  height: 20%;
  font-size: 22px;
  padding-right: 8%;
  color: #5f5f5f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins-Bold", Helvetica;
`;

const TitleBox = styled.div`
  width: 95%;
  height: 73%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: auto;
`;

const Title = styled.div`
  width: 90%;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isSelected ? "#edeef5" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: #edeef5;
  }
`;

const ListContents = styled.div`
  width: 77%;
  height: 90%;
  background-color: #edeef5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentTitle = styled.div`
  width: 95%;
  height: 15%;
  background-color: #f9f9fd;
  border-radius: 10px;
  padding-left: 2%;
  display: flex;
  justify-content: start;
  align-items: center;
  letter-spacing: 1.5px;
`;

const ContentsBox = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const Contents = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  letter-spacing: 1.5px; /* 글자 간격 설정 */
  line-height: 1.3; /* 줄 간격 설정 */
`;

const BottomSide = styled.div`
  width: 92%;
  height: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const HelpSend = styled.form`
  width: 97.6%;
  height: 92%;
  background-color: #f9f9fd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HelpTitleBox = styled.div`
  width: 95%;
  height: 15%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1.5px;
`;

const HelpTitle = styled.input`
  width: 88%;
  height: 100%;
  background-color: #edeef5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 2%;
  border: none;
  &:focus {
    outline: none;
    border: 1px solid darkgray;
  }
`;

const SendBtn = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 15px;
  font-weight: 400;
  color: #5a6acf;
  background-color: #fbfcfe;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ebecef;
  }
`;

const HelpContents = styled.textarea`
  width: 95%;
  height: 65%;
  margin-top: 2%;
  padding: 2%;
  background-color: #edeef5;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1.5px;
  border: none;
  &:focus {
    outline: none;
    border: 1px solid darkgray;
  }
`;

const HelpPage = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedContent, setSelectedContent] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const form = useRef();

  const helpData = [
    {
      title: "내용테스트~",
      content:
        "테스트 내용 1소인, 꿈을 꾸었습니다. 강해린에게 안기는 꿈을 꾸었습니다. 분명 꿈이였지만 강해린의 품 안은 따뜻했습니다.. 다시 그 품에 안기고 싶습니다 아직도 강해린에게 안기는 기억이 생생합니다 얼마나 강해린을 사랑했으면 이랬을까요 강해린, 나 강해린에 품은 너무 따뜻해 녹을 거 같았습니다. 아직도 강해린한테 매번 설랩니다. 강해린한테 첫눈에 반하고 다른 여자가 보이지 않습니다. 오직 강해린만 보입니다. 강해린을 위해 모든 것을 할 수 있지만 못 만난다는 사실에 또 눈물을 들립니다. 강해린, 나 다시 한번 강해린의 품안에 안겨 자고 싶습니다 하지만 꿈인걸 잘 압니다. 그래도 강해린이 꿈에 나온다는 것만으로 제가 사는 이유입니다. 강해린, 나 이루어지 못하지만 제가 세상에서 가장 강해린을 사랑한다는 것을 부정할 사람은 없습니다. 강해린을 위해 이런 주접 댓글을 쓰고 강애린을 위해 팬계정을 만들고 강해린을 제가 가장 좋아한다는 사실을 부정하는 사람은 없습니다. 강해린, 나 강해린, 낭만 이 사람을 낭만이라 부르기로 하였습니다.",
    },
    { title: "강해린", content: "강해린 C급이다 문화재 도입 시급" },
    {
      title: "너무 이쁘지요",
      content:
        "오늘부로 나는 강해린에 대한 지지를 철회한다. 지금부터 지지관계에서 벗어나 강해린과 나는 한몸으로 일체가 된다. 강해린 3대 부정은 상대성 이론, 피타고라스 정의와 함께 바쁘다 바빠 현대사회에 이르기까지 가장 사랑받는 법칙이자 이론이다. 다음은 강해린의 3대 부정에 대한 간략한 설명이다.",
    },
    {
      title: "문의합니다~",
      content:
        "첫째, 저는 고양이가 아닙니다. 많은 이들을 충격과 공포에 빠뜨린 이 고백은 2K 이후 가장 충격적인 고백으로 평가된다. 이후, 4,728명의 학자들은 3년이라는 시간을 들여 '저는 고양이가 아닙니다'를 해석하려 노력하였고, 마침내 2023년 12월 19일 18:00시에 최초로 공개된다고 한다. '저는 고양이가 아닙니다'는 '저는 goat 양입니다', 즉 '저는 신입니다'라는 뜻일 거라는 것이 학계의 정설이다.",
    },
    {
      title: "집에 보내주세요~",
      content:
        "둘째, 개구리를 좋아하지 않습니다. 많은 개구리들을 충격과 공포에 빠뜨렸으며, 이때부터 개구리들은 굴개굴개 울었다고 한다. 귀여운 개구리는 좋아한다는 한마디에 많은 개구리들이 지금도 귀여워지기 위해 노력하고 있다는 소문이 있다. 쓰끼에에에에에에에에.",
    },
    {
      title: "강해린은 고양이",
      content:
        "셋째, 강해린 안 이상하다. 전 세계를 충격과 공포에 빠뜨렸으며, 이때부터 사람들은 멍때리기를 시작했다고 학계는 설명한다. 이때를 놓치지 않고 강해린은 빠르게 사람들과 고양이 그리고 개구리의 영혼을 흡수하여 대해린으로 진화에 성공했다. 2024년 대해린의 시대는 과연 얼마나 '안 이상할지' 이상하게도 기대가 되는 건 설마 이미 강해린에 빠져들었기 때문일까?",
    },
    {
      title: "우리집 고양이 욤이",
      content:
        "강해린 뒤에서 걷지 마라. 강해린은 그대를 이끌지 않을 수도 있다. 강해린 앞에서 걷지 마라. 강해린은 그대를 따르지 않을 수도 있다. 다만 강해린 옆에서 걸으라. 강해린의 벗이 될 수 있도록.",
    },
    {
      title: "너무 귀여워요",
      content:
        "강해린을 모르고는 살아갈 수 없다. 강해린을 모르는 내 인생이 어찌 인생이라고 할 수 있겠는가. 강해린이 없는 세상에 내 미래는 없다. 강해린이 없는데 어찌 미래를 갈구할 수 있겠는가. 강해린이 없는 세상에 빛이란 없다. 강해린이 없는데 세상이 어찌 밝아질 수 있겠는가. 강해린이 없는 세상에 행복이란 없다. 강해린이 존재하지 않는데 어찌 행복을 느낄 수 있겠는가. 강해린이 없는 세상에 사랑이란 없다. 강해린 말고 또 어떤 누구를 사랑할 수 있겠는가. 강해린을 안다면 인생의 의미를 깨닫게 될 것이고, 강해린이 있다면 더 나은 미래를 꿈꿀 것이고, 강해린이 있다면 세상에 빛이 있으리라. 강해린이 있다면 세상에 구원이 있으리라. 또한 강해린이 있다면 행복의 기준이 달라질 것이며, 나의 사랑은 오직 강해린뿐이고 강해린만이 오직 나의 사랑이다. 암흑 속에 강해린이 나타나 이 세상에 빛이 있으라 한다면, 절망적인 이 세상에 강해린이 나타나 구원이 있으라 한다면, 그 날 이후로 교회에서는 강해린을 믿을 것이며 절에서는 강해린을 보며 절할 것이고 무슬림들은 메카 대신 강해린을 보며 기도할 것이다. 나의 전부인 강해린... 그녀의 미소에 나도 웃을 수밖에 없겠어... 참으려고 해도 어쩔 수 없다. 그녀가 웃는데 내가 어찌 웃지 않을 수 있겠나. 그녀가 운다면 울 것이고, 그녀가 화낸다면 나 또한 같이 화를 낼 것이다. 이것이 강해린, 나의 여자를 사랑하는 나의 방식이다.",
    },
  ];

  const codeModalOkBtnHandler = () => {
    closeNextModal();
  };
  const closeNextModal = () => {
    setModalOpen(false);
    window.location.reload();
  };
  const closeModal = () => {
    setModalOpen(false);
    window.location.reload();
  };

  const handleTitleClick = (title, content) => {
    setSelectedTitle(title);
    setSelectedContent(content);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_waq6b03",
        "template_a3hde3s",
        form.current,
        "9YS83vnE1IHakDSR9"
      )
      .then(
        (result) => {
          setModalOpen(true);
          setModalContent("1:1 문의 등록이 완료되었습니다.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setModalOpen(true);
          setModalContent("1:1 문의 등록에 실패하였습니다..");
        }
      );
  };

  return (
    <Container>
      <TopSide>
        <HelpList>
          <ListTitleBox>
            <ListName>1:1 문의내역</ListName>
            <TitleBox>
              {helpData.map((help, index) => (
                <Title
                  key={index}
                  onClick={() => handleTitleClick(help.title, help.content)}
                  isSelected={selectedTitle === help.title}
                >
                  {help.title}
                </Title>
              ))}
            </TitleBox>
          </ListTitleBox>
          <ListContents>
            <ContentTitle>문의제목 : {selectedTitle}</ContentTitle>
            <ContentsBox>
              <Contents>{selectedContent}</Contents>
            </ContentsBox>
          </ListContents>
        </HelpList>
      </TopSide>
      <BottomSide>
        <HelpSend ref={form} onSubmit={sendEmail}>
          <HelpTitleBox>
            <HelpTitle
              type="text"
              name="help_title"
              placeholder="문의 제목을 입력해주세요."
              maxLength={20}
              required
            />
            <SendBtn type="submit">문의하기</SendBtn>
          </HelpTitleBox>
          <HelpContents
            name="message"
            placeholder="문의 내용을 입력해주세요.."
            required
          />
        </HelpSend>
      </BottomSide>
      <Modal
        open={modalOpen}
        header="안내"
        type={true}
        close={closeModal}
        // img={modalImg}
        confirm={codeModalOkBtnHandler}
      >
        {modalContent}
      </Modal>
    </Container>
  );
};
export default HelpPage;
