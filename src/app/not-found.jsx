"use client";

import "./[locale]/globals.css";

export default function NotFound() {
  return (
    <div className="w-full h-full min-h-screen min-w-screen text-center flex flex-col items-center justify-center text-red-500 text-3xl">
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
