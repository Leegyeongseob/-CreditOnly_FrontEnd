import axiosInstance from "./AxiosInstance";
import { performSimilaritySearch, handleError } from "./apiUtils";

const EcosAxios = {
  // ECOS 데이터를 GET 요청으로 가져옴
  getEcosData: async (keyword, query) => {
    try {
      await performSimilaritySearch(query); // 유사도 검색 수행
      const response = await axiosInstance.get("/api/elastic/ecos", {
        params: { keyword, query },
      });
      return response.data;
    } catch (error) {
      handleError(error, "fetching ECOS data"); // 오류 처리
    }
  },
};

export default EcosAxios;
