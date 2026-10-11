import { Metadata } from "next";
import  Link from "next/link";
import "./globals.css";
import NavMenu from "@/components/NavMenu";
import { Suspense } from "react";

export const metadata : Metadata = {
  title : "맛집 도감",
  description : "우리 학교 앞 맛집을 모아둔 도감",
};

export default function RootLayout({
  children,
} : {
  children : React.ReactNode;
}) {
  return (
     <html lang="ko">
      <body className="min-h-screen bg-orange-50 text-gray-900">
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
          <Link href="/" className="text-xl font-bold text-orange-500">
            🦁 맛집 도감
          </Link>
          <Suspense fallback = {null}>
            <NavMenu/>
          </Suspense> {/* 현재 경로를 읽는 NavMenu라 Suspense로 감쌌습니다. */}
        </header>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
      </body>
    </html>
  )
}