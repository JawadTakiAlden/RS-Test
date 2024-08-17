import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "./providers/QueryClientProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import StoreProvider from "./providers/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "استبيان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={"font-cairo"}>
        <QueryClientProvider>
          <SnackbarProvider>
            <StoreProvider>{children}</StoreProvider>
          </SnackbarProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
