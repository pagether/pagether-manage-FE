import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import AdminHome from "./Components/AdminHome";
import NoticePage from "./Components/NoticePage";
import AskPage from "./Components/AskPage";
import ComplainPage from "./Components/ComplainPage";

const MainLayout = styled.div``;

function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/noticepage" element={<NoticePage />} />
          <Route path="/askpage" element={<AskPage />} />
          <Route path="/complainpage" element={<ComplainPage />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}

export default App;
