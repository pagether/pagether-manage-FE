import { React, useState } from "react";
import styled from "styled-components";
import AskManage from "./AskManage";
import NoticeManage from "./NoticeManage";

const Container = styled.div`
  display: flex;
  min-width: 800px;
  flex-wrap: wrap;
  gap: 20px;
`;

const ThirdLine = () => {
  return (
    <Container>
      <NoticeManage />
      {/* <AskManage /> */}
    </Container>
  );
};

export default ThirdLine;
