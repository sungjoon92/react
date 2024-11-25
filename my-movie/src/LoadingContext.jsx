import React, { createContext, useContext, useState } from "react";
// Context 생성
const LoadingContext = createContext();

// Provider 컴포넌트
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// 커스텀 훅
export const useLoading = () => useContext(LoadingContext);
