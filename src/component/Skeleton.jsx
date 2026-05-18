/** TMDB default results per page */
export const TMDB_PAGE_SIZE = 20;

/** Poster placeholder — keep in sync with MovieCard image area while loading */
export const POSTER_PLACEHOLDER_BG = "bg-gray-500";

const cardClassName =
  "bg-zinc-400 rounded-xl overflow-hidden shadow-md w-full max-w-65 mx-auto";

export function MovieCardSkeleton() {
  return (
    <div className={cardClassName}>
      <div className="overflow-hidden">
        <Skeleton className="h-64 w-full" />
      </div>

      <div className="p-3">
        <Skeleton className="h-5 w-full rounded" />

        <div className="flex items-center justify-between mt-2">
          <Skeleton className="h-5 w-12 rounded" />
          <Skeleton className="h-6 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default function AppSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3 p-3">
      {Array.from({ length: TMDB_PAGE_SIZE }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
}

function Skeleton({ className = "" }) {
  return (
    <div
      className={`
        relative overflow-hidden
        ${POSTER_PLACEHOLDER_BG}
        ${className}
      `}
    >
      <div
        className="
          absolute inset-0
          -translate-x-full
          animate-[shimmer_2.2s_linear_infinite]
          bg-linear-to-r
          from-transparent
          via-zinc-300/20
          to-transparent
        "
      />
    </div>
  );
}
