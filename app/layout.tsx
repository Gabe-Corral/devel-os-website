import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevelOS",
  description: "A sane Arch-based Linux distribution for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Temporary banner */}
        <div className="bg-[#ffb86c] px-4 py-2 text-center font-mono text-sm font-bold text-[#282a36]">
          Public Alpha 0.5.0
        </div>
        {children}
      </body>
    </html>
  );
}
