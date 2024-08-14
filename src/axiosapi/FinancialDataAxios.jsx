import axiosInstance from "./AxiosInstance";

const FinancialDataAxios = {
  // 금융 기업의 데이터를 인덱싱하는 함수
  indexFinancialData: async (params) => {
    try {
      const response = await axiosInstance.get(
        `/api/elastic/financial_company`,
        { params }
      );
      return response.data;
    } catch (error) {
      console.error("Error indexing financial data:", error);
      throw error;
    }
  },
};

export default FinancialDataAxios;
