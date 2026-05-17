import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  getTrendingMoviedetails } from "../Api/movieApi";

export const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchedMovies = async () => {
      const data = await getTrendingMoviedetails(id);
      setMovie(data);
      console.log(data)
    };

    fetchedMovies();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex justify-center">
      <div className="max-w-6xl w-full bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Poster */}
        <div className="md:w-1/3">
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750"
            }
            alt={movie?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="md:w-2/3 p-6 flex flex-col justify-between">

          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold mb-3">
              {movie?.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
              <span>⭐ {movie?.vote_average}</span>
              <span>{movie?.release_date}</span>
              <span>{movie?.original_language?.toUpperCase()}</span>
            </div>

            {/* Overview */}
            <p className="text-zinc-300 leading-7 mb-6">
              {movie?.overview}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition">
              ▶ Watch Trailer
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              + Watchlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};