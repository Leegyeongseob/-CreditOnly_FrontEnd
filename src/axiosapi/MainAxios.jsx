import AxiosInstance from "./AxiosInstance";
const MainAxios = {
  //본인 성별 가져오는 비동기 함수
  mySexSearch: async (email) => {
    return await AxiosInstance.get(`/main/mySexSearch?email=${email}`);
  },
};
export default MainAxios;
