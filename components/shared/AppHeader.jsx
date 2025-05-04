import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import HireMeModal from "../HireMeModal";
import logoLight from "../../public/images/S-Logo/S-Logo.jpg";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      {/* Header */}
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-4 sm:py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14">
            <Link href="/">
              <Image
                src={logoLight}
                className={
                  activeTheme === "dark" ? "border-2 border-purple-600" : ""
                }
                alt="Logo"
                width={56}
                height={56}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <button
            onClick={() => setTheme(activeTheme)}
            type="button"
            aria-label="Toggle theme"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-lg" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-lg" />
            )}
          </button>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-4 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className="flex flex-col items-center w-full">
            <div className="block w-full text-left text-base sm:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 py-3 text-center border-b border-primary-light dark:border-secondary-dark">
              <Link href="/" aria-label="Home">
                Home
              </Link>
            </div>
            <div className="block w-full text-left text-base sm:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 py-3 text-center border-b border-primary-light dark:border-secondary-dark">
              <Link href="/about" aria-label="About Me">
                About Me
              </Link>
            </div>
            <div className="block w-full text-left text-base sm:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 py-3 text-center border-b border-primary-light dark:border-secondary-dark">
              <Link href="/contact" aria-label="Contact">
                Contact
              </Link>
            </div>
            <div className="block w-full text-left text-base sm:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 py-3 text-center border-b border-primary-light dark:border-secondary-dark">
              <Link href="/projects" aria-label="Projects">
                Projects
              </Link>
            </div>
            <div className="block w-full text-left text-base sm:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 py-3 text-center">
              <Link href="/certifications" aria-label="Certifications">
                Certifications
              </Link>
            </div>
          </div>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark flex justify-center w-full">
            <button
              onClick={showHireMeModal}
              className="font-general-medium sm:hidden block text-base bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2 duration-300 w-24"
              aria-label="Hire Me Button"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Header links large screen */}
        <div className="font-general-medium hidden m-0 sm:ml-4 mt-4 sm:mt-0 sm:flex p-4 sm:p-0 justify-center items-center shadow-lg sm:shadow-none flex-grow">
          <div className="flex justify-center items-center space-x-6 sm:space-x-8">
            <div
              className="block text-left text-base sm:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light hover:underline"
              aria-label="Home"
            >
              <Link href="/">Home</Link>
            </div>
            <div
              className="block text-left text-base sm:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light hover:underline"
              aria-label="About Me"
            >
              <Link href="/about">About Me</Link>
            </div>
            <div
              className="block text-left text-base sm:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light hover:underline"
              aria-label="Contact"
            >
              <Link href="/contact">Contact</Link>
            </div>
            <div
              className="block text-left text-base sm:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light hover:underline"
              aria-label="Projects"
            >
              <Link href="/projects">Projects</Link>
            </div>
            <div
              className="block text-left text-base sm:text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light hover:underline"
              aria-label="Certifications"
            >
              <Link href="/certifications">Certifications</Link>
            </div>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex">
            <button
              onClick={showHireMeModal}
              className="text-base sm:text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 duration-300"
              aria-label="Hire Me Button"
            >
              Hire Me
            </button>
          </div>

          {/* Theme switcher large screen */}
          <button
            onClick={() => setTheme(activeTheme)}
            type="button"
            aria-label="Toggle theme"
            className="ml-6 bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-lg" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-lg" />
            )}
          </button>
        </div>
      </div>
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  );
}

export default AppHeader;
