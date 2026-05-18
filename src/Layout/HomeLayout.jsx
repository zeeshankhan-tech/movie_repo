import { Outlet, useNavigation } from "react-router"
import { Navbar } from "../Navbar/Navbar"
import {Footer} from '../component/Footer'
import AppSkeleton from "../component/Skeleton";
import { useEffect, useState } from "react";

//import { LoaderSkeleton } from "../component/LoaderSkeleton"


export const HomeLayout = () => {
  // ✅ After — clean, no linter warning
const navigation = useNavigation();
const [isSlowLoading, setIsSlowLoading] = useState(false);

useEffect(() => {
  if (navigation.state !== "loading") return; // only run when loading

  const timer = setTimeout(() => setIsSlowLoading(true), 150);
  return () => {
    clearTimeout(timer);
    setIsSlowLoading(false); // cleanup resets it — this is async, not sync
  };
}, [navigation.state]);

const showSkeleton = isSlowLoading && navigation.state === "loading";
 
  return (
    <>
      <Navbar />
      {showSkeleton  ? <AppSkeleton/> : <Outlet/>}
      <Footer />
    </>
  );
};