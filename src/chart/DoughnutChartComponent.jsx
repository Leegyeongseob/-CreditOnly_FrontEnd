import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// 필요한 요소 등록
ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartDiv = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoughnutChartComponent = ({ data }) => {
  const darkMode = localStorage.getItem("isDarkMode") === "true";

  // 실제 값과 최대 값을 설정합니다.
  const actualValue = 7; // 현재 값
  const maxValue = 10; // 최대 값

  // 차트 데이터 설정
  const chartData = {
    labels: ["Filled", "Remaining"], // 게이지 차트의 두 영역
    datasets: [
      {
        label: "신용점수", // 데이터셋 라벨
        data: [actualValue, maxValue - actualValue], // 실제 값과 남은 값
        borderColor: "transparent", // 테두리 없앰
        backgroundColor: ["#253bc9", "transparent"], // 채워진 부분과 투명한 부분
        borderWidth: 1, // 테두리 두께 조정
        borderRadius: 20, // 둥근 모서리 설정
      },
    ],
  };

  // 차트 옵션 설정
  const options = {
    plugins: {
      legend: {
        display: false, // 레전드 표시 여부
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label === "Filled"
              ? `신용점수: ${actualValue}/${maxValue}`
              : null;
          },
        },
      },
    },
    cutout: "95%", // 도넛 차트의 가운데 구멍 크기 조정
    rotation: 0, // 시작 위치를 위로 설정
    circumference: 360, // 전체 원형
    animation: {
      animateScale: true, // 크기 애니메이션 활성화
      animateRotate: true, // 회전 애니메이션 활성화
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
    },
    elements: {
      arc: {
        borderWidth: 0, // 요소 테두리 두께 설정
      },
    },
  };

  // 플러그인을 사용하여 중심 텍스트 추가
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { ctx, width, height } = chart;
      ctx.restore();
      const fontSize = (height / 200).toFixed(2); // 폰트 크기 조정
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      // 텍스트 설정
      const titleText = "신용등급";
      const scoreText = `${actualValue}등급`;

      // 텍스트 위치 조정
      const titleTextX = width / 2;
      const titleTextY = height / 2 - fontSize * 10; // 타이틀 위치
      const scoreTextX = width / 2;
      const scoreTextY = height / 2 + fontSize * 10; // 점수 위치

      // 색상 설정
      ctx.fillStyle = darkMode ? "white" : "black";
      ctx.fillText(titleText, titleTextX, titleTextY);
      ctx.fillText(scoreText, scoreTextX, scoreTextY);

      ctx.save();
    },
  };

  return (
    <Container>
      <ChartDiv>
        <Doughnut
          data={chartData}
          options={options}
          plugins={[centerTextPlugin]}
        />
      </ChartDiv>
    </Container>
  );
};

export default DoughnutChartComponent;
