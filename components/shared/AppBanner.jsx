import { motion } from 'framer-motion'
import { FiArrowDownCircle } from 'react-icons/fi'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'
import { useRef, Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import BannerImg from '../../public/images/bannerImg.2a08b5b3.svg'

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { 
  ssr: false,
  loading: () => <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg" />
})

function AppBanner() {
  const [activeTheme] = useThemeSwitcher()
  const [isClient, setIsClient] = useState(false)
  const [lottieVisible, setLottieVisible] = useState(false)
  const lottieContainerRef = useRef(null)

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    setIsClient(true)
    if (!lottieContainerRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setLottieVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    observer.observe(lottieContainerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className='flex flex-col sm:justify-between items-center sm:flex-row mt-5'
    >
      <div className='w-full text-left mb-8 sm:mb-0'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1
          }}
          className='font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase'
        >
          Hi, I am Sheharzad Salahuddin
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2
          }}
          className='font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200'
        >
          A Full-Stack Developer & Design Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3
          }}
          className='flex justify-center sm:block'
        >
          <a
            download='Sheharzad_Salahuddin-SoftwareEngineer.pdf'
            href='/files/SheharzadSalahuddin-SoftwareDeveloper.pdf'
            className='font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500'
            aria-label='Download Resume'
          >
            <FiArrowDownCircle className='ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100'></FiArrowDownCircle>
            <span className='text-sm sm:text-lg duration-100'>Download CV</span>
          </a>
        </motion.div>
      </div>
    
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.5, delay: 0.2 }}
        className='w-full md:w-2/3 flex flex-col items-center sm:justify-end mb-8 sm:mb-0'
      >
        <div className='w-full flex justify-center sm:justify-end'>
          <div className='w-full h-[300px] sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] relative'>
            <Image 
              src={BannerImg}
              alt="Banner illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AppBanner
