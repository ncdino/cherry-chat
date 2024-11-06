"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase"; // Firebase 설정 파일에서 auth 가져오기
import { onAuthStateChanged } from "firebase/auth";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// useAuth 훅 생성
export const useAuth = () => useContext(AuthContext);
