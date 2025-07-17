"use client";

import { useUser } from "@/lib/hooks/use-user";

export default function Dashboard() {
  const { user, loading } = useUser();

  if (loading) return <p className="text-center mt-20">Checking session...</p>;
  if (!user) return null; // avoid rendering protected content during redirect

  return <div>Welcome to your portfolio, {user && user.email}!</div>;
}
