import { Inter } from "next/font/google";
import "./globals.css"; // Your main CSS file (with Tailwind)
import Navbar from "@/components/Navbar"; // Import the Navbar
import Footer from "@/components/Footer"; // Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {/* This div structure makes the footer stick to the bottom */}
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {/* The `children` prop here will be your different pages */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
