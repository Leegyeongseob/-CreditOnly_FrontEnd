import { Outlet } from "react-router-dom";
import styled from "styled-components";
export const Screen = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const OverlapWrapper = styled.div`
  background-color: #ffffff;
  height: 960px;
  width: 1440px;
`;

export const Overlap = styled.div`
  height: 960px;
  position: relative;
`;

export const Group = styled.div`
  background-color: #f8f9fc;
  border-radius: 10px;
  height: 406px;
  position: absolute;
  top: 526px;
  left: 268px;
  width: 559px;
`;

export const AccountInfo = styled.div`
  height: 32px;
  position: absolute;
  top: 16px;
  left: 1183px;
  width: 222px;
`;

export const Emoticon = styled.div`
  color: #ffffff;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  position: absolute;
  top: 9px;
  left: 8px;
  letter-spacing: 0.5px;
  line-height: 13px;
  white-space: nowrap;
`;

export const MerchantName = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1f384c;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  background-color: #f5f6fa;
`;

export const ArrowChevronDown = styled.div`
  height: 20px !important;
  position: absolute !important;
  top: 8px !important;
  left: 152px !important;
  width: 20px !important;
`;

export const Div = styled.div`
  height: 18px;
  position: absolute;
  top: 6px;
  left: 204px;
  width: 15px;
`;

export const NotifIcon = styled.div`
  height: 16px;
  position: absolute;
  top: 2px;
  left: 0;
  width: 13px;
`;

export const NotifSign = styled.div`
  background-color: #eb5151;
  border: 1.2px solid #ffffff;
  border-radius: 4.2px;
  height: 8px;
  position: absolute;
  top: 0;
  left: 7px;
  width: 8px;
`;

export const Search = styled.div`
  height: 32px;
  position: absolute;
  top: 13px;
  left: 284px;
  width: 627px;
`;

export const Overlap2 = styled.div`
  background-color: #f5f6fa;
  border-radius: 5px;
  height: 32px;
  position: relative;
  width: 625px;
`;

export const Samantha = styled.div`
  color: #1f384c;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  top: 10px;
  left: 15px;
  letter-spacing: 0.5px;
  line-height: 13px;
  opacity: 0.3;
  white-space: nowrap;
`;

export const Icon = styled.div`
  height: 13px;
  position: absolute;
  top: 9px;
  left: 597px;
  width: 13px;
`;

export const Overlap3 = styled.div`
  height: 960px;
  position: absolute;
  top: 0;
  left: 0;
  width: 1440px;
`;

export const Sidebar = styled.div`
  background-color: #f1f2f7;
  height: 960px;
  position: absolute;
  top: 0;
  left: 0;
  width: 240px;
`;

export const Menu = styled.div`
  height: 137px;
  position: absolute;
  top: 104px;
  left: 20px;
  width: 143px;
`;

export const DashboardWrapper = styled.div`
  background-image: url(./active-background.svg);
  background-size: 100% 100%;
  height: 42px;
  position: absolute;
  top: 23px;
  left: 0;
  width: 141px;
`;

export const Dashboard = styled.div`
  height: 18px;
  position: relative;
  top: 12px;
  left: 19px;
  width: 105px;
`;

export const TextWrapper = styled.div`
  color: #273240;
  font-family: "Poppins-Medium", Helvetica;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: 3px;
  left: 28px;
  letter-spacing: 0.5px;
  line-height: 12px;
  width: 75px;
`;

export const Img = styled.div`
  height: 18px;
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
`;

export const Manage = styled.div`
  height: 18px;
  position: absolute;
  top: 119px;
  left: 19px;
  opacity: 0.6;
  width: 116px;
`;

export const ManageMenu = styled.div`
  color: #273240;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 3px;
  left: 28px;
  letter-spacing: 0.5px;
  line-height: 12px;
  width: 86px;
`;

export const Order = styled.div`
  height: 18px;
  position: absolute;
  top: 77px;
  left: 19px;
  opacity: 0.6;
  width: 86px;
`;

export const FoodOrder = styled.div`
  color: #273240;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 3px;
  left: 28px;
  letter-spacing: 0.5px;
  line-height: 12px;
  width: 56px;
`;

export const TextWrapper2 = styled.div`
  color: #082431;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 13px;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 19px;
  letter-spacing: 1px;
  line-height: 11px;
  opacity: 0.5;
  width: 42px;
`;

export const Logo = styled.div`
  height: 24px;
  position: absolute;
  top: 20px;
  left: 40px;
  width: 66px;
`;

export const Logo2 = styled.div`
  background-image: url(./oval.png);
  background-position: 50% 50%;
  background-size: cover;
  height: 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
`;

export const Name = styled.div`
  color: #5a67ba;
  font-family: "Poppins-Bold", Helvetica;
  font-size: 13px;
  font-weight: 700;
  position: absolute;
  top: 6px;
  left: 32px;
  letter-spacing: 0.5px;
  line-height: 11px;
  white-space: nowrap;
`;

export const Separator = styled.div`
  height: 1px;
  position: absolute;
  top: 64px;
  left: 0;
  width: 1440px;
