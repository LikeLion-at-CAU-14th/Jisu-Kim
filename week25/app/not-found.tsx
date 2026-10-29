export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-red-500">
        ⚠️존재하지 않는 맛집입니다⚠️
      </h1>

      <a
        href="/restaurants"
        className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold"
      >
        맛집 목록으로 돌아가기
      </a>
    </main>
  );
}