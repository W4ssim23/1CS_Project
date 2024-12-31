"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import GlobalContextProvider from "./context";

export const Provider = ({ children }) => {
  const router = useRouter();

  return (
    <GlobalContextProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </GlobalContextProvider>
  );
};
