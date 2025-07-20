import { useUser } from "@/lib/hooks/use-user";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: User | null;
  login: (values: { username: string; password: string }) => Promise<void>;
  logout: () => void;
  fetchUser: () => void;
  loading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { user, loading } = useUser();
  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(false);

  const authContextValue: AuthContextType = {
    user,
    login,
    logout,
    loading,
    fetchUser,
    isAuthenticated: !!user && !!localStorage.getItem("access_token"),
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Define custom hook to consume AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
