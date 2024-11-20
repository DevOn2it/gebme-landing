import type { Metadata } from "next";
import localFont from "next/font/local";
import { Provider } from "@/components/ui/provider";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BottomRightComponent } from "@/components/BottomRightComponent";
import { ScreenUtilProvider } from "@/context/ScreenUtilContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GEBME - Your one and only POS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <Provider>
          <ScreenUtilProvider>
            <Header />
            {children}
            <Footer />
            <BottomRightComponent />
          </ScreenUtilProvider>
        </Provider>
      </body>
    </html>
  );
}
