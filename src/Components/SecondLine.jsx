import { React, useState } from "react";
import styled from "styled-components";
import ComplainManage from "./ComplainManage";
import ApiManage from "./ApiManage";

const Container = styled.div`
  display: flex;
  min-width: 800px;
  flex-wrap: wrap;
  gap: 20px;
`;

const SecondLine = () => {
  return (
    <Container>
      <ComplainManage />
      <ApiManage title={"알라딘 API 요청 횟수"} value={150} />
      <ApiManage title={"구글 API 요청 횟수"} value={30} />
      {/* 나중에 저 value는 정의해서 쓰면댐.*/}
    </Container>
  );
};

export default SecondLine;
