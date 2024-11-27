import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ApiTimes = ({ value }) => {
  const maxValue = 1000; // 최대 값

  return (
    <div style={{ width: 177, height: 177 }}>
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        text={
          <tspan>
            <tspan style={{ fontWeight: "bold", fontSize: "20px" }}>
              {value}
            </tspan>
            <tspan style={{ fontSize: "12px" }}>/{maxValue}</tspan>
          </tspan>
        }
        styles={buildStyles({
          pathColor: "#d9d9d9", // 경로 색상 설정
          trailColor: "rgb(88,155,255)", // 배경 경로 색상
          textColor: "#000000", // 텍스트 색상
          strokeLinecap: "butt", // 끝 부분을 둥글게 하지 않음
          strokeWidth: 0, // 선 굵기: 값 크게 조정 (20으로 설정)
        })}
      />
    </div>
  );
};

export default ApiTimes;
