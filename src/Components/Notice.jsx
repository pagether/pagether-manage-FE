import { React, useState } from "react";
import styled from "styled-components";

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

const Content = styled.div`
  font-size: 14px;
  font-weight: 500;

  /* 500px 이하일 때 글자 제한 */
  @media (max-width: 500px) {
    display: inline-block;
    max-width: calc(100% - 80px); /* 버튼 영역을 제외한 가용 공간 */
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

const DeleteButton = styled.div`
  border: none;
  font-size: 14px;
  color: #bcbcbc;
  font-weight: 700;
  padding-right: 18px;
`;

const Notice = ({ notice, showDeleteButton = true }) => {
  return (
    <Wrapper>
      <Content>{notice}</Content>
      {showDeleteButton && <DeleteButton>삭제하기</DeleteButton>}
    </Wrapper>
  );
};

export default Notice;
