import "./App.css";
import PaletteStyle from "./PaletteStyle";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import NotLogin from "./pages/main/NotLogin";
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
import MainForm from "./common/commonForm/MainForm";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import FindByForm from "./common/commonForm/FindByForm";
const App = () => {
  return (
    <>
      {/* 전역스타일적용 */}
      <GlobalStyle />
      <PaletteStyle />
      <Router>
        <Routes>
          <Route path="/error" element={<ErrorPage />} />
          <Route element={<MainForm />}>
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<FindByForm />}>
            <Route path="/findbyemail" element={<FindEmail />} />
            <Route path="/findbypwd" element={<FindPassword />} />
          </Route>
          <Route path="/findbypwd2" element={<FindPassword />} />
          {/* <Route element={<OpenBook />}>
            <Route path="/board-guestbook" element={<GuestBoardGuestbook />} />
            <Route path="/board-details/:id" element={<BoardDetails />} />
            <Route path="/board-write" element={<BoardWrite />} />
            <Route path="/board-update" element={<BoardUpdate />} />
          </Route>
        
            <Route path="/not-login" element={<NotLogin />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/signup-page" element={<SignupPage />} />
            <Route path="/find-email" element={<FindEmail />} />
            <Route path="/find-password" element={<FindPassword />} />
        
            <Route path="/modify" element={<Modify />} />
            <Route path="/withdrawal" element={<Withdrawal />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
