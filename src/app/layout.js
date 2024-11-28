import { Poppins } from "next/font/google";
import "./globals.css";

import { Provider } from "./Providers";

//to be changed :
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Dz Artisan",
  description: "Dz Artisan Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
