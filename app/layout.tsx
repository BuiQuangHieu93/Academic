import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { ChildrenProvider } from "@/components/providers/ChildrenProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academic",
  description:
    "Empowering individuals to master diverse academic subjects through immersive exploration of a data-driven, AI-constructed virtual academic realm.",
  icons: {
    icon: "/asset/whiteLogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-white dark:bg-[#313338]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="AcademicOnline-theme"
        >
          <ChildrenProvider>{children}</ChildrenProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
