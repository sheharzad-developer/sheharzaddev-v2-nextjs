import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Image from 'next/image';

function ChristmasPopup() {
	const [isVisible, setIsVisible] = useState(false);
	
	// Set to true to always show popup for testing (set back to false for production)
	const FORCE_SHOW = true;

	useEffect(() => {
		// Only run on client side
		if (typeof window === 'undefined') return;
		
		let autoCloseTimer = null;
		
		const showPopup = () => {
			// Force show for testing - always show
			if (FORCE_SHOW) {
				console.log('🎄 Showing Christmas popup');
				setIsVisible(true);
				// Auto-dismiss after 10 seconds
				autoCloseTimer = setTimeout(() => {
					setIsVisible(false);
					const today = new Date();
					localStorage.setItem('christmasPopupLastSeen', today.toDateString());
				}, 10000);
				return;
			}
			
			// Check if it's Christmas season (December 1 - January 6)
			const today = new Date();
			const month = today.getMonth() + 1; // 1-12
			const day = today.getDate();
			
			// Show popup during December (month 12) or early January (month 1, days 1-6)
			const isChristmasSeason = (month === 12) || (month === 1 && day <= 6);
			
			if (isChristmasSeason) {
				// Check if user has already seen the popup today
				const lastSeen = localStorage.getItem('christmasPopupLastSeen');
				const todayStr = today.toDateString();
				
				// Show popup if not seen today
				if (lastSeen !== todayStr) {
					console.log('🎄 Showing Christmas popup');
					setIsVisible(true);
					// Auto-dismiss after 10 seconds
					autoCloseTimer = setTimeout(() => {
						setIsVisible(false);
						const today = new Date();
						localStorage.setItem('christmasPopupLastSeen', today.toDateString());
					}, 10000);
				}
			}
		};

		// Show immediately - no delay
		showPopup();
		
		return () => {
			if (autoCloseTimer) {
				clearTimeout(autoCloseTimer);
			}
		};
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		// Remember that user saw it today
		if (typeof window !== 'undefined') {
			const today = new Date();
			localStorage.setItem('christmasPopupLastSeen', today.toDateString());
		}
	};

	if (!isVisible) return null;

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="christmas-popup"
				initial={{ opacity: 0, x: 400, scale: 0.8 }}
				animate={{ opacity: 1, x: 0, scale: 1 }}
				exit={{ opacity: 0, x: 400, scale: 0.8 }}
				transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
				className="fixed top-4 right-4 z-[9999] max-w-sm w-full sm:max-w-md"
				style={{ pointerEvents: 'auto' }}
			>
				<div className="bg-gradient-to-br from-red-50 to-green-50 dark:from-red-900/30 dark:to-green-900/30 backdrop-blur-lg border-2 border-red-200 dark:border-red-500/50 rounded-2xl shadow-2xl overflow-hidden relative">
					{/* Decorative Christmas top border */}
					<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-red-500"></div>
					
					{/* Close button */}
					<button
						onClick={handleClose}
						className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors"
						aria-label="Close Popup"
					>
						<FiX className="text-lg text-gray-700 dark:text-gray-200" />
					</button>
					
					{/* Popup Content */}
					<div className="p-4 sm:p-6">
						{/* Header */}
						<div className="text-center mb-4">
							<h3 className="text-xl sm:text-2xl font-bold text-primary-dark dark:text-primary-light flex items-center justify-center gap-2 mb-2">
								<span className="text-2xl sm:text-3xl">🎄</span>
								<span>Merry Christmas!</span>
								<span className="text-2xl sm:text-3xl">🎅</span>
							</h3>
						</div>
						
						{/* Christmas Image - Christmas.jpg */}
						<div className="relative w-full h-48 sm:h-64 mb-4 rounded-lg overflow-hidden shadow-lg bg-white/50 dark:bg-gray-800/30">
							<Image
								src="/images/Christmas.jpg"
								alt="Merry Christmas"
								fill
								className="object-contain p-2"
								priority
								sizes="(max-width: 640px) 100vw, 400px"
							/>
						</div>
						
						{/* Message */}
						<div className="text-center">
							<p className="text-sm sm:text-base font-semibold text-primary-dark dark:text-primary-light mb-2">
								Wishing all our Christian friends and visitors
							</p>
							<p className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-green-600 dark:from-red-400 dark:to-green-400 mb-2">
								Merry Christmas! ✨
							</p>
							<p className="text-xs sm:text-sm text-ternary-dark dark:text-ternary-light">
								May this festive season bring you joy, peace, and happiness!
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default ChristmasPopup;
