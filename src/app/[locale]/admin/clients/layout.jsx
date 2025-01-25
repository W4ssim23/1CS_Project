"use client";
import ClientContextProvider from "./clientContext";

export default function Layout({ children }) {
  return <ClientContextProvider>{children}</ClientContextProvider>;
}
