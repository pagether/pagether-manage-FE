import { React, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  height: 25px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  padding: 9px 0px 9px 18px;
  display: flex;
  background: #eeeeee;
  margin-bottom: 6px;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
`;
const Wrapper2 = styled.div`
  display: flex;
  gap: 5px;
  /* 최근 신고 시간과 작성자를 숨김 처리 */
  &.hide-on-small {
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
const Title = styled.div`
  color: #828282;
  font-size: 14px;
  font-weight: bold;
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
  padding-right: 18px;
`;

const ComplainContainer = styled.div`
  display: flex;
  gap: 15px;
  flex: 9;
  @media (max-width: 800px) {
    gap: 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit; /* 부모의 색상을 따르도록 설정 */
`;
const Complain = ({
  reason,
  count,
  time,
  blocktime,
  showDeleteButton = true,
}) => {
  return (
    <StyledLink to={"/complain/post"}>
      <Wrapper>
        <ComplainContainer>
          <Wrapper2>
            <Title>스포일러</Title>
            <Content>{reason}</Content>
          </Wrapper2>
          <Wrapper2>
            <Title>신고 수</Title>
            <Content>{count}회</Content>
          </Wrapper2>
          <Wrapper2 className="hide-on-small">
            <Title>최근 신고 시간</Title>
            <Content>{time}</Content>
          </Wrapper2>
          <Wrapper2 className="hide-on-small">
            <Title>작성자</Title>
            <Content>{blocktime}회</Content>
          </Wrapper2>
        </ComplainContainer>

        {showDeleteButton && <DeleteButton>삭제하기</DeleteButton>}
      </Wrapper>
    </StyledLink>
  );
};

export default Complain;
