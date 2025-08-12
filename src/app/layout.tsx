import type { Metadata } from "next";
import Footer from "./components/footer";
import { Hind, Inter, Manrope } from "next/font/google";
import "./globals.css";
// import Footer from "./components/footer";
import Navbar from "./components/navbar";

// Import Google Fonts
const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify font weights
  variable: "--font-hind", // CSS variable for the Hind font
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify font weights
  variable: "--font-inter", // CSS variable for the Inter font
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // Specify font weights
  variable: "--font-manrope", // CSS variable for the Manrope font
});

// Metadata for your website
export const metadata: Metadata = {
  title: "Kofi Kinara",
  description: "All Hyderabad Cafes at one place",
  icons: {
    icon: "/logo.svg", // Path to your favicon/logo
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hind.variable} ${inter.variable} ${manrope.variable}`}
    >
      <head>
        {/* Viewport Meta Tag (Critical for Responsiveness) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow">{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
