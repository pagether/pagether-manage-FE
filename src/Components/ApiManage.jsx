import styled from "styled-components";
import ApiTimes from "./ApiTimes";

const Wrapper = styled.div`
  width: 221px;
  height: 289px;
  border-radius: 18px;
  border: 1px solid #eeeeee;
  background: #f5f5f5;
  margin-top: 23px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #bebebe;
  padding: 27px 14px 30px 14px;
  position: absolute;
  top: -3px;
  left: 5px;
`;

const ApiManage = ({ title, value }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ApiTimes value={value}/>
    </Wrapper>
  );
};

export default ApiManage;
