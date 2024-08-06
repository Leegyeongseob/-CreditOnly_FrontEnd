import "./App.css";
import PaletteStyle from "./PaletteStyle";
import OpenBook from "./common/background/OpenBook";
import CloseBook from "./common/background/CloseBook";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NotLogin from "./pages/main/NotLogin";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/login/SignupPage";
import FindEmail from "./pages/login/FindEmail";
import FindPassword from "./pages/login/FindPassword";
import GlobalStyle from "./global/GlobalStyle";
import BoardDetails from "./pages/board/BoardDetails";
import BoardWrite from "./pages/board/BoardWrite";
import Modify from "./pages/setting/Modify";
import Withdrawal from "./pages/setting/Withdrawal";
import GuestBoardGuestbook from "./pages/board/GuestBoardGuestbook";
import ErrorPage from "./error/ErrorPage";
import BoardUpdate from "./pages/board/BoardUpdate";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");

  const handleNavigate = (path) => {
    setUrl(path);
    console.log("Navigating to:", path);
  };
  const clearUrl = () => {
    setUrl("");
  };

  return (
    <>
      {/* 전역스타일적용 */}
      <GlobalStyle />
      <PaletteStyle />
      <Router>
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route element={<OpenBook onNavigate={handleNavigate} />}>
            <Route
              path="/"
              element={<MainPage url={url} clearUrl={clearUrl} />}
            />
            <Route
              path="/board-guestbook"
              element={<GuestBoardGuestbook url={url} clearUrl={clearUrl} />}
            />
            <Route
              path="/board-details/:id"
              element={<BoardDetails url={url} clearUrl={clearUrl} />}
            />
            <Route
              path="/board-write"
              element={<BoardWrite url={url} clearUrl={clearUrl} />}
            />
            <Route
              path="/board-update"
              element={<BoardUpdate url={url} clearUrl={clearUrl} />}
            />
          </Route>
          <Route element={<CloseBook />}>
            <Route path="/not-login" element={<NotLogin />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/signup-page" element={<SignupPage />} />
            <Route path="/find-email" element={<FindEmail />} />
            <Route path="/find-password" element={<FindPassword />} />
          </Route>
          <Route element={<CloseBook modify={true} />}>
            <Route path="/modify" element={<Modify />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
