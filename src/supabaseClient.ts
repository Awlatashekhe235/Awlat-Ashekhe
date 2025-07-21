import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://reomrtpxmbaxzqavreil.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlb21ydHB4bWJheHpxYXZyZWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTgzMDAsImV4cCI6MjA2ODA3NDMwMH0.2ku0jwcILH7hKn7OcDn3Xe6xjSiYnR-aY9Gbf5MlJnM";

export const supabase = createClient(supabaseUrl, supabaseKey);
