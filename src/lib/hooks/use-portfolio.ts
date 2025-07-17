import { useEffect, useState } from "react";
import { supabase } from "@/lib/config/supabase/client";

export function usePortfolio() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const { data, error } = await supabase
        .from("assets")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setAssets(data);
    };

    fetchAssets();
  }, []);

  return assets;
}
