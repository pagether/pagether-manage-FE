import { React, useState } from "react";
import styled from "styled-components";
import Complain from "./Complain";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  flex: 3;
  height: 290px;
  border-radius: 18px;
  padding: 20px;
  border: 1px solid #eeeeee;
  background: #f5f5f5;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;
const Wrapper2 = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Header = styled.div`
  /* margin-bottom: 100px; */
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
        <Link to={"/complain/page"}>
          <FullImg src="/images/rightarrow.svg" />
        </Link>
      </Header>
      <Wrapper2>
        {data.map((item, index) => (
          <Complain
            reason={item.reason}
            count={item.count}
            time={item.time}
            blocktime={item.blocktime}
            showDeleteButton={false}
          />
        ))}
      </Wrapper2>
    </Wrapper>
  );
};

export default ComplainManage;
