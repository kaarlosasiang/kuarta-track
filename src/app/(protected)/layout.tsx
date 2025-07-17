"use client";

import React, { useEffect } from "react";
import { useUser } from "@/lib/hooks/use-user";
import { useRouter } from "next/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      console.log("Redirecting to login...");
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-20">Checking session...</p>;
  if (!user) return null;

  return <div className="h-full">{children}</div>;
}
