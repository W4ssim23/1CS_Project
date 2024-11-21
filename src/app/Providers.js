"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { SessionProvider } from "next-auth/react";

export const Provider = ({ children }) => {
  const router = useRouter();

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </SessionProvider>
  );
};
