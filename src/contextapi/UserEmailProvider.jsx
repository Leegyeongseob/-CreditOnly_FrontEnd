import { createContext, useEffect, useState } from "react";
import MemberAxiosApi from "../axiosapi/MemberAxiosApi";

// Context 생성
export const UserEmailContext = createContext();

// Context Provider 컴포넌트
const UserEmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [authority, setAuthority] = useState(""); // 권한을 관리할 상태 추가
  const [adminEmails, setAdminEmails] = useState([]); // 관리자 이메일 목록을 빈 배열로 초기화

  useEffect(() => {
    // 사용자 정보를 가져오는 함수
    const fetchUserInfo = async () => {
      try {
        const response = await MemberAxiosApi.getEmail();
        setEmail(response.data);

        // 권한 정보 가져오기
        const userInfoResponse = await MemberAxiosApi.getAdminEmails();
        // 데이터를 배열로 변환
        setAdminEmails(Array.isArray(userInfoResponse) ? userInfoResponse : []);
        console.log("관리자 이메일:", userInfoResponse);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <UserEmailContext.Provider
      value={{
        email,
        setEmail,
        imgUrl,
        setImgUrl,
        authority,
        setAuthority,
        adminEmails,
      }}
    >
      {children}
    </UserEmailContext.Provider>
  );
};

export default UserEmailProvider;
