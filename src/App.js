import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import FindEmail from "./pages/login/FindEmail";
import FindPassword from "./pages/login/FindPassword";
import GlobalStyle from "./global/GlobalStyle";
import ErrorPage from "./error/ErrorPage";
import MainForm from "./common/commonForm/MainForm";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/login/SignUp";
import FindByForm from "./common/commonForm/FindByForm";
import Mypage from "./pages/settingpage/Mypage";
import HelpPage from "./pages/help/HelpPage";
import CreditNews from "./pages/news/CreditNews";
import NewsList from "./pages/news/NewsList";
import NewsDetail from "./pages/news/NewsDetail";
import CreditStyle from "./CreditStyle";
import RendingPage from "./pages/main/RendingPage";
import Evaluation from "./pages/evaluation/Evaluation";
import Announcement from "./pages/announcement/AnnouncementMain";
import ChatBot from "./pages/help/ChatBot";
import ResetPassword from "./pages/login/ResetPassword";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

// 라이트 및 다크 테마 설정
const lightTheme = {
  background: "#ffffff",
  color: "#000000",
  commponent: "#f9f9fd",
  // overlay: "rgba(255, 255, 255, 0.5)",
  sideBar: "#f1f2f7",
  sideCheck: "#d8dcf3",
  border: "#c8cbd9",
  overflow: "darkgray",
  goodBlue: "#007bff",
  toggle: "#93c7ff",
  drag: "#687bf7",
  shadow: "#90909040",
};

const darkTheme = {
  background: "#242424",
  color: "#9D9D9D",
  commponent: "#1D1D1D",
  overlay: "rgba(0, 0, 0, 0.5)",
  sideBar: "#121212",
  sideCheck: "#3b3a4f",
  border: "#444444",
  overflow: "#909090",
  goodBlue: "#0056b3",
  toggle: "#121212",
  drag: "#5a67ba",
  shadow: "#000",
};

const App = () => {
  const storedTheme = localStorage.getItem("isDarkMode");
  const initialTheme = storedTheme === "true" ? true : false;
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  // 테마 변경 함수
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("isDarkMode", newTheme); // 로컬 스토리지에 저장
  };

  // Kakao SDK 초기화
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init("YOUR_APP_KEY");
  }
  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {/* 전역스타일적용 */}
        <GlobalStyle />
        <CreditStyle />
        <Router>
          <Routes>
            <Route path="/" element={<RendingPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route
              element={
                <MainForm
                  toggleDarkMode={toggleDarkMode}
                  isDarkMode={isDarkMode}
                />
              }
            >
              <Route path="/mainpage" element={<MainPage />} />
              <Route path="/setting" element={<Mypage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/information" element={<CreditNews />} />
              <Route
                path="/information-list/:category"
                element={<NewsList />}
              />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/evaluation" element={<Evaluation />} />
              <Route path="/announcement" element={<Announcement />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route element={<FindByForm />}>
              <Route path="/findbyemail" element={<FindEmail />} />
              <Route path="/findbypwd" element={<FindPassword />} />
              <Route path="/resetpwd" element={<ResetPassword />} />
            </Route>
            {/* <Route element={<OpenBook />}>
            <Route path="/board-guestbook" element={<GuestBoardGuestbook />} />
            <Route path="/board-details/:id" element={<BoardDetails />} />
            <Route path="/board-write" element={<BoardWrite />} />
            <Route path="/board-update" element={<BoardUpdate />} />
          </Route> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
