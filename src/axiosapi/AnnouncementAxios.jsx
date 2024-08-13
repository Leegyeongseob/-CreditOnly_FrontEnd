import AxiosInstance from "./AxiosInstance";
const AnnouncementAxios = {
  // 문의 데이터를 서버로 전송하는 비동기 함수
  postBoard: async (postData) => {
    return await AxiosInstance.post("/announcement/send", postData);
  },

  // 공지사항 세부사항 가져오기
  getAllBoards: async (classTitle) => {
    return await AxiosInstance.get(`/announcement/getAll`, {
      params: { classTitle },
    });
  },
  // 특정 classTitle에 해당하는 공지사항 가져오기
  getNoticesByClassTitle: async (classTitle) => {
    return await AxiosInstance.get(`/announcement/getAll`, {
      params: { classTitle },
    });
  },
};
export default AnnouncementAxios;
