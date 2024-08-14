import axiosInstance from "./AxiosInstance";

const EcosAxios = {
  // ECOS 데이터를 인덱싱하는 함수
  indexEcosData: async (keyword) => {
    try {
      const response = await axiosInstance.get(`/api/elastic/ecos`, {
        params: { keyword },
      });
      return response.data;
    } catch (error) {
      console.error("Error indexing ECOS data:", error);
      throw error;
    }
  },

  // ECOS 데이터를 가져오는 함수
  getEcosData: async () => {
    try {
      const response = await axiosInstance.get("/api/elastic/get_ecos");
      return response.data;
    } catch (error) {
      console.error("Error fetching ECOS data:", error);
      throw error;
    }
  },
};

export default EcosAxios;
