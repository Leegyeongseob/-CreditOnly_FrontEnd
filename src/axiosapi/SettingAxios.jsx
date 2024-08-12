import AxiosInstance from "./AxiosInstance";
const SettingAxios = {
  //본인 성별 가져오는 비동기 함수
  getUserInfo: async (userEmail) => {
    return await AxiosInstance.get("/setting/getInfo", {
      params: {
        email: userEmail,
      },
    });
  },
};
export default SettingAxios;
