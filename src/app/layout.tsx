import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${site.fullName.ru} — Head of Project Office`,
  description: site.tagline.ru,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
