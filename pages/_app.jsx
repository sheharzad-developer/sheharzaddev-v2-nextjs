import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import { LanguageProvider } from '../context/LanguageContext';
import useScrollToTop from '../hooks/useScrollToTop';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ChristmasPopup from '../components/shared/ChristmasPopup';

function MyApp({ Component, pageProps, router }) {
  useScrollToTop(); 

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <LanguageProvider>
      <ChristmasPopup />
      <AnimatePresence exitBeforeEnter>
        <div key={router.route} className="bg-secondary-light dark:bg-primary-dark transition duration-300">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </div>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default MyApp;
