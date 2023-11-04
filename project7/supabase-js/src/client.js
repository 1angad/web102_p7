import { createClient } from "@supabase/supabase-js";

const URL = "https://wrwobxhynnpbxhthuinh.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyd29ieGh5bm5wYnhodGh1aW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNTMzNjIsImV4cCI6MjAxNDYyOTM2Mn0.M0tYdQBQbMaE1pXpMUb8wq9t0pmgvWhRN-aBpKzRMzY";

export const supabase = createClient(URL, API_KEY);