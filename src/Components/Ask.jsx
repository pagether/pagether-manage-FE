import { React, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 25px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  padding: 9px 9px 9px 18px;
  display: flex;
  background: #eeeeee;
  margin-bottom: 6px;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Ask = ({ ask, time }) => {
  return (
    <Wrapper>
      <Content>{ask}</Content>
      <Content>{time}</Content>
    </Wrapper>
  );
};

export default Ask;
