"use client";

import { useState } from "react";
import { supabase } from "@/lib/config/supabase/client";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    middleInitial: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName || "John",
            last_name: formData.lastName || "Doe",
            middle_initial: formData.middleInitial || "",
            profile_image: "", // You can add profile image upload logic later
          },
        },
      });

      if (error) throw error;

      // Optional: Add a toast or notification
      alert("Registration successful! Please check your email to confirm.");
      router.push("/login");
    } catch (err: unknown) {
      {
        if (err instanceof Error)
          setError(err.message || "Registration failed");
        else setError("An Unknown Error Occured.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-sm mx-auto mt-20 space-y-4"
    >
      <h2 className="text-xl font-bold">Register for KuartaTrack</h2>
      {error && <p className="text-red-500">{error}</p>}

      <input
        name="email"
        className="border p-2 w-full"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <input
        name="password"
        className="border p-2 w-full"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        required
        minLength={6}
      />
      <input
        name="firstName"
        className="border p-2 w-full"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        name="lastName"
        className="border p-2 w-full"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        name="middleInitial"
        className="border p-2 w-full"
        type="text"
        placeholder="Middle Initial (Optional)"
        value={formData.middleInitial}
        onChange={handleInputChange}
        maxLength={1}
      />

      <button
        className="bg-green-600 text-white p-2 w-full"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
