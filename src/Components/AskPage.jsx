import { React, useState } from "react";
import styled from "styled-components";
import Ask from "./Ask";
import { Link } from "react-router-dom";
import Header from "./Header";
import Bottom from "./Bottom";

const Wrapper = styled.div`
  border-radius: 18px;
  padding: 20px;
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
  row-gap: 5px;
`;

const TitleHeader = styled.div``;
const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #bcbcbc;
  position: absolute;
  left: 21px;
  top: 27px;
`;

const AskPage = () => {
  const data = [
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
    { ask: "게시물이 삭제되었습니다.", time: "11-12 15:30" },
  ];
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleHeader>
          <Title>문의</Title>
        </TitleHeader>
        <AskWrapper>
          {data.map((item, index) => (
            <Ask ask={item.ask} time={item.time} />
          ))}
        </AskWrapper>
      </Wrapper>
      <Bottom />
    </div>
  );
};

export default AskPage;
