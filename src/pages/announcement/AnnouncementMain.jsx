import React from "react";
import styled from "styled-components";
import { ChevronDown } from "./ChevronDown";
import { ConcreteComponentNode } from "./ConcreteComponentNode";

const ScreenWrapper = styled.div`
  .screen {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .overlap-wrapper {
    display: flex;
    flex: 1;
    position: relative;
  }
  .overlap {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .account-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .emoticon {
    font-size: 24px;
  }
  .merchant-name {
    font-size: 16px;
    font-weight: bold;
  }
  .notif-icon {
    width: 24px;
    height: 24px;
  }
  .notif-sign {
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
  }
  .search {
    display: flex;
    align-items: center;
  }
  .samantha {
    font-size: 14px;
    color: #999;
  }
  .icon {
    width: 24px;
    height: 24px;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
  }
  .menu {
    display: flex;
    flex-direction: column;
  }
  .accounts,
  .payment,
  .settings,
  .review,
  .manage,
  .manage-2,
  .order,
  .dashboard,
  .help {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .text-wrapper,
  .text-wrapper-2,
  .text-wrapper-3,
  .text-wrapper-4,
  .text-wrapper-5,
  .text-wrapper-6,
  .text-wrapper-7,
  .text-wrapper-8,
  .text-wrapper-9,
  .text-wrapper-10,
  .text-wrapper-11,
  .text-wrapper-12 {
    font-size: 14px;
  }
  .group,
  .group-2,
  .group-3,
  .group-4,
  .group-5,
  .group-6,
  .group-7,
  .group-8,
  .group-9,
  .group-10 {
    display: flex;
    flex-direction: column;
  }
  .overlap-group {
    display: flex;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .separator {
    width: 1px;
    background: #ddd;
  }
  .toggle {
    display: flex;
    align-items: center;
  }
  .ellipse,
  .union {
    width: 24px;
    height: 24px;
  }
  .view,
  .view-2,
  .view-3 {
    display: flex;
    flex-direction: column;
  }
  .overlap-group-2,
  .overlap-group-3 {
    display: flex;
    flex-direction: column;
  }
  .p {
    font-size: 12px;
    color: #666;
  }
  .title-page,
  .title-page-2,
  .title-page-3,
  .title-page-4,
  .title-page-5 {
    font-size: 12px;
    color: #999;
  }
`;

