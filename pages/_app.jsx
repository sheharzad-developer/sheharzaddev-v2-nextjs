import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import DefaultLayout from '../components/layout/DefaultLayout';
import useScrollToTop from '../hooks/useScrollToTop';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps, router }) {
  useScrollToTop(); // Call the hook here

  return (
    <AnimatePresence exitBeforeEnter>
      <div key={router.route} className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
