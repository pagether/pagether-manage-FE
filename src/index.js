import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header.jsx";
import Quantity from "./Components/Quantity";
import QunatityManage from "./Components/QuantityManage";
import AdminHome from "./Components/AdminHome";
import ComplainManage from "./Components/ComplainManage";
import ApiTimes from "./Components/ApiTimes";
import NoticePage from "./Components/NoticePage";
import App from "./App";
import styled from "styled-components";
import LoginPage from "./Components/LoginPage";

const Container = styled.div``;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container>
    {/* <AdminHome /> */}
    {/* <App /> */}
    {/* <LoginPage/> */}
    <App />
  </Container>
);

reportWebVitals();
