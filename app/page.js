import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center relative">
      <Image
        src="/home/booklist--2.png"
        alt="home-background"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="blur-sm "
      />
      <div className="bg-white flex flex-col justify-center items-center z-10 rounded-md lg:w-1/4 p-10">
        <div className="flex items-center gap-4">
          <SparklesIcon className="w-10 h-10 text-purple-700" />
          <span className="text-3xl text-purple-700 font-medium">
            {" "}
            Books store{" "}
          </span>
        </div>
        <div className="mt-10">
          <Link
            className="bg-purple-700 text-white p-3 rounded-md"
            href="/store"
          >
            Take me to the Store
          </Link>
        </div>
      </div>
    </div>
  );
}
