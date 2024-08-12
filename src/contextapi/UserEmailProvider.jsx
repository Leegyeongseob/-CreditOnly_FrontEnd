import { createContext, useState } from "react";

// Context 생성
export const UserEmailContext = createContext();

// Context Provider 컴포넌트
const UserEmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [kakaoImgUrl, setKakaoImgUrl] = useState("");

  return (
    <UserEmailContext.Provider
      value={{ email, setEmail, kakaoImgUrl, setKakaoImgUrl }}
    >
      {children}
    </UserEmailContext.Provider>
  );
};
export default UserEmailProvider;
