"use client";
import { ArtisanContextProvider } from "./artisanContext";

export default function ArtisanLayout({ children }) {
  return <ArtisanContextProvider>{children}</ArtisanContextProvider>;
}
