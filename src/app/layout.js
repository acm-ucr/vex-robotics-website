/* eslint-disable new-cap */
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Saira } from "next/font/google";
import { Righteous } from "next/font/google";
// eslint-disable-next-line camelcase
import { Russo_One } from "next/font/google";

// eslint-disable-next-line no-unused-vars
const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-saira",
});

// eslint-disable-next-line no-unused-vars
const russo = Russo_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-russo",
});

// eslint-disable-next-line no-unused-vars
const righteous = Righteous({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-righteous",
});

export const metadata = {
  title: "VEX Robotics at UCR",
  description: "VEX Robotics Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col justify-center ${russo.variable} ${righteous.variable} ${saira.variable}`}
      >
        <Navigation />
        <div className="w-full flex flex-col items-center justify-center ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
