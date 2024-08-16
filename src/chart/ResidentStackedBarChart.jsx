import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  BarController,
  BarElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChartDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ResidentStackedBarChart = ({
  creditGrades = [10, 5, 5, 8, 2, 3, 7, 3, 6, 9, 1, 4, 1, 2, 1, 2, 3, 2, 7],
}) => {
  const darkMode = localStorage.getItem("isDarkMode") === "true";

  const labels = [
    "경기",
    "인천",
    "충남",
    "충북",
    "울산",
    "서울",
    "경남",
    "강원",
    "광주",
    "대구",
    "경북",
    "대전",
    "부산",
    "전북",
    "제주",
    "전남",
    "세종",
    "충청",
    "전라",
  ];

  // 스택형 막대 그래프의 데이터셋 생성
  const datasets = Array.from({ length: 10 }, (_, i) => ({
    label: `${i + 1}등급`,
    data: creditGrades.map((grade) => (grade === i + 1 ? grade : 0)),
    backgroundColor: `rgba(${(i * 25) % 255}, ${(i * 50) % 255}, ${
      (i * 75) % 255
    }, 0.6)`,
    borderColor: `rgba(${(i * 25) % 255}, ${(i * 50) % 255}, ${
      (i * 75) % 255
    }, 1)`,
    borderWidth: 1,
  }));

  // 차트 데이터
  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  // 차트 옵션
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 12,
          padding: 10,
          font: {
            size: 14,
          },
          color: darkMode ? "white" : "black",
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const { dataset, dataIndex } = tooltipItem;
            return `${dataset.label}: ${dataset.data[dataIndex]}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "거주지",
          color: darkMode ? "white" : "black",
        },
        ticks: {
          color: darkMode ? "white" : "black",
        },
        grid: {
          color: darkMode ? "gray" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "신용등급 수",
          color: darkMode ? "white" : "black",
        },
        ticks: {
          color: darkMode ? "white" : "black",
        },
        grid: {
          color: darkMode ? "gray" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    layout: {
      padding: 20,
    },
  };

  return (
    <Container>
      <ChartDiv>
        <Bar data={chartData} options={options} />
      </ChartDiv>
    </Container>
  );
};

export default ResidentStackedBarChart;
