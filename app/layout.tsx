import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ECube Saudi Arabia — ERP Implementation Reimagined",
  description:
    "ECube Saudi Arabia (Enterprise Cube) — Odoo & ERP implementation software house. Cutting-edge solutions that streamline business operations and boost productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans antialiased">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
