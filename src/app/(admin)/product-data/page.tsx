// src/app/(admin)/admin/page.tsx
"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductsGrid from "@/components/admin_componenet/productGrid";

export default function AdminPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (isLoaded) {
      // Type assertion for publicMetadata
      const role = (user?.publicMetadata as { role?: string })?.role;
      
      if (!user || role !== 'admin') {
        router.push('/');
      }
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Add loading state
  }

  return <ProductsGrid />;
}
