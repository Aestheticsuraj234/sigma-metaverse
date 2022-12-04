import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className=" mx-auto font-sans bg-gradient-to-l from-purple-200 via-purple-100 to-gray-100  dark:bg-gradient-to-l  dark:from-gray-700 dark:via-gray-900 dark:to-black">
        <NextNProgress color="#53BD95" />
        <Navbar />
        <main className="pb-32 relative">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
