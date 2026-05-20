import type { Metadata } from 'next';
import { Inter, Outfit, Exo_2 } from 'next/font/google';
import './styles.css';
import { ThemeProvider } from '@/components/providers/theme-provider';

import { LenisProvider } from '@/components/providers/lenis-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const exo2 = Exo_2({ subsets: ['latin'], variable: '--font-exo2' });

export const metadata: Metadata = {
  title: 'Ankit Das | Full-Stack Developer',
  description: 'Building Modern Digital Experiences. Portfolio of Ankit Das.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${exo2.variable} font-sans antialiased bg-[#050816] text-[#F8FAFC]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
