import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { getLocalStoarge, setLocalStoarge } from "../utils/localStoarge";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStoarge();
    const { employees } = getLocalStoarge();
    setUserData(employees );

    
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
