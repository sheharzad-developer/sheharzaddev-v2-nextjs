import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Sheharzad" />

      <AppBanner />

      <div className="flex flex-col items-center mt-10">
        <a
          href="https://sheharzad-developer.github.io/Card-Click-and-Play/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
        >
          <img
            src="/images/Card-and-Click:Play.png"
            alt="Card Click and Play Demo"
            className="rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-center">Card Click and Play</h3>
            <p className="text-gray-600 text-center">Interactive card game project. Click to play!</p>
          </div>
        </a>
      </div>

      {/* <div className="mt-10 sm:mt-15 flex justify-center">
        <div className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
          <Link href="/projects" aria-label="More Projects" passHref>
            <Button title="More Projects" />
          </Link>
        </div>
      </div> */}
    </div>
  );
}
