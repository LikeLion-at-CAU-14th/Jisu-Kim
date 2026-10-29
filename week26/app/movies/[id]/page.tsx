import { movies } from '@/data/movies';
import { Noto_Sans_KR } from 'next/font/google';
import Image from 'next/image';
import MovieReviewsButton from '@/components/MovieReviewsButton';

const detailFont = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
});

interface MovieDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MovieDetailPage({
  params,
}: MovieDetailPageProps) {
  const { id } = await params;

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <main className = {detailFont.className}>
      <h1>{movie.title}</h1>
      
      <Image
        src={movie.image}
        alt={movie.title}
        width={300}
        height={450}
        style={{ objectFit: 'contain' }}
      />

      <p>
        {movie.year} · {movie.genre} · {movie.director}
      </p>

      <p style={{ whiteSpace: 'pre-line' }}>{movie.description}</p>

      <MovieReviewsButton />

    </main>
  );
}