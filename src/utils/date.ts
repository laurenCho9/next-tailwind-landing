/**
 * 날짜를 상대적 시간으로 변환합니다.
 * @param date - 변환할 날짜 문자열 또는 Date 객체
 * @returns "오늘", "1일 전", "2일 전" 등의 문자열
 */
export function getRelativeDate(date: string | Date): string {
  const targetDate = new Date(date);
  const today = new Date();

  // 시간을 00:00:00으로 초기화하여 날짜만 비교
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = today.getTime() - targetDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "오늘";
  } else if (diffDays === 1) {
    return "1일 전";
  } else if (diffDays > 1 && diffDays < 30) {
    return `${diffDays}일 전`;
  } else if (diffDays >= 30 && diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months}개월 전`;
  } else {
    // 1년 이상된 경우 실제 날짜 표시
    return targetDate.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
}
