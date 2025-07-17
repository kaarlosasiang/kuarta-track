"use client";

import { useState } from "react";
import { supabase } from "@/lib/config/supabase/client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto mt-20 space-y-4">
      <h2 className="text-xl font-bold">Login to KuartaTrack</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="border p-2 w-full"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white p-2 w-full" type="submit">
        Login
      </button>
    </form>
  );
}
