"use client";
import React, { createContext, useState } from "react";

export const ClientContext = createContext();

export const ClientContextProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const contextValue = {
    page,
    setPage,
    totalPages,
    setTotalPages,
    search,
    setSearch,
    clients,
    setClients,
  };

  return (
    <ClientContext.Provider value={contextValue}>
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContextProvider;
