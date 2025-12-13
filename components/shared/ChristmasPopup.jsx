'use client';

import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function ChristmasPopup() {
  const [isVisible, setIsVisible] = useState(false);

  const FORCE_SHOW = true;

  useEffect(() => {
    if (FORCE_SHOW) setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-xl w-full shadow-2xl"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white"
        >
          <FiX size={20} />
        </button>

        {/* IMAGE — GUARANTEED TO SHOW */}
        <Image
          src="/images/Christmas.jpg"
          alt="Merry Christmas"
          width={600}
          height={400}
          className="rounded-lg object-contain mx-auto"
          priority
        />

        <h2 className="text-center text-xl font-bold mt-4 text-white">
          🎄 Merry Christmas!
        </h2>
      </motion.div>
    </motion.div>
  );
}

export default ChristmasPopup;