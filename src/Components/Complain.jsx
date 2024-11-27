import { React, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 650px;
  height: 25px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  padding: 9px 0px 9px 18px;
  display: flex;
  background: #eeeeee;
  margin-bottom: 6px;
  align-items: center;
`;
const Wrapper2 = styled.div`
  display: flex;
  margin-right: 31px;
`;
const Title = styled.div`
  color: #828282;
  font-size: 14px;
  font-weight: bold;
  margin-right: 8px;
`;
const Content = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Complain = ({ reason, count, time, blocktime }) => {
  return (
    <Wrapper>
      <Wrapper2>
        <Title>스포일러</Title>
        <Content>{reason}</Content>
      </Wrapper2>
      <Wrapper2>
        <Title>신고 수</Title>
        <Content>{count}회</Content>
      </Wrapper2>
      <Wrapper2>
        <Title>최근 신고 시간</Title>
        <Content>{time}</Content>
      </Wrapper2>
      <Wrapper2>
        <Title>작성자</Title>
        <Content>{blocktime}회</Content>
      </Wrapper2>
    </Wrapper>
  );
};

export default Complain;
