import styled from "styled-components";
import { React, useState } from "react";

const HeaderContainer = styled.div`
  border-bottom: 2px solid #f5f5f5;
  height: 80px;
`;
const HeaderLogo = styled.img`
  width: 30px;
  height: 29.9px;
  position: absolute;
  top: 24px;
  left: 50px;
`;
const RefreshButton = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 32px;
  right: 50px;
`;

const Header = () => {
  const handleClick = () => {
    window.location.reload();
  }; // 새로고침
  return (
    <HeaderContainer>
      <HeaderLogo src="/images/logo.svg" />
      <RefreshButton onClick={handleClick} src="/images/refresh.svg" />
    </HeaderContainer>
  );
};

export default Header;
