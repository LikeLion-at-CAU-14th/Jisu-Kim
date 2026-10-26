'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MovieReviews = dynamic(() => import('./MovieReviews'), {
  loading: () => <p>관람평을 불러오는 중...</p>,
  ssr: false,
});

export default function MovieReviewsButton() {
  const [showReviews, setShowReviews] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="movie-reviews-button"
        onClick={() => setShowReviews(true)}
      >
        관람평 보기
      </button>

      {showReviews && <MovieReviews />}
    </div>
  );
}