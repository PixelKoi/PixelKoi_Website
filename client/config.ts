import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oaaownkmjninpyjapkgn.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hYW93bmttam5pbnB5amFwa2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwMjQzMjQsImV4cCI6MTk5ODYwMDMyNH0.IkHpflKjFoWkcivNrcJfer3zHjngb-OhVdRAk6Eba74";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
