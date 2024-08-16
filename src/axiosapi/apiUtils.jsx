import axiosInstance from "./AxiosInstance";

// 유사도 검색 요청을 수행하는 함수
export const performSimilaritySearch = async (query) => {
  try {
    const response = await axiosInstance.post(
      "/api/elastic/similarity_search",
      { query }
    );
    return response.data;
  } catch (error) {
    console.error("Error performing similarity search:", error);
    throw error;
  }
};

// 에러 처리 함수
export const handleError = (error, operation) => {
  console.error(`Error ${operation}:`, error);
  throw error;
};
