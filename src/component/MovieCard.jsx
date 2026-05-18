import { useState } from "react";
import { Link } from "react-router";
import { POSTER_PLACEHOLDER_BG } from "./Skeleton";

const POSTER_WIDTH = 500;
const POSTER_HEIGHT = 750;

export const MovieCard = ({ movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const posterSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div
      className="bg-zinc-400 rounded-xl overflow-hidden shadow-md
      w-full max-w-65 mx-auto
      hover:scale-105 hover:shadow-2xl
      transition-transform duration-300 ease-in-out"
    >
      {/* Image */}
      <div className={`relative h-64 w-full overflow-hidden ${POSTER_PLACEHOLDER_BG}`}>

        {/* Shimmer — shows while image is loading */}
        {!imageLoaded && !imageError && posterSrc && (
          <div className="absolute inset-0 shimmer" />
        )}

        {/* Fallback — no poster or broken image */}
        {(!posterSrc || imageError) && (
          <div
            className={`absolute inset-0 ${POSTER_PLACEHOLDER_BG} flex items-center justify-center text-zinc-300 text-xs`}
          >
            No Image
          </div>
        )}

        {posterSrc && !imageError && (
          <img
      src={posterSrc}
      alt={movie.title ?? movie.name}
      loading="lazy"
      decoding="async"
      onLoad={() => setImageLoaded(true)}
      onError={() => {
        setImageError(true);
        setImageLoaded(true);
      }}
      className={`
        h-64 w-full object-cover
        transition-all duration-300 ease-out
        ${
          imageLoaded
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
        }
      `}
    />
        )}
      </div>

      {/* Content */}
      <div className="p-3 text-white">
        <h3 className="text-sm font-semibold truncate">
          {movie.title ?? movie.name}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-400 font-bold text-sm">
            ⭐ {movie.vote_average}
          </span>

          <Link to={`/movieInfo/${movie.id}`}>
            <button
              className="bg-red-500 text-xs px-3 py-1 rounded-md
            hover:bg-red-600 active:scale-95 transition"
            >
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};