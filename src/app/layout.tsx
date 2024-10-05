import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";
import StyledComponentsRegistry from "../components/StyledComponentRegisty";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alv.co",
  icons: {
    icon: "./alv-logo.png",
  },
};

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Variable.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const integral_cf = localFont({
  src: [
    {
      path: "../fonts/Integral-CF/integralcf-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Integral-CF/integralcf-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Integral-CF/integralcf-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Integral-CF/integralcf-heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--integral-cf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.className} ${integral_cf.variable}`}>
      <body>
        <NextTopLoader color="#636363" height={3} showSpinner={false} />
        <AppRouterCacheProvider>
          <Provider>
            <StyledComponentsRegistry>
              <div style={{ isolation: "isolate" }}>
                <Header />
                {children}
                <Footer />
              </div>
            </StyledComponentsRegistry>
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
