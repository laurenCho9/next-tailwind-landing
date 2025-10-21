"use client";

import Image from "next/image";
import MemoRail from "./MemoRail";
import { useMemos } from "@/hooks/useMemos";
import { useState } from "react";

const DramaSearch = () => {
  // q: 실제 쿼리 (검색 실행 시에만 변경)
  const [q, setQ] = useState("");
  // input: 사용자가 타이핑 중인 값
  const [input, setInput] = useState("");

  const { data, loading } = useMemos(q);

  const onSearch = () => setQ(input.trim());
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <section className="w-full h-[440px] bg-[#F8F1EA]">
      <article className="mx-auto w-full max-w-[1440px] h-full flex flex-col items-center justify-center pt-[72px] pb-[100px]">
        <Image
          src="/images/book.png"
          alt="book"
          width={112}
          height={112}
          className="mb-8"
        />
        <h3 className="text-[32px] leading-none font-bold text-[#911A00] mb-5">
          오늘 찾아볼 희곡은 무엇인가요?
        </h3>
        {/* 입력 + 버튼 */}
        <div className="w-full max-w-[720px] py-5 px-6 flex items-center justify-between gap-3 border-b-[1.4px] border-[#D02D01]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="#로맨스  #고전주의  #신화  #비극"
            className="w-full rounded-lg px-4 focus:outline-none
            placeholder:text-[#B28B7A] placeholder:text-[20px] placeholder:font-semibold
            text-[#911A00] text-[20px] font-bold
            "
          />
          <button
            onClick={onSearch}
            aria-label="Next slide"
            className="cursor-pointer w-6 h-6 pointer-events-auto grid place-items-center"
          >
            <Image
              src="/icons/search.svg"
              alt="search"
              width={24}
              height={24}
            />
          </button>
        </div>
      </article>

      {/* 결과 레일 */}
      <article className="mx-auto w-full max-w-[1440px] pb-[72px]">
        <div className="relative">
          {/* 삘간 컨테이너(타이틀란) */}
          <div className="w-full h-[304px] bg-[#911A00]">
            <div className="w-full max-w-[1200px] h-full mx-auto flex items-center justify-between ">
              <div className="flex flex-col items-start justify-center text-white">
                <h3 className="font-bold text-[32px]">지금 뜨는 메모</h3>
                <p className="font-medium text-[20px]">
                  다른 유저가 남기고 간 메모를 발견해보세요
                </p>
              </div>
              <div className="text-[80px] font-bold text-[#CC4B2F]">MEMO</div>
            </div>
          </div>
          {/* 노란 컨테이너 */}
          <div className="w-full h-[341px] mx-auto flex items-center justify-between bg-[#F8F1EA]"></div>
          {/* 카드 레일 */}
          {loading ? (
            <p className="text-black text-center absolute bottom-[230px] left-0 w-full">
              불러오는 중…
            </p>
          ) : data.length === 0 ? (
            <p className="text-black text-center absolute bottom-[230px] left-0 w-full">
              검색 결과가 없습니다.
            </p>
          ) : (
            <MemoRail items={data} />
          )}
        </div>
      </article>
    </section>
  );
};
export default DramaSearch;
