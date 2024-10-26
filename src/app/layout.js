
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Providers";
import Navbar from "@/components/Navbar";


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

export const metadata = {
  title: "IMDB clone",
  description: "Thit is move database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider >
          <Header />
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
