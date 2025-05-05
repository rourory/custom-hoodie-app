import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "../globals.css";
import Header from "@/components/organisms/Header";

const comfortaaFont = Comfortaa({
  subsets: ["cyrillic", "latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Printique",
  description: "Футболка, кружка, худи или свитшот со своим дизайном",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-w-[375px]">
      <body className={`${comfortaaFont.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
