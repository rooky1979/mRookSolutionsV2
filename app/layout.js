import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "M Rook Solutions",
  description: "An Interactive CV",
}; */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>M Rook Solutions</title>
        <meta name="description" content="An Interactive CV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/rooklogo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
