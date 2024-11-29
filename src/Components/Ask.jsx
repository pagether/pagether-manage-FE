import { React, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 25px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  padding: 9px 20px 9px 20px;
  display: flex;
  background: #eeeeee;
  margin-bottom: 6px;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
`;
const ContentWrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const DeleteButton = styled.div`
  border: none;
  font-size: 14px;
  color: #bcbcbc;
  font-weight: 700;
  margin-left: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 부모의 색상을 따르도록 설정 */
`;
const Ask = ({ ask, time, showDeleteButton = true }) => {
  return (
    <StyledLink to={"/ask/post"}>
      <Wrapper>
        <Content>{ask}</Content>
        <ContentWrapper>
          <Content>{time}</Content>
          {showDeleteButton && <DeleteButton>삭제하기</DeleteButton>}
        </ContentWrapper>
      </Wrapper>
    </StyledLink>
  );
};

export default Ask;
