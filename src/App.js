import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import AdminHome from "./Components/AdminHome";
import NoticePage from "./Components/NoticePage";
import AskPage from "./Components/AskPage";
import ComplainPage from "./Components/ComplainPage";
import ComplainPost from "./Components/ComplainPost";
import AskPost from "./Components/AskPost";
import LoginPage from "./Components/LoginPage";
const MainLayout = styled.div``;
const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token"); // 또는 다른 방법으로 로그인 상태 확인
  return token ? element : <Navigate to="/" replace />; // 토큰이 없으면 로그인 페이지로 리디렉션
};
/* eslint-disable */
function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={<ProtectedRoute element={<AdminHome />} />}
          />
          {/* <Route path="/home" element={<AdminHome />} /> */}
          {/* <Route path="/notice/page" element={<NoticePage />} />
          <Route path="/ask/page" element={<AskPage />} />
          <Route path="/complain/page" element={<ComplainPage />} />
          <Route path="/ask/post" element={<AskPost />} />
          <Route path="/complain/post" element={<ComplainPost />} /> */}
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