const Screen = () => {
  return (
    <ScreenWrapper>
      <div className="screen">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="account-info">
              <div className="overlap-group">
                <div className="emoticon">🍔</div>
              </div>
              <div className="merchant-name">백승지</div>
              <ChevronDown className="arrow-chevron-down" color="#1F384C" />
              <div className="div">
                <img
                  className="notif-icon"
                  alt="Notif icon"
                  src="notif-icon.svg"
                />
                <div className="notif-sign" />
              </div>
            </div>
            <div className="search">
              <div className="overlap-2">
                <div className="samantha">검색어를 입력해주세요.</div>
                <img className="icon" alt="Icon" src="icon.png" />
              </div>
            </div>
            <div className="overlap-3">
              <div className="sidebar">
                <div className="menu">
                  <div className="accounts">
                    <div className="text-wrapper">계정 관리</div>
                    <img
                      className="iconly-bold-profile"
                      alt="Iconly bold profile"
                      src="profile.svg"
                    />
                  </div>
                  <div className="payment">
                    <div className="payment-2">결제 정보</div>
                    <img
                      className="img"
                      alt="Iconly bold wallet"
                      src="wallet.svg"
                    />
                  </div>
                  <div className="settings">
                    <div className="settings-2">설정</div>
                    <img
                      className="img"
                      alt="Iconly bold setting"
                      src="setting.svg"
                    />
                  </div>
                  <div className="text-wrapper-2">OTHERS</div>
                  <div className="review">
                    <div className="customer-review">문의 사항</div>
                    <img
                      className="img-2"
                      alt="Iconly bold chat"
                      src="chat.svg"
                    />
                  </div>
                  <div className="manage">
                    <div className="manage-menu">신용 정보</div>
                    <img
                      className="img-2"
                      alt="Iconly bold document"
                      src="document.svg"
                    />
                  </div>
                  <div className="manage-2">
                    <div className="manage-menu">신용 평가</div>
                    <img
                      className="img-2"
                      alt="Iconly bold document"
                      src="document-2.svg"
                    />
                  </div>
                  <div className="order">
                    <div className="overlap-group-2">
                      <div className="order-2">공지 사항</div>
                      <img
                        className="active-background"
                        alt="Active background"
                        src="active-background.svg"
                      />
                      <img
                        className="iconly-bold-buy"
                        alt="Iconly bold buy"
                        src="buy.svg"
                      />
                    </div>
                  </div>
                  <div className="dashboard">
                    <div className="text-wrapper-3">Dashboard</div>
                    <img
                      className="img-2"
                      alt="Iconly bold chart"
                      src="chart.svg"
                    />
                  </div>
                  <div className="text-wrapper-4">MENU</div>
                  <div className="help">
                    <div className="help-2">고객 지원</div>
                    <img
                      className="img"
                      alt="Iconly bold info"
                      src="info-square.svg"
                    />
                  </div>
                </div>
                <div className="logo">
                  <div className="logo-2" />
                  <div className="name">신용만</div>
                </div>
              </div>
              <img className="separator" alt="Separator" src="separator.svg" />
            </div>
            <div className="overlap-4">
              <div className="toggle">
                <ConcreteComponentNode fill size="twenty-four" type="moon" />
              </div>
              <img className="ellipse" alt="Ellipse" src="ellipse-77.svg" />
              <img className="union" alt="Union" src="union.svg" />
            </div>
            <div className="view">
              <div className="overlap-5">
                <div className="text-wrapper-5">더보기 &gt;</div>
                <div className="group">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-6">
                      2024년 4월 신용점수 조사결과
                    </div>
                    <p className="p">
                      안녕하세요, 신용만입니다. 2024년 4월의 신용점수 조사
                      결과를 알려드립니다. 아...
                    </p>
                    <div className="title-page">2024.05.11</div>
                  </div>
                </div>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-6">
                      2024년 5월 신용점수 조사결과
                    </div>
                    <p className="p">
                      안녕하세요, 신용만입니다. 2024년 5월의 신용점수 조사
                      결과를 알려드립니다. 아...
                    </p>
                    <div className="title-page-2">2024.06.06</div>
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-6">
                      2024년 6월 신용점수 조사결과
                    </div>
                    <p className="p">
                      안녕하세요, 신용만입니다. 2024년 6월의 신용점수 조사
                      결과를 알려드립니다. 아...
                    </p>
                    <div className="title-page-3">2024.07.06</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-7">
                      2024년 7월 신용점수 조사결과
                    </div>
                    <p className="p">
                      안녕하세요, 신용만입니다. 2024년 7월의 신용점수 조사
                      결과를 알려드립니다. 아...
                    </p>
                    <div className="title-page-3">2024.08.07</div>
                  </div>
                </div>
                <div className="text-wrapper-8">보도 자료</div>
              </div>
            </div>
            <div className="view-2">
              <div className="overlap-6">
                <div className="text-wrapper-5">더보기 &gt;</div>
                <div className="group-3">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-9">
                      수험생들의 꿈을 응원합니다!
                    </div>
                    <p className="p">
                      개인정보보호법 제39조의6(개인정보의 파기에 대한
                      특례)폐지로, 이용약관 내 1...
                    </p>
                    <div className="title-page">2024.07.17</div>
                  </div>
                </div>
                <div className="group-4">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-9">
                      첫 사용하고 커피받아가자!
                    </div>
                    <p className="p">
                      아래 시간 동안 서비스 점검 작업으로 일부 이용이 제한 될 수
                      있습니다. 자세한 내...
                    </p>
                    <div className="title-page">2024.07.17</div>
                  </div>
                </div>
                <div className="group-5">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-10">퀴즈풀고 직관가자!</div>
                    <p className="p">
                      안녕하세요, 신용만입니다. 신용만의 개인정보처리방침이
                      아래와 같이 변경될 예정...
                    </p>
                    <div className="title-page">2024.07.17</div>
                  </div>
                </div>
                <div className="group-6">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-10">OOOO이벤트!</div>
                    <p className="p">
                      삼성패스 종료 후에도 삼성패스 지문을 이용하시던
                      고객님께서는 신규로 지문을 등...
                    </p>
                    <div className="title-page">2024.07.17</div>
                  </div>
                </div>
                <div className="text-wrapper-8">이벤트</div>
              </div>
            </div>
            <div className="view-3">
              <div className="overlap-7">
                <div className="text-wrapper-5">더보기 &gt;</div>
                <div className="group-7">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-11">
                      이용약관 변경 예정 공지
                    </div>
                    <p className="p">
                      개인정보보호법 제39조의6(개인정보의 파기에 대한
                      특례)폐지로, 이용약관 내 1...
                    </p>
                    <div className="title-page-4">2024.04.23</div>
                  </div>
                </div>
                <div className="group-8">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-12">서비스 일시 중단 안내</div>
                    <p className="p">
                      아래 시간 동안 서비스 점검 작업으로 일부 이용이 제한 될 수
                      있습니다. 자세한 내...
                    </p>
                    <div className="title-page">2024.05.31</div>
                  </div>
                </div>
                <div className="group-9">
                  <div className="overlap-group-3">
                    <div className="text-wrapper-6">
                      개인정보처리방침 변경 예정 공지
                    </div>
                    <p className="p">
                      안녕하세요, 신용만입니다. 신용만의 개인정보처리방침이
                      아래와 같이 변경될 예정...
                    </p>
                    <div className="title-page">2024.06.11</div>
                  </div>
                </div>
                <div className="group-10">
                  <div className="overlap-group-3">
                    <p className="text-wrapper-6">
                      삼성패스 로그인 종료일 변경 안내
                    </p>
                    <p className="p">
                      삼성패스 종료 후에도 삼성패스 지문을 이용하시던
                      고객님께서는 신규로 지문을 등...
                    </p>
                    <div className="title-page-5">2024.07.25</div>
                  </div>
                </div>
                <div className="text-wrapper-8">새 소식</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenWrapper>
  );
};

export default Screen;
