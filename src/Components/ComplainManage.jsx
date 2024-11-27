import { React, useState } from "react";
import styled from "styled-components";
import Complain from "./Complain";

const Wrapper = styled.div`
  width: 701px;
  height: 289px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  padding: 20px;
  background: #f5f5f5;
  position: relative;
  margin-left: 10px;
  margin-top: 23px;
  box-sizing: border-box;
`;
const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
`;
const Header = styled.div`
  margin-bottom: 50px;
`;
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

const ComplainManage = () => {
  const data = [
    { reason: "스포일러", count: 3, time: "13:20", blocktime: 1 },
    { reason: "스포일러", count: 4, time: "12:20", blocktime: 3 },
    { reason: "스포일러", count: 5, time: "00:20", blocktime: 6 },
    { reason: "스포일러", count: 6, time: "09:20", blocktime: 9 },
  ];
  return (
    <Wrapper>
      <Header>
        <Title>신고된 피드</Title>
        <FullImg src="/images/rightarrow.svg" />
      </Header>

      {data.map((item, index) => (
        <Wrapper2 key={index}>
          <Complain
            reason={item.reason}
            count={item.count}
            time={item.time}
            blocktime={item.blocktime}
          />
        </Wrapper2>
      ))}
    </Wrapper>
  );
};

export default ComplainManage;
