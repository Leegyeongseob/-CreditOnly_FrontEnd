import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./SideBar";
import Header from "./Header";

const Screen = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 94vh;
`;

const Contents = styled.div`
  display: flex;
  width: 86%;
  height: 90%;
`

const OverlapWrapper = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
`;

const AccountInfo = styled.div`
  height: 32px;
  top: 16px;
  left: 1183px;
  width: 222px;
`;

const MerchantName = styled.div`
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

const ArrowChevronDown = styled.div`
  height: 20px !important;
  position: absolute !important;
  top: 8px !important;
  left: 152px !important;
  width: 20px !important;
`;

const Search = styled.div`
  height: 32px;
  position: absolute;
  top: 13px;
  left: 284px;
  width: 627px;
`;

const Overlap2 = styled.div`
  background-color: #f5f6fa;
  border-radius: 5px;
  height: 32px;
  position: relative;
  width: 625px;
`;

const Samantha = styled.div`
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

const Icon = styled.div`
  height: 13px;
  position: absolute;
  top: 9px;
  left: 597px;
  width: 13px;
`;

const Overlap4 = styled.div`
  border-radius: 104px;
  height: 32px;
  position: absolute;
  top: 13px;
  left: 1001px;
  width: 68px;
`;

const Toggle = styled.div`
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

const Ellipse = styled.div`
  height: 26px;
  position: absolute;
  top: 3px;
  left: 6px;
  width: 26px;
`;

const Union = styled.div`
  height: 18px;
  position: absolute;
  top: 7px;
  left: 10px;
  width: 18px;
`;

const MainForm = () => {
  return (
    <>
    <Header/>
    <Screen>
      <SideBar/>
      {/* <OverlapWrapper>
          <AccountInfo>
            <MerchantName>로그인</MerchantName>
          </AccountInfo>
          <Search>
            <Overlap2>
              <Samantha>검색어를 입력해주세요.</Samantha>
              <Icon src="icon.png" alt="Icon" />
            </Overlap2>
          </Search>
          <Overlap4>
            <Toggle>
              <ConcreteComponentNode fill size="twenty-four" type="moon" />
            </Toggle>
            <Ellipse src="ellipse-77.svg" alt="Ellipse" />
            <Union src="union.svg" alt="Union" />
          </Overlap4>
      </OverlapWrapper> */}
      <Contents>
        <Outlet />
      </Contents>
    </Screen>
    </>
  );
};
export default MainForm;
