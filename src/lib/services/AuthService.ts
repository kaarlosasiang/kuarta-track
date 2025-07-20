import { supabase } from "@/lib/config/supabase/client";
import type { User } from "@supabase/auth-js";

const authService = {
  login: async (values: { email: string; password: string }) => {
    const response = await supabase.auth.signInWithPassword(values);

    console.log(response);
  },

  register: async (values: { email: string; password: string }) => {},
};

export default authService;
