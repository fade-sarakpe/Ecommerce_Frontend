import { AOSInit } from "@/components/layout";
import "./globals.css";
import "./normalize.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
