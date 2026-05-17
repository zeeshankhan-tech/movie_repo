import { useEffect, useState } from "react";
import { topRatedMovie } from "../Api/movieApi";
import { MovieCard } from "../component/MovieCard";
import { MovieCardSkeleton, TMDB_PAGE_SIZE } from "../component/Skeleton";

export const Component = () => {
  const [topMovie, setTopMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedTopMovie = async () => {
      try {
        const data = await topRatedMovie();
        setTopMovie(data.results);
      } finally {
        setLoading(false);
      }
    };
    fetchedTopMovie();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3 p-3">
      {loading
        ? Array.from({ length: TMDB_PAGE_SIZE }).map((_, i) => (
            <MovieCardSkeleton key={i} />
          ))
        : topMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
    </div>
  );
};
