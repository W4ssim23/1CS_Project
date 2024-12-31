import React, { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [name, value] = cookie.split("=");
        acc[name] = value;
        return acc;
      }, {});
      try {
        setUserData(cookies.userData ? JSON.parse(cookies.userData) : null);
      } catch (error) {
        setUserData(null);
      }
    }
  }, []);

  const contextValue = { userData, setUserData };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
