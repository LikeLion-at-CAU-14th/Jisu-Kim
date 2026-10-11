"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="self-start text-orange-500 underline"
    >
      목록으로 돌아가기
    </button>
  );
}