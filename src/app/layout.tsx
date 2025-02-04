"use client"
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Loading from "./loading";
import { AdminHeader } from "@/components/admin_componenet/AdminHeader";
import { AdminSidebar } from "@/components/admin_componenet/AdminSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname=usePathname()

  const [isLoading , setIsLoading]=useState(true)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]); // Trigger effect on route change


 
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div className="min-h-screen">
                <AdminHeader />
                <div className="flex">
                  <AdminSidebar />
          <Toaster richColors />
      
          {isLoading ? <Loading /> : children}
</div></div>
        </body>
      </html>
    </ClerkProvider>
  );
}