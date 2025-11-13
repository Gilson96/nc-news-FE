import { ArrowLeftCircleIcon, RouteOff } from "lucide-react";
import { Link } from "react-router";

const Four0FourError = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-3 pt-32">
      <RouteOff size={100} color="#99a1af" />
      <h1 className="font- text-3xl text-gray-400">Sorry wrong path</h1>
      <Link to={"/"} className="flex items-center gap-1">
        <ArrowLeftCircleIcon />
        <p>Go back to Home Page</p>
      </Link>
    </section>
  );
};

export default Four0FourError;
