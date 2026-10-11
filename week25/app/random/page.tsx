"use client";

import { restaurants } from "@/data/restaurants";
import { useRouter } from "next/navigation";

export default function RandomPage() {
  const router = useRouter();

  const goRandomRestaurant = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];

    router.push(`/restaurants/${randomRestaurant.id}`);
  };

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-10 text-center shadow-sm">
      <p className="text-6xl">🎲</p>

      <h1 className="text-3xl font-bold">뭐먹을래?</h1>

      <p className="text-gray-500">
        선택이 어려운 당신을 위한 랜덤 뽑기!!
      </p>

      <button
        type="button"
        onClick={goRandomRestaurant}
        className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white hover:bg-orange-600"
      >
        랜덤 맛집으로 이동하기
      </button>
    </div>
  );
}