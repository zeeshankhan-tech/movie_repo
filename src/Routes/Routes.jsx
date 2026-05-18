import { createBrowserRouter } from "react-router-dom";


import { MovieInfo } from "../component/MovieInfo";
// import { AppLoader } from "../component/AppLoader";
import {HomeLayout} from '../Layout/HomeLayout'
import AppSkeleton from "../component/Skeleton";

export const Routes = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <AppSkeleton />,
    element : <HomeLayout/>,

    children: [
      {
        index:true,
        lazy: () => import("../component/Home")
      
    },
      {
        path: "trending",
        lazy: () => import("../pages/TrendingMovies")
      },
      {
        path: "bollywood",
        lazy: () => import("../pages/BollywoodMovie"),
      },
      {
        path: "hollywood",
        lazy: () => import("../pages/HollywoodMovie"),
      },
      {
        path: "top-rated",
        lazy: () => import("../pages/TopRatedMovies"),
      },
      {
        path: "movieInfo/:id",
        element: <MovieInfo />,
      },
    ],
  },
]);