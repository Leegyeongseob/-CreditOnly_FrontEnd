import axiosInstance from "./AxiosInstance";
import { performSimilaritySearch, handleError } from "./apiUtils";

const DartAxios = {
  // DART 데이터를 POST 요청으로 전송
  postDartData: async (requestBody, query) => {
    try {
      await performSimilaritySearch(query); // 유사도 검색 수행
      const response = await axiosInstance.post(
        "/api/elastic/company/dart",
        requestBody,
        {
          params: { query },
        }
      );
      return response.data;
    } catch (error) {
      handleError(error, "posting DART data");
    }
  },

  // DART 데이터를 GET 요청으로 가져옴
  getDartData: async () => {
    try {
      const response = await axiosInstance.get("/api/elastic/company/get_dart");
      return response.data;
    } catch (error) {
      handleError(error, "fetching DART data");
    }
  },
};

export default DartAxios;
