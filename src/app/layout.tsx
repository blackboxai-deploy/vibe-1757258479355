import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YM Engineering - Industrial Maintenance & Automation Services",
  description: "Professional freelance engineering services specializing in preventive maintenance, PLC programming, electrical installations, and mechatronics solutions for industrial machinery.",
  keywords: "industrial maintenance, PLC programming, electrical installation, mechatronics, automation, preventive maintenance, emergency repair, Siemens, Beckhoff, Allen Bradley",
  authors: [{ name: "YM Engineering" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "YM Engineering - Industrial Maintenance & Automation",
    description: "Expert freelance engineering services for industrial machinery maintenance, PLC programming, and automation solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-950 text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}