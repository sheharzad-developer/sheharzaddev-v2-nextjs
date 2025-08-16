import React from "react";
import Image from "next/image";
import one from "../public/images/certifications/one.jpg";
import two from "../public/images/certifications/two.jpg";
import three from "../public/images/certifications/three.jpg";
import four from "../public/images/certifications/four.jpg";
import five from "../public/images/certifications/five.jpg";

const Certifications = () => {
  return (
    <div className="container mx-auto">
      <section >
        <div className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          {/* <div className="text-center">
            <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
              Certifications
            </h1>
          </div> */}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="800"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-20"
        >
          {[one, two, three, four, five].map((img, index) => (
            <div
              className="w-full"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={300 + index * 150}
              data-aos-duration="700"
            >
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800">
                <a href={img.src} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={img}
                      alt={`certification-${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      fill
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white dark:bg-gray-900 rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
          
          {/* Python Certificate PDF */}
          <div
            className="w-full"
            key="python-cert"
            data-aos="fade-left"
            data-aos-delay={300 + 5 * 150}
            data-aos-duration="700"
          >
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-2 border-green-500">
              <a 
                href="/images/certifications/Python-Certificate.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => console.log('Python Certificate PDF clicked')}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-green-500 via-blue-600 to-purple-700 relative flex flex-col items-center justify-center text-white group-hover:from-green-600 group-hover:via-blue-700 group-hover:to-purple-800 transition-all duration-300">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                    <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-8 left-8 w-4 h-4 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center p-6">
                    <div className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      🐍
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Python Certificate</h3>
                    <p className="text-sm opacity-90 mb-3">Programming Certification</p>
                    <div className="flex items-center justify-center space-x-2 text-xs opacity-75">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                      <span>PDF Document</span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-20 rounded-full p-3 backdrop-blur-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
