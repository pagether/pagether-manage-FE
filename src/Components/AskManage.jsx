import { React, useState } from "react";
import styled from "styled-components";
import Ask from "./Ask";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  flex: 2;
  height: 220px;
  border-radius: 18px;
  padding: 20px;
  border: 1px solid #eeeeee;
  background: #f5f5f5;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;
const AskWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div``;
const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #bcbcbc;
  position: absolute;
  left: 21px;
  top: 27px;
`;
const FullImg = styled.img`
  width: 24px;
  height: 24px;
  top: 25px;
  right: 22px;
  position: absolute;
`;

const AskManage = () => {
  const data = [
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
  ];
  return (
    <Wrapper>
      <Header>
        <Title>문의</Title>
        <Link to={"/ask/page"}>
          <FullImg src="/images/rightarrow.svg" />
        </Link>
      </Header>
      <AskWrapper>
        {data.map((item, index) => (
          <Ask ask={item.ask} time={item.time} showDeleteButton={false} />
        ))}
      </AskWrapper>
    </Wrapper>
  );
};

export default AskManage;
