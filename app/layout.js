import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

// Correctly configure the Poppins font with the specified subset
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Dark-Travel",
  description: "Travel and Tour Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
