import { React, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 3;
  height: 290px;
  border-radius: 18px;
  padding: 10px;
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
  justify-content: space-between; /* 두 컨테이너를 가로로 배치 */
  gap: 16px;
  padding: 10px;
  align-items: stretch;
`;

const Header = styled.div`
  position: absolute;
  left: 21px;
  top: 27px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #bcbcbc;
`;

const DetectionContainer = styled.div`
  flex: 1; /* DetectionContainer는 TestContainer에 비해 1:3 비율로 설정 */
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Detection = styled.div`
  white-space: nowrap;
  display: flex;
  height: 100%;
  border-radius: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSpoiler || props.isMalicious ? "#FFE3E3" : "#e5e5e5"};
  font-size: 40px;
  font-weight: bold;
  color: ${(props) =>
    props.isSpoiler || props.isMalicious ? "#FF8080" : "#939393"};
`;

const TestContainer = styled.div`
  flex: 3; /* TestContainer는 DetectionContainer보다 3배 더 크게 설정 */
  display: flex;
  flex-direction: column;
`;

const TestInputContainer = styled.div`
  display: flex;
  justify-content: row;
  flex: 4;
  gap: 9px;
  padding-bottom: 9px;
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 9px;
`;

const TextInput = styled.textarea`
  flex: 8;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  height: 127px;
  border: none;
  outline: none;
  padding-left: 14px;
  resize: none;
  padding-top: 20px;

  &::placeholder {
    color: #eeeeee;
    font-size: 14px;
    font-weight: 700;
  }
`;

const TestButton = styled.div`
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  background-color: #dddddd;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex: 1;
  width: 100%;
  height: 30px;
  white-space: nowrap;
  padding-left: 5px;
  padding-right: 5px;
`;

const NewNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const NewNotes = styled.div`
  flex: 8;
  flex-direction: row;
  display: flex;
`;
const NewNoteTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #828282;
  margin-right: 7px;
  white-space: nowrap;
`;

const NewNoteContent = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* flex: 1; */
  width: 300px;
`;

const AIManage = () => {
  const [isSpoiler, setIsSpoiler] = useState(true); // 스포일러 상태
  const [isBad, setIsBad] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Title>스포일러 & 악성 노트 탐지 테스트</Title>
      </Header>
      <Wrapper2>
        <TestContainer>
          <TestInputContainer>
            <TextInput placeholder="작성" />
            <TestButton>검사</TestButton>
          </TestInputContainer>
          <NewNoteContainer>
            <NewNotes>
              <NewNoteTitle>최근 노트</NewNoteTitle>
              <NewNoteContent>
                해리포터 볼트모트 결국 이김해리포터 볼트모트 결국 이김해리포터
                볼트모트 결국 이김 
              </NewNoteContent>
            </NewNotes>
            <TestButton>검사</TestButton>
          </NewNoteContainer>
        </TestContainer>
        <DetectionContainer>
          <Detection isSpoiler={isSpoiler}>
            {isSpoiler ? "스포" : "정상"}
          </Detection>
          <Detection isBad={isBad}>{isBad ? "악성" : "정상"}</Detection>
        </DetectionContainer>
      </Wrapper2>
    </Wrapper>
  );
};

export default AIManage;