`;

export const Review = styled.div`
  background-image: url(./chat.svg);
  background-size: 100% 100%;
  height: 18px;
  position: absolute;
  top: 260px;
  left: 40px;
  opacity: 0.6;
  width: 17px;
`;

export const Help = styled.div`
  height: 18px;
  position: absolute;
  top: 409px;
  left: 39px;
  opacity: 0.6;
  width: 86px;
`;

export const Help2 = styled.div`
  color: #273240;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 3px;
  left: 33px;
  letter-spacing: 0.5px;
  line-height: 12px;
  width: 51px;
`;

export const Img2 = styled.div`
  height: 18px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
`;

export const Settings = styled.div`
  height: 18px;
  position: absolute;
  top: 379px;
  left: 39px;
  opacity: 0.6;
  width: 93px;
`;

export const Settings2 = styled.div`
  color: #273240;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 3px;
  left: 33px;
  letter-spacing: 0.5px;
  line-height: 12px;
  width: 58px;
`;

export const TextWrapper3 = styled.div`
  color: #273240;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  top: 343px;
  left: 39px;
  letter-spacing: 1px;
  line-height: 11px;
  opacity: 0.5;
  width: 55px;
`;

export const Review2 = styled.div`
  height: 18px;
  position: absolute;
  top: 302px;
  left: 39px;
  opacity: 0.6;
  width: 133px;
`;

export const CustomerReview = styled.div`
  color: #273240;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 3px;
  left: 27px;
  letter-spacing: 0.5px;
  line-height: 12px;
  width: 104px;
`;

export const Manage2 = styled.div`
  height: 18px;
  position: absolute;
  top: 260px;
  left: 39px;
  opacity: 0.6;
  width: 116px;
`;

export const Overlap4 = styled.div`
  border-radius: 104px;
  height: 32px;
  position: absolute;
  top: 13px;
  left: 1001px;
  width: 68px;
`;

export const Toggle = styled.div`
  background-color: #78c6ff;
  border-radius: 104px;
  box-shadow: 0px 2.5px 6.25px #90909040;
  height: 32px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 68px;
`;

export const Ellipse = styled.div`
  height: 26px;
  position: absolute;
  top: 3px;
  left: 6px;
  width: 26px;
`;

export const Union = styled.div`
  height: 18px;
  position: absolute;
  top: 7px;
  left: 10px;
  width: 18px;
`;

export const Group2 = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  height: 406px;
  position: absolute;
  top: 92px;
  left: 944px;
  width: 468px;
`;

export const Group3 = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  height: 406px;
  position: absolute;
  top: 526px;
  left: 855px;
  width: 557px;
`;

export const Group4 = styled.div`
  background-color: #f9f9fd;
  border-radius: 10px;
  height: 406px;
  position: absolute;
  top: 92px;
  left: 268px;
  width: 648px;
`;

const MainForm = () => {
  return (
    <Screen>
      <OverlapWrapper>
        <Overlap>
          <AccountInfo>
            <MerchantName>로그인</MerchantName>
            <ArrowChevronDown />
            {/* <NotificationContainer>
              <NotifIcon src="notif-icon.svg" alt="Notif icon" />
              <NotifSign />
            </NotificationContainer> */}
          </AccountInfo>
          <Search>
            <Overlap2>
              <Samantha>검색어를 입력해주세요.</Samantha>
              <Icon src="icon.png" alt="Icon" />
            </Overlap2>
          </Search>
          <Sidebar>
            <Menu>
              <DashboardWrapper>
                <Dashboard>
                  <TextWrapper>Dashboard</TextWrapper>
                  <Img src="chart.svg" alt="Iconly bold chart" />
                </Dashboard>
              </DashboardWrapper>
              <Manage>
                <ManageMenu>신용정보</ManageMenu>
                <Img src="document.svg" alt="Iconly bold document" />
              </Manage>
              <Order>
                <FoodOrder>공지사항</FoodOrder>
                <Img src="buy.svg" alt="Iconly bold buy" />
              </Order>
              <TextWrapper2>MENU</TextWrapper2>
            </Menu>
            <Logo>
              <Logo2 />
              <Name>신용만</Name>
            </Logo>
          </Sidebar>
          <Separator src="separator.svg" alt="Separator" />
          <Review />
          <Help>
            <Help2>고객지원</Help2>
            <Img2 src="info-square.svg" alt="Iconly bold info" />
          </Help>
          <Settings>
            <Settings2>설정</Settings2>
            <Img2 src="setting.svg" alt="Iconly bold setting" />
          </Settings>
          <TextWrapper3>OTHERS</TextWrapper3>
          <Review2>
            <CustomerReview>문의사항</CustomerReview>
            <Img src="image.svg" alt="Iconly bold chat" />
          </Review2>
          <Manage2>
            <ManageMenu>신용평가</ManageMenu>
            <Img src="document-2.svg" alt="Iconly bold document" />
          </Manage2>
          <Overlap4>
            <Toggle>
              {/* <ConcreteComponentNode fill size="twenty-four" type="moon" /> */}
            </Toggle>
            <Ellipse src="ellipse-77.svg" alt="Ellipse" />
            <Union src="union.svg" alt="Union" />
          </Overlap4>
          <Outlet />
        </Overlap>
      </OverlapWrapper>
    </Screen>
  );
};
export default MainForm;
