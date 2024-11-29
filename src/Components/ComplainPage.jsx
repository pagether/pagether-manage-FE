import { React, useState } from "react";
import styled from "styled-components";
import Complain from "./Complain";
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
const ComplainWrapper = styled.div`
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
const FullImg = styled.img`
  width: 24px;
  height: 24px;
  top: 25px;
  right: 22px;
  position: absolute;
`;

const ComplainPage = () => {
  const data = [
    { reason: "스포일러", count: 3, time: "13:20", blocktime: 1 },
    { reason: "스포일러", count: 4, time: "12:20", blocktime: 3 },
    { reason: "스포일러", count: 5, time: "00:20", blocktime: 6 },
    { reason: "스포일러", count: 6, time: "09:20", blocktime: 9 },
    { reason: "스포일러", count: 3, time: "13:20", blocktime: 1 },
    { reason: "스포일러", count: 4, time: "12:20", blocktime: 3 },
    { reason: "스포일러", count: 5, time: "00:20", blocktime: 6 },
    { reason: "스포일러", count: 6, time: "09:20", blocktime: 9 },
    { reason: "스포일러", count: 5, time: "00:20", blocktime: 6 },
    { reason: "스포일러", count: 6, time: "09:20", blocktime: 9 },
  ];
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleHeader>
          <Title>신고된 피드</Title>
        </TitleHeader>
        <ComplainWrapper>
          {data.map((item, index) => (
            <Complain
              reason={item.reason}
              count={item.count}
              time={item.time}
              blocktime={item.blocktime}
            />
          ))}
        </ComplainWrapper>
      </Wrapper>
      <Bottom />
    </div>
  );
};

export default ComplainPage;
