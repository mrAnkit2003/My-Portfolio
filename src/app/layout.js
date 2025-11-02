// src/app/layout.js
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Ankit Das - Portfolio',
  description: 'Full-Stack Web Developer portfolio for Ankit Das',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-gray-300 antialiased`}
      >
        {/* 2. Apply the gradient to this div */}
        {/* This div will now stretch to fill the entire page */}
        <div className="flex flex-col min-h-screen bg-gradient-purple-dark">
          <Navbar />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

