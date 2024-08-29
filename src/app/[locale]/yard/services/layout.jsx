import { Suspense } from "react";

export default function RootLayout({ children, params: { locale } }) {
  return <Suspense>{children}</Suspense>;
}
