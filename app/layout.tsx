import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`min-w-[375px] ${comfortaaFont.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <NextTopLoader showSpinner={false} color="#9f0006" height={2} />
        </ThemeProvider>
        {children}
      </body>
    </html>
  );
}
