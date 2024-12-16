import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 80vh;
`;

const Logo = styled.img`
  width: 80px;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const LogoText = styled.img``;

const InputBox = styled.input`
  width: 30%;
  background: #f5f5f5;
  border-radius: 100px;
  height: 45px;
  border: none;
  outline: none;
  padding-left: 20px;

  &::placeholder {
    color: black;
    font-size: 18px;
    font-weight: 600;
  }
`;

const LoginButton = styled.button`
  margin-top: 10px;
  background-color: white;
  color: black;
  border: none;
  border-bottom: 1px solid black;
  /* cursor: pointer; */
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/account/email/signin`, {
        email,
        password,
      });

      if (response.data.code === 200) {
        const token = response.data.data.accessToken;
        const userId = response.data.data.userId;

        // Save to localStorage
        localStorage.setItem("userId", userId);
        localStorage.setItem("accessToken", token);
        localStorage.setItem("token", token);
        // Redirect to AdminHome
        navigate("/home");
      } else if (response.data.code === 404) {
        setError("이메일을 확인하세요.");
      } else if (response.data.code === 401) {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (err) {
      console.error(err);
      setError("네트워크를 확인해주세요.");
    }
  };

  return (
    <Container>
      <Logos>
        <Logo src="/images/pagetherLogo.svg" alt="Logo" />
        <LogoText src="/images/textlogo.svg" alt="Logo Text" />
      </Logos>

      <InputBox
        placeholder="ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBox
        placeholder="PW"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <LoginButton onClick={handleLogin} disabled={!email || !password}>
        로그인
      </LoginButton>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default LoginPage;
