import styled from "styled-components";
import Header from "./Header";
import QunatityManage from "./QuantityManage";
import ComplainManage from "./ComplainManage";
import ApiManage from "./ApiManage";
import SecondLine from "./SecondLine";
import NoticeManage from "./NoticeManage";
import ThirdLine from "./ThirdLine";

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  padding: 20px 50px 0 50px;
`;
const Wrapper3 = styled.div`
  display: flex;
  min-width: 800px;
`;
const AdminHome = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <QunatityManage />
        <SecondLine />
        <ThirdLine />
      </ContentWrapper>
    </Wrapper>
  );
};

export default AdminHome;
