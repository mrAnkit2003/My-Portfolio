
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
        className={`${poppins.className} bg-gray-950 text-gray-300 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

