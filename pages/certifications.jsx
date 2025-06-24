import React from "react";
import Image from "next/image";
import one from "../public/images/certifications/one.jpg";
import two from "../public/images/certifications/two.jpg";
import three from "../public/images/certifications/three.jpg";
import four from "../public/images/certifications/four.jpg";
import five from "../public/images/certifications/five.jpg";
// PDF files should be referenced as string paths, not imported as modules
// import six from "../public/images/certifications/Python-Certificate.pdf"

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
          className="grid grid-cols-2 gap-6 mt-10 sm:mt-20"
        >
          {[one, two, three, four, five].map((img, index) => (
            <div
              className="col-span-1 p-5"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={300 + index * 150}
              data-aos-duration="700"
            >
              <a href={img.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={img}
                  alt={`certification-${index}`}
                  className="w-full"
                />
              </a>
            </div>
          ))}
          
          {/* Python Certificate PDF */}
          <div
            className="col-span-1 p-5"
            key="python-cert"
            data-aos="fade-left"
            data-aos-delay={300 + 5 * 150}
            data-aos-duration="700"
          >
            <a href="/images/certifications/Python-Certificate.pdf" target="_blank" rel="noopener noreferrer">
              <div className="w-full h-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 flex flex-col items-center justify-center text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
                <div className="text-4xl mb-4">🐍</div>
                <h3 className="text-xl font-bold mb-2 text-center">Python Certificate</h3>
                <p className="text-sm opacity-90 text-center">Click to view PDF</p>
                <div className="mt-4 text-xs opacity-75">📄 PDF Document</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
