import axiosInstance from "./AxiosInstance";

const DartAxios = {
  // DART 데이터를 인덱싱하는 함수
  indexDartData: async (data) => {
    try {
      const response = await axiosInstance.post(`/api/elastic/dart`, data);
      return response.data;
    } catch (error) {
      console.error("Error indexing DART data:", error);
      throw error;
    }
  },

  // DART 데이터를 가져오는 함수
  getDartData: async () => {
    try {
      const response = await axiosInstance.get("/api/elastic/get_dart");
      return response.data;
    } catch (error) {
      console.error("Error fetching DART data:", error);
      throw error;
    }
  },
};

export default DartAxios;
