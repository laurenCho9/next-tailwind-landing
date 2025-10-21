"use client";

import { useMemo } from "react";
import type { TMemo } from "@/types/memo";

const MemoRail = ({ items }: { items: TMemo[] }) => {
  // 무한 루프 자연스럽게 보이도록 리스트 복제
  const loopItems = useMemo(() => [...items, ...items], [items]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-8 animate-memo-scroll will-change-transform"
        style={{
          // 카드 총폭이 많을수록 느리게 — 필요 시 조절
          animationDuration: `${Math.max(20, items.length * 6)}s`,
        }}
      >
        {loopItems.map((m, i) => (
          <article
            key={`${m.id}-${i}`}
            className="w-[480px] shrink-0 rounded-lg bg-white/98 shadow-sm p-6"
          >
            <header className="mb-3 text-sm text-neutral-500">
              <span className="font-medium text-neutral-700">{m.username}</span>
              <span className="mx-2">·</span>
              <span>
                {new Date(m.created_at).toLocaleDateString("ko-KR", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </header>

            <h3 className="mb-2 text-lg font-semibold text-[#B8442F]">
              {m.play_title}
            </h3>
            <p className="mb-3 text-sm text-neutral-600">{m.body}</p>

            <footer className="mt-4 flex items-center justify-between text-sm">
              <span className="text-neutral-500">
                {m.playwright} · {m.genres.join(" / ")}
              </span>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};
export default MemoRail;
