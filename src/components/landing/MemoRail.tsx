"use client";

import { useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { TMemo } from "@/types/memo";
import { getRelativeDate } from "@/utils/date";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const MemoRail = ({ items }: { items: TMemo[] }) => {
  // 좋아요를 누른 메모 ID들을 추적
  const [likedMemos, setLikedMemos] = useState<Set<string>>(new Set());
  // 각 메모의 좋아요 카운트를 로컬에서 관리
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    items.forEach((item) => {
      counts[item.id] = item.likes;
    });
    return counts;
  });

  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // 호버 시 일시정지
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      // 드래그 가능
      dragFree: true,
    },
    [autoplayRef.current]
  );

  // 좋아요 토글 함수
  const handleLikeToggle = async (memoId: string, currentLikes: number) => {
    const isLiked = likedMemos.has(memoId);
    const newLikeCount = isLiked ? currentLikes - 1 : currentLikes + 1;

    // 낙관적 UI 업데이트
    setLikedMemos((prev) => {
      const newSet = new Set(prev);
      if (isLiked) {
        newSet.delete(memoId);
      } else {
        newSet.add(memoId);
      }
      return newSet;
    });

    setLikeCounts((prev) => ({
      ...prev,
      [memoId]: newLikeCount,
    }));

    // Supabase 업데이트
    try {
      const { error } = await supabase
        .from("memos")
        .update({ likes: newLikeCount })
        .eq("id", memoId);

      if (error) {
        console.error("좋아요 업데이트 실패:", error);
        // 실패 시 롤백
        setLikedMemos((prev) => {
          const newSet = new Set(prev);
          if (isLiked) {
            newSet.add(memoId);
          } else {
            newSet.delete(memoId);
          }
          return newSet;
        });
        setLikeCounts((prev) => ({
          ...prev,
          [memoId]: currentLikes,
        }));
      }
    } catch (err) {
      console.error("좋아요 처리 중 오류:", err);
    }
  };

  return (
    <div
      ref={emblaRef}
      className="absolute top-[230px] left-0 w-full overflow-hidden px-5"
    >
      {/* Container */}
      <div className="flex gap-5">
        {items.map((m) => {
          const isLiked = likedMemos.has(m.id);
          const displayLikes = likeCounts[m.id] ?? m.likes;
          return (
            // NOTE: flex-[0_0_388px]란? grow: 0 → 남는 공간을 늘려서 차지하지 않음, shrink: 0 → 공간이 작아져도 줄어들지 않음, basis: 388px → 기본 너비를 388px로 고정
            <article
              key={m.id}
              className="select-none flex-[0_0_388px] h-[380px] bg-white shadow-[-4px_4px_4px_rgba(172,121,58,0.1)] p-8 last:mr-5"
            >
              <div className="flex flex-col h-full justify-between gap-2">
                <header className="flex align-baseline gap-5">
                  <span className="text-sm font-medium text-[#555555]">
                    {m.username}
                  </span>
                  <span className="text-sm font-semibold text-[#A0A0A0]">
                    {getRelativeDate(m.created_at)}
                  </span>
                </header>

                <main className="flex-1 overflow-hidden space-y-2">
                  {m.body_title && (
                    <h3 className="text-xl font-bold text-[#911A00]">
                      {m.body_title}
                    </h3>
                  )}
                  {/* m.body_title이 있을 때: line-clamp-8 (8줄까지 표시)
                      m.body_title이 없을 때: line-clamp-10 (10줄까지 표시) */}
                  <p
                    className={`text-base font-normal text-[#555555] ${
                      m.body_title ? "line-clamp-8" : "line-clamp-10"
                    }`}
                  >
                    {m.body}
                  </p>
                </main>

                <footer className="flex items-end justify-between text-sm">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <button
                        className="cursor-pointer"
                        onClick={() => handleLikeToggle(m.id, displayLikes)}
                      >
                        <Image
                          src={isLiked ? "/icons/liked.svg" : "/icons/like.svg"}
                          alt="like"
                          width={24}
                          height={24}
                        />
                      </button>
                      <span
                        className={`text-sm font-semibold ${
                          isLiked ? "text-[#911A00]" : "text-[#6D6D6D]"
                        }`}
                      >
                        {displayLikes}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="cursor-pointer">
                        <Image
                          src="/icons/chat.svg"
                          alt="chat"
                          width={24}
                          height={24}
                        />
                      </button>
                      <span className="text-sm font-semibold text-[#6D6D6D]">
                        {m.comments}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col text-right gap-1">
                    <span className="text-neutral-500">{m.playwright}</span>
                    <span className="text-[#911A00]">『{m.play_title}』</span>
                  </div>
                </footer>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
export default MemoRail;
