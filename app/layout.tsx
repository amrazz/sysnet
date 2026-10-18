import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const source = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sysnet Technology",
  description:
    "Sysnet Technology surveys the site, then supplies and installs cameras, alarms, access control, and cabling as one job.",
  icons: { icon: "/brand/mark.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${source.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bone font-sans text-ink">{children}</body>
    </html>
  );
}
