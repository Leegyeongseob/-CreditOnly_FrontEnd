import { createContext, useEffect, useState } from "react";
import MemberAxiosApi from "../axiosapi/MemberAxiosApi";

// Context 생성
export const UserEmailContext = createContext();

// Context Provider 컴포넌트
const UserEmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    // 사용자 정보를 가져오는 함수
    const fetchUserInfo = async () => {
      try {
        const response = await MemberAxiosApi.getEmail();
        setEmail(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <UserEmailContext.Provider value={{ email, setEmail, imgUrl, setImgUrl }}>
      {children}
    </UserEmailContext.Provider>
  );
};
export default UserEmailProvider;
