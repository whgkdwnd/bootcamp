import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/database.types";

// Supabase 클라이언트 생성 (서버 사이드용)
export function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Supabase URL과 Anon Key가 설정되지 않았습니다. .env.local 파일을 확인하세요."
    );
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey);
}
