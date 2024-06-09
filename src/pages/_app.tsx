import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import { AppProps } from "next/app";
import { NavigationBar } from "@/widgets/NavigationBar";

import { WebAppProvider } from "@/app/providers/WebAppProvider";
import { ThemeProvider } from "@/app/providers/ThemesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function HomePage({ Component, pageProps }: AppProps) {
  return (
    <WebAppProvider>
      <ThemeProvider attribute="class">
        <div className={`${inter.className} antialiased max-w-[420px]`}>
          <Component {...pageProps} />
          <NavigationBar />
        </div>
      </ThemeProvider>
    </WebAppProvider>
  );
}

export default HomePage;