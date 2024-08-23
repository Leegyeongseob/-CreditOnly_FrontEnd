import Common from "../common/Common";
import axios from "axios";

//파이썬에서 시각화 데이터 가져오는 axios
const DataVisualization = {
  //나이별 신용등급
  getCreditGradeBarChart: async () => {
    return await axios.get(Common.CreditOnly_PythonFlask + "");
  },
  //직업별 신용등급
  getCreditGradeRadarChart: async () => {
    return await axios.get(Common.CreditOnly_PythonFlask + "/evaluation/jobs");
  },
  // 신용등급 평가(머신러닝)
  getCreditScoreChart: async () => {
    return await axios.get(Common.CreditOnly_PythonFlask + "");
  },
  // 신용카드 별 신용 등급
  getCreditScoreScatterChart: async () => {
    return await axios.get(
      Common.CreditOnly_PythonFlask + "/evaluation/credit_card"
    );
  },
  // 신용등급 평가(머신러닝)
  getDoughnutChart: async () => {},
  // 직업별 미상환 대출 비율
  getJobDefaultLoanPieChart: async () => {
    return await axios.get(
      Common.CreditOnly_PythonFlask + "/evaluation/jobs_and_loans"
    );
  },
  // 거주지별 신용등급
  getResidentStackedBarChart: async () => {
    return await axios.get(
      Common.CreditOnly_PythonFlask + "/evaluation/residence"
    );
  },
};
export default DataVisualization;
