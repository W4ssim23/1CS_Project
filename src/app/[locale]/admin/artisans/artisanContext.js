"use client";
import React, { createContext, useState } from "react";

export const ArtisanContext = createContext();

export const ArtisanContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
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
    data,
    setData,
  };

  return (
    <ArtisanContext.Provider value={contextValue}>
      {children}
    </ArtisanContext.Provider>
  );
};
