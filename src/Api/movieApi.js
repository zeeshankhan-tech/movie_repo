
const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY2NTA0NGU0YjljNzc5OGViZDY0OWQ4NGQ3YmE5ZCIsIm5iZiI6MTc3ODE3Mjk2Mi4yNjQsInN1YiI6IjY5ZmNjNDIyODFhYmIzZmIxYjFiMGVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgN8yduJIZkuv67Qgto67lD9I5faZ26OMyszctGb2yQ'
  }
};

export const  getTrendingMovies = async()=>{
    const response = await fetch (url,options);
    const data  = await response.json();
    return data;
}




///////////////////movie info / /////////////////////////
export const getTrendingMoviedetails = async (movieId) =>{
const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
const options = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY2NTA0NGU0YjljNzc5OGViZDY0OWQ4NGQ3YmE5ZCIsIm5iZiI6MTc3ODE3Mjk2Mi4yNjQsInN1YiI6IjY5ZmNjNDIyODFhYmIzZmIxYjFiMGVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgN8yduJIZkuv67Qgto67lD9I5faZ26OMyszctGb2yQ'
  }
};
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
  }

////////////////////////////////////// Top Rated Movies ///////////////////////////////////////////////

const url2 = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmY2NTA0NGU0YjljNzc5OGViZDY0OWQ4NGQ3YmE5ZCIsIm5iZiI6MTc3ODE3Mjk2Mi4yNjQsInN1YiI6IjY5ZmNjNDIyODFhYmIzZmIxYjFiMGVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HgN8yduJIZkuv67Qgto67lD9I5faZ26OMyszctGb2yQ'
  }
};

export const topRatedMovie = async ()=>
 {
  const res = await fetch(url2, options2)
  const data = await res.json();
  return data ;  
}

