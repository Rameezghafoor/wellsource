// layout.tsx

import "./globals.css"; // Global styles
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer
import { ReactNode } from "react";

export const metadata = {
  title: "Well Source Industries",
  description: "Well Source Industries - Pakistani Manufacturer of Surgical Instruments",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
