import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// NOTE: main content will load here from index.tsx
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-full">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
