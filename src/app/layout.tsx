import { AOSInit, Header } from "@/components/layout";
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
