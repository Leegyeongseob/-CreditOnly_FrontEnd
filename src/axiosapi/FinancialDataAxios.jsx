import axiosInstance from "./AxiosInstance";
import { performSimilaritySearch, handleError } from "./apiUtils";

const FinancialDataAxios = {
  getFinancialData: async (fncoNm, query) => {
    try {
      await performSimilaritySearch(query);
      const response = await axiosInstance.get(
        "/api/elastic/economic/financial_data",
        {
          params: { fncoNm, query },
        }
      );
      return response.data;
    } catch (error) {
      handleError(error, "fetching financial data");
    }
  },
};

export default FinancialDataAxios;
