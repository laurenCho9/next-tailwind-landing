// 데이터 가져오기 + 검색
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { TMemo } from "@/types/memo";

export function useMemos(q: string) {
  const [data, setData] = useState<TMemo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let aborted = false;

    const run = async () => {
      setLoading(true);
      const keyword = q.trim();
      const tag = keyword.startsWith("#") ? keyword.slice(1) : null;

      // base query
      let query = supabase
        .from("memos")
        .select("*")
        .order("created_at", { ascending: false });

      if (keyword.length) {
        // OR 조건 빌드
        const ors = [
          `play_title.ilike.%${keyword}%`,
          `playwright.ilike.%${keyword}%`,
          `body.ilike.%${keyword}%`,
        ];
        if (tag) {
          // text[]에 포함 여부: @> 연산자(contains)
          // supabase-js에서는 filter로 raw 사용
          // genres @> '{로맨스}'
          query = query.filter("genres", "cs", `{${tag}}`); // cs: contains
        } else {
          query = query.or(ors.join(","));
        }
      }

      const { data: rows, error } = await query;
      if (error) {
        console.error(error);
        if (!aborted) setData([]);
      } else if (!aborted) {
        setData(rows as TMemo[]);
      }
      if (!aborted) setLoading(false);
    };

    run();
    return () => {
      aborted = true;
    };
  }, [q]);

  return { data, loading };
}
