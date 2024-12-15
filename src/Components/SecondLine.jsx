import { React, useState, useEffect } from "react";
import styled from "styled-components";
import ComplainManage from "./ComplainManage";
import ApiManage from "./ApiManage";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

const Container = styled.div`
  display: flex;
  min-width: 800px;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const SecondLine = () => {
  const [aladinApiCount, setAladinApiCount] = useState(0);
  const [googleApiCount, setGoogleApiCount] = useState(0);

  useEffect(() => {
    const getApiCounts = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3aW5uZXJqaXdvb0BnbWFpbC5jb20iLCJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNzM2NTc1NDIwfQ.TbsHmRPq4KYgFIicBCSBOgeUOLQUSqHvwfkZ4nuXhIo";
        if (!token) {
          console.log("no token");
          return;
        }

        const response = await axios.get(`${API_URL}/manage`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data.data); // 응답 데이터 확인

        if (response.data.code === 200) {
          // aladinApiCount와 googleApiCount 값을 응답 데이터에서 설정
          setAladinApiCount(response.data.data.aladinApiCount);
          setGoogleApiCount(response.data.data.googleApiCount);
        }
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    getApiCounts();
  }, []);

  return (
    <Container>
      <ComplainManage />
      <ApiManage title={"알라딘 API 요청 횟수"} value={aladinApiCount} />
      <ApiManage title={"구글 API 요청 횟수"} value={googleApiCount} />
    </Container>
  );
};

export default SecondLine;
