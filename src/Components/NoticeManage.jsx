import { React, useState } from "react";
import styled from "styled-components";
import Notice from "./Notice";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Wrapper = styled.div`
  flex: 1;
  height: 161px;
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

const InputBox = styled.textarea`
  flex: 10;
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  height: 65px;
  border: none;
  outline: none;
  padding-left: 10px;
  resize: none;
  padding-top: 10px;

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
  font-size: 15px;
  border: none;
  border-radius: 12px;
  white-space: nowrap;
`;

const NoticeManage = () => {
  const [inputText, setInputText] = useState("");
  const postNotice = async () => {
    try {
      const response = await axios.post(`${API_URL}/news`, {
        content: inputText,
      });
      console.log(response.data.data);
      if (response.data.code == 200) {
        console.log("잘 올라감^^");
        console.log(response.data.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("요청 실패:", error);
      alert("검사 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Wrapper>
      <Header>
        <Title>소식 작성</Title>
        {/* <Link to={"/notice/page"}>
          <FullImg src="/images/rightarrow.svg" />
        </Link> */}
      </Header>
      <NoticeWrapper>
        <WriteBox>
          <InputBox
            placeholder="소식 글 작성"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <WriteButton onClick={() => postNotice(inputText)}>
            작성하기
          </WriteButton>
        </WriteBox>
        {/* {notices.map((notice, index) => (
          <Notice key={index} notice={notice} showDeleteButton={false} />
        ))} */}
      </NoticeWrapper>
    </Wrapper>
  );
};

export default NoticeManage;
