// layout.js

import "./globals.css"; // Global styles
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

export const metadata = {
  title: "Well Source",
  description: "Well Source official website",
};

export default function RootLayout({ children }) {
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
