"use client";
import { restaurants } from "@/data/restaurants";
import  Link from "next/link";
import { useState } from "react";

export default function RestaurantsPage() {
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const categories = ["전체", "한식", "일식", "분식", "양식", "인도음식"];

    const filteredRestaurants = selectedCategory==="전체"? restaurants : restaurants.filter((restaurant) => restaurant.category ===selectedCategory);

    return (
        <div className = "flex flex-col gap-6">
            <h1 className="text-3xl font-bold">맛집 목록</h1>

            <div className = "flex gap-2">
                {categories.map((category) => (
                    <button
                        key = {category}
                        type = "button"
                        onClick = {() => setSelectedCategory(category)}
                        className={`rounded-full px-4 py-2 font-semibold transition ${
                            selectedCategory === category ? "bg-orange-500 text-white": "bg-white text-gray-600 hover:bg-orange-50"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <ul className = "grid grid-cols-2 gap-4">
                {filteredRestaurants.map((restaurant) => (
                    <li key = {restaurant.id}>
                        <Link
                            href={`/restaurants/${restaurant.id}`}
                            className = "flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm hover:shadow-md">
                            <span className = "text-4xl"> {restaurant.emoji}</span>
                            <span className = "text-lg font-bold"> {restaurant.name}</span>
                            <span className = "text-sm text-gray-500"> {restaurant.category} · {restaurant.menu}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}