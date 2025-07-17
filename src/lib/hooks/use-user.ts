"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/config/supabase/client";
import type { User } from "@supabase/auth-js";

export const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        console.log("Fetching user...");
        const { data, error } = await supabase.auth.getUser();
        console.log(data);

        if (error) throw new Error(`Error fetching user: ${error.message}`);

        if (data.user) setUser(data.user);
      } catch (e) {
        console.error("Unknown error:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};
