import { ClimbingBoxLoader } from "react-spinners";

export const AppLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClimbingBoxLoader color="#facc15" size={50} />
    </div>
  );
};