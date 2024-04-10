/* eslint-disable new-cap */
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Media from "@/components/Media";

export const metadata = {
  title: "VEX Robotics at UCR",
  description: "VEX Robotics Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center">
        <Navigation />
        <div className="w-full flex flex-col items-center justify-center ">
          {children}
        </div>
        <Footer />
        <Media />
      </body>
    </html>
  );
}
