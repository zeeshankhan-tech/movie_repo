
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoaderSkeleton = () =>
{

    return(

        <div>
      <Skeleton height={40} width={200} />
      <Skeleton height={100} />
      <Skeleton height={100} />
    </div>
    )
}