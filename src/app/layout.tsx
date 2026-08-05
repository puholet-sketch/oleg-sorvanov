import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.fullName.ru} — Head of Project Office`,
  description: site.tagline.ru,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${body.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#141414] text-white/85">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
