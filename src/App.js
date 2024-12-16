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
/* eslint-disable */
function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<AdminHome />} />
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
