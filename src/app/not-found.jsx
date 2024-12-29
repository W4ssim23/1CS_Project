"use client";

import { NoFoundAnimation } from "@/components/ui";
import "./[locale]/globals.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="m-[15px] h-[90vh] sm:m-[30px] flex flex-col justify-center ">
          <div className="w-[50%] m-auto">
            <NoFoundAnimation />
            <div className="flex justify-center items-center flex-col">
              <Link href="/fr">
                <p className="text-[25px] font-bold text-blue-700 text-center ">
                  Page Not Found
                </p>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
