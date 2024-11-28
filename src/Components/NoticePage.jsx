import { React, useState } from "react";
import styled from "styled-components";
import Notice from "./Notice";
import Header from "./Header";
import Bottom from "./Bottom";

const Wrapper = styled.div`
  border-radius: 18px;
  padding: 20px;
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

const WriteBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const InputBox = styled.input`
  flex: 9;
  width: 100%;
  background: #f5f5f5;
  border-radius: 18px;
  height: 35px;
  border: none;
  outline: none;
  padding: 5px 0px 5px 18px;

  &::placeholder {
    color: #bcbcbc;
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
  border-radius: 15px;
  white-space: nowrap;
`;

const NoticePage = () => {
  const notices = [
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
    "동물이 추가 되었습니다!  20m이상 동물들을 확인해보세요!",
  ];
  return (
    <div>
      <Header />
      <Wrapper>
        <TitleHeader>
          <Title>소식 작성</Title>
        </TitleHeader>
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
      <Bottom />
    </div>
  );
};

export default NoticePage;
