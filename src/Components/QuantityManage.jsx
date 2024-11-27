import { React, useState } from "react";
import styled from "styled-components";
import Quantity from "./Quantity";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  min-width: 800px;
  margin-bottom: 20px;
`;
const QunatityManage = () => {
  const titles = [
    "가입자 수",
    "게시물 수",
    "도서 수",
    "오늘 접속자 수",
    "누적 접속자 수",
  ];

  const data = [
    { count: 100, number: 5 },
    { count: 100, number: -5 },
    { count: 90, number: 3 },
    { count: 150, number: 50 },
    { count: 200, number: 50 },
  ]; // 이부분만 추후에 백에서 받아오게 바꾸면됨.
  // count가 숫자고, number가 증감값임.

  return (
    <Wrapper>
      {data.map((item, index) => (
        <Quantity
          key={index}
          title={titles[index]}
          count={item.count}
          number={item.number}
        />
      ))}
    </Wrapper>
  );
};

export default QunatityManage;
