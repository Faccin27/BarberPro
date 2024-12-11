import type { Metadata } from "next";
import localFont from "next/font/local";
import { Playfair_Display } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from 'next-themes'


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

const playfair = Playfair_Display({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Andre Barber",
  description: "Homem também cuida do visual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
      
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
