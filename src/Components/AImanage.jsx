import { React, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AI_API_URL = process.env.REACT_APP_AI_API_URL;
const API_URL = process.env.REACT_APP_API_URL;

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

const Detection = styled.div`
  flex: 3;
  white-space: nowrap;
  display: flex;
  height: 100%;
  border-radius: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isSpoiler ? "#FFE3E3" : props.isNormal ? "#CFEDC0" : "#e5e5e5"};
  font-size: 35px;
  font-weight: 700;
  color: ${(props) =>
    props.isSpoiler ? "#FF8080" : props.isNormal ? "#6A9454" : "#939393"};
`;

const DetectionCycle = styled.div`
  flex: 3;
  padding: 3px;
  white-space: nowrap;
  display: flex;
  height: 100%;
  border-radius: 8px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isInspecting ? "#CFEDC0" : "#FFE1A8")};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.isInspecting ? "#6A9454" : "#DD8F00")};
`;

const TestContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TestInputContainer = styled.div`
  display: flex;
  justify-content: row;
  flex: 5;
  gap: 9px;
  padding-bottom: 9px;
  border-bottom: 1px solid #bcbcbc;
  margin-bottom: 9px;
`;

const TextInput = styled.textarea`
  flex: 7;
  /* width: 100%; */
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
  &:active {
    background-color: #b4b4b4; /* 클릭 시 더 어두운 배경색 */
    transform: scale(0.95); /* 살짝 축소 */
  }
`;

const NewNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 7;
`;

const NewNotes = styled.div`
  flex: 9;
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
  font-size: 15px;
  font-weight: 600;
  margin-right: 30px;
`;

const AIManage = () => {
  const [isSpoiler, setIsSpoiler] = useState(false); // 스포일러 상태
  const [isNormal, setIsNormal] = useState(false);
  const [isInspecting, setIsInspecting] = useState(true);
  const [inputText, setInputText] = useState(""); // TextInput의 입력값 상태
  const [spoilerNoteId, setSpoilerNoteId] = useState("");

  const [notes, setNotes] = useState([]);
  const [recentNotesCount, setRecentNotesCount] = useState(0);
  const [detectedNotesCount, setDetectedNotesCount] = useState(0);

  const handleTest = async (text) => {
    try {
      const response = await axios.get(`${AI_API_URL}/predict/${text}`);
      console.log(response.data);

      const { hasSpoiler, hasSpoilerPercent } = response.data;

      setIsSpoiler(hasSpoiler);
      setIsNormal(!hasSpoiler);

      // 3초 후 상태 초기화
      setTimeout(() => {
        setIsSpoiler(false);
        setIsNormal(false);
      }, 3000);
      // if (hasSpoiler && text === newContent) {
      //   console.log(spoilerNoteId);
      //   patchData();
      // }
    } catch (error) {
      console.error("요청 실패:", error);
      alert("검사 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const handleSpolerNotes = async (text, noteId) => {
    try {
      const response = await axios.get(`${AI_API_URL}/predict/${text}`);
      console.log(response.data);

      if (response.data.hasSpoiler) {
        setDetectedNotesCount(detectedNotesCount + 1);
        patchData(noteId);
      }
    } catch (error) {
      console.error("요청 실패:", error);
      alert("검사 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const CheckTopNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("no token");
        return;
      }
      const response = await axios.get(`${API_URL}/notes/recent`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);

      // console.log("최근 1분간 올라온 노트 데이터", response.data.data.notes);
      if (response.data.code === 200) {
        const notesData = response.data.data.notes;
        setNotes(notesData);
        setRecentNotesCount(notesData.length);
        setDetectedNotesCount(0);
        console.log("잘 옴");
      }
    } catch (error) {
      console.error("요청 실패:", error);
      alert("검사 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  const patchData = async (noteId) => {
    try {
      const response = await axios.patch(`${API_URL}/notes/spoiler/${noteId}`);
      console.log("패치", response.data.data);
      if (response.data.code == 200) {
        console.log(`노트 ${noteId}가 잘 패치되었습니다.`);
      }
    } catch (error) {
      console.error("요청 실패:", error);
      alert("검사 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    const processNotes = async () => {
      setIsInspecting(false); // 검사 중 상태로 설정
      for (const note of notes) {
        await handleSpolerNotes(note.content, note.noteId);
      }
      setIsInspecting(true); // 검사가 끝난 후 상태 초기화
    };

    if (notes.length > 0) {
      processNotes();
    }
  }, [notes]);

  useEffect(() => {
    // 초기 데이터 가져오기
    CheckTopNotes();
    // 5분마다 데이터 갱신
    const intervalId = setInterval(CheckTopNotes, 300000); // 60000ms = 1분

    // 컴포넌트 언마운트 시 interval 정리
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      <Header>
        <Title>스포일러 & 악성 노트 탐지 테스트</Title>
      </Header>
      <Wrapper2>
        <TestContainer>
          <TestInputContainer>
            <TextInput
              placeholder="작성"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)} // 입력값 업데이트
            />
            <TestButton onClick={() => handleTest(inputText)}>검사</TestButton>
            <Detection isSpoiler={isSpoiler} isNormal={isNormal}>
              {isSpoiler ? "스포" : isNormal ? "정상" : "준비"}
            </Detection>
          </TestInputContainer>{" "}
          {/* 5 : 1: 3*/}
          <NewNoteContainer>
            <NewNotes>
              <NewNoteTitle>최근 노트</NewNoteTitle>
              <NewNoteContent>{recentNotesCount}</NewNoteContent>
              <NewNoteTitle>검출된 노트</NewNoteTitle>
              <NewNoteContent>{detectedNotesCount}</NewNoteContent>
            </NewNotes>
            <DetectionCycle isInspecting={isInspecting}>
              {isInspecting ? "완료" : "진행중"}
            </DetectionCycle>
          </NewNoteContainer>
        </TestContainer>
      </Wrapper2>
    </Wrapper>
  );
};

export default AIManage;
