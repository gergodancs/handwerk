import type { Dictionary } from "@/lib/dictionaries";
import {
  formatRatingValue,
  formatReviewCount,
  getPlaceReviews,
  type PlaceReview,
} from "@/lib/google-places";
import type { Locale } from "@/lib/i18n";
import { GOOGLE_MAPS_PLACE_URL, GOOGLE_WRITE_REVIEW_URL } from "@/lib/constants";
import { GoogleIcon } from "./icons/GoogleIcon";

type ReviewsProps = {
  dict: Dictionary;
  lang: Locale;
};

function StarRating({
  rating,
  starsLabel,
}: {
  rating: number;
  starsLabel: string;
}) {
  const rounded = Math.round(rating);

  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} / 5 ${starsLabel}`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-4 w-4 ${index < rounded ? "text-amber-400" : "text-slate-600"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AuthorAvatar({ review }: { review: PlaceReview }) {
  const initials = review.author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (review.authorPhotoUrl) {
    return (
      <img
        src={review.authorPhotoUrl}
        alt=""
        width={48}
        height={48}
        referrerPolicy="no-referrer"
        className="h-12 w-12 shrink-0 rounded-full border border-slate-700 object-cover"
      />
    );
  }

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-sm font-semibold text-emerald-400"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function ReviewCard({
  review,
  starsLabel,
}: {
  review: PlaceReview;
  starsLabel: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
      <div className="flex items-start gap-4">
        <AuthorAvatar review={review} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">
            {review.author}
          </p>
          <div className="mt-1">
            <StarRating rating={review.rating} starsLabel={starsLabel} />
          </div>
        </div>
      </div>

      <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-slate-300">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {review.relativeTime && (
        <footer className="mt-4 border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-500">{review.relativeTime}</p>
        </footer>
      )}
    </article>
  );
}

export async function Reviews({ dict, lang }: ReviewsProps) {
  const placeReviews = await getPlaceReviews(lang);
  const ratingLabel = formatRatingValue(placeReviews.rating);
  const reviewCountLabel = formatReviewCount(placeReviews.totalRatings, lang);

  return (
    <section
      id="bewertungen"
      aria-labelledby="reviews-heading"
      className="bg-slate-950 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2
              id="reviews-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              {dict.reviews.title}
            </h2>
            <p className="mt-3 flex items-center gap-2 text-lg text-slate-400">
              <GoogleIcon className="h-5 w-5 shrink-0 text-slate-400" />
              {dict.reviews.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <GoogleIcon className="h-4 w-4" />
                {dict.reviews.sourceLabel}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-3xl font-bold text-white">
                  {ratingLabel}
                </span>
                <div>
                  <StarRating
                    rating={placeReviews.rating}
                    starsLabel={dict.reviews.starsLabel}
                  />
                  <p className="mt-1 text-sm text-slate-400">
                    {reviewCountLabel}
                  </p>
                </div>
              </div>
            </div>

            {GOOGLE_WRITE_REVIEW_URL && (
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-emerald-500"
              >
                <GoogleIcon className="h-4 w-4" />
                {dict.reviews.writeReviewLabel}
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeReviews.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              starsLabel={dict.reviews.starsLabel}
            />
          ))}
        </div>

        {placeReviews.source === "places" &&
          placeReviews.totalRatings > placeReviews.reviews.length && (
            <p className="mt-6 text-center text-sm text-slate-500">
              {dict.reviews.partialApiNote.replace(
                "{count}",
                String(placeReviews.totalRatings),
              )}
            </p>
          )}

        {(GOOGLE_MAPS_PLACE_URL || GOOGLE_WRITE_REVIEW_URL) && (
          <div className="mt-8 text-center">
            <a
              href={GOOGLE_MAPS_PLACE_URL || GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <GoogleIcon className="h-4 w-4" />
              {dict.reviews.viewAllLabel} →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
