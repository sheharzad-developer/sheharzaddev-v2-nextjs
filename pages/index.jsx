import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Sheharzad" />

      <AppBanner />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center mt-6 sm:mt-8"
      >
        <a
          href="https://sheharzad-developer.github.io/Card-Click-and-Play/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
        >
          <img
            src="/images/Card-and-Click:Play.png"
            alt="Card Click and Play Demo"
            className="rounded-t-lg w-full h-40 object-cover"
          />
          <div className="p-3">
            <h3 className="text-base sm:text-lg font-semibold mb-1 text-center">Card Click and Play</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center">Interactive card game project. Click to play!</p>
          </div>
        </a>
      </motion.div>

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
