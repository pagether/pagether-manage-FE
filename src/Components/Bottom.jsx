import styled from "styled-components";
import { React, useState } from "react";

const BottomContainer = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageNumber = styled.div`
  margin: 0 10px;
  font-size: 16px;
  color: ${(props) => (props.active ? "#828282" : "#eeeeee")};
`;

const Bottom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = [1, 2, 3]; // 추후 변경
  return (
    <BottomContainer>
      {pages.map((page) => (
        <PageNumber
          key={page}
          active={page === currentPage}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </PageNumber>
      ))}
    </BottomContainer>
  );
};

export default Bottom;
