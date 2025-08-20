import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FiChevronDown } from 'react-icons/fi';

const languages = [
	{
		code: 'en',
		name: 'English',
		flag: '🇺🇸'
	},
	{
		code: 'es',
		name: 'Español',
		flag: '🇪🇸'
	},
	{
		code: 'fr',
		name: 'Français',
		flag: '🇫🇷'
	},
	{
		code: 'de',
		name: 'Deutsch',
		flag: '🇩🇪'
	},
	{
		code: 'ur',
		name: 'اردو',
		flag: '🇵🇰'
	}
];

function LanguageSwitcher() {
	const { currentLanguage, changeLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleLanguageChange = (languageCode) => {
		changeLanguage(languageCode);
		setIsOpen(false);
	};

	return (
		<div className="relative" ref={dropdownRef}>
			{/* Dropdown Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-700"
				aria-label="Select Language"
				aria-expanded={isOpen}
				aria-haspopup="listbox"
			>
				<span className="text-xl" role="img" aria-label={currentLang.name}>
					{currentLang.flag}
				</span>
				<span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
					{currentLang.code.toUpperCase()}
				</span>
				<FiChevronDown 
					className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
					<div className="py-2" role="listbox">
						{languages.map((language) => (
							<button
								key={language.code}
								onClick={() => handleLanguageChange(language.code)}
								className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 ${
									currentLanguage === language.code 
										? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
										: 'text-gray-700 dark:text-gray-300'
								}`}
								role="option"
								aria-selected={currentLanguage === language.code}
							>
								<span className="text-xl" role="img" aria-label={language.name}>
									{language.flag}
								</span>
								<div className="flex flex-col">
									<span className="text-sm font-medium">{language.name}</span>
									<span className="text-xs text-gray-500 dark:text-gray-400">
										{language.code.toUpperCase()}
									</span>
								</div>
								{currentLanguage === language.code && (
									<div className="ml-auto">
										<div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
									</div>
								)}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default LanguageSwitcher;