import { AOSInit } from "@/components/layout/aos/AOSInit";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import "./normalize.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
