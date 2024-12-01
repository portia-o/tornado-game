import localFont from "next/font/local";
import "./globals.css";

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

const nosifer = localFont({
  src: "./fonts/Nosifer-Regular.ttf",
  variable: "--font-nosifer",
  weight: "100 900",
});

const audiowide = localFont({
  src: "./fonts/Audiowide-Regular.ttf",
  variable: "--font-audiowide",
  weight: "100 900",
});

export const metadata = {
  title: "Rainier's Tornado Game",
  description: "Don't die.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nosifer.variable} ${audiowide.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
