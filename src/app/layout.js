import { Inter } from "next/font/google";
import "./globals.css";
import i18next from "i18next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shockers Group",
  description: "Architectural, Engineering, & Construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
