"use client"
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AdminHeader } from "@/components/admin_componenet/AdminHeader";
import { AdminSidebar } from "@/components/admin_componenet/AdminSidebar";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="min-h-screen">
                <AdminHeader />
                <div className="flex">
                  <AdminSidebar />
      
      
          { children}
</div></div>
        </body>
      </html>
    </ClerkProvider>
  );
}