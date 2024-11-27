import { React, useState } from "react";
import styled from "styled-components";
import Notice from "./Notice";

const Wrapper = styled.div`
  flex: 3;
  height: 220px;
  border-radius: 18px;
  padding: 20px;
  border: 1px solid #eeeeee;
  background: #f5f5f5;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;
const NoticeWrapper = styled.div`
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

const WriteBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

const InputBox = styled.input`
  flex: 9;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  height: 35px;
  border: none;
  outline: none;
  padding-left: 10px;

  &::placeholder {
    color: #eeeeee;
    font-size: 14px;
    font-weight: 700;
  }
`;
const WriteButton = styled.button`
  flex: 1;
  /* width: 90px;
  height: 35px; */
  background: #dddddd;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 12px;
  white-space: nowrap;
`;

const NoticeManage = () => {
  const notices = [
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
  ];
  return (
    <Wrapper>
      <Header>
        <Title>소식 작성</Title>
        <FullImg src="/images/rightarrow.svg" />
      </Header>
      <NoticeWrapper>
        <WriteBox>
          <InputBox placeholder="소식 글 작성" />
          <WriteButton>작성하기</WriteButton>
        </WriteBox>
        {notices.map((notice, index) => (
          <Notice key={index} notice={notice} />
        ))}
      </NoticeWrapper>
    </Wrapper>
  );
};

export default NoticeManage;
