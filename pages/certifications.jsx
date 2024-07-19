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
      <section class="py-5 sm:py-10 mt-5 sm:mt-10">
        <div className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          <div class="text-center">
            <h1 className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
              Certifications
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 sm:mt-20">
          {[one, two, three, four, five].map((img, index) => (
            <div className="col-span-1 p-5" key={index}>
              <a href={img.src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={img}
                  alt={`certification-${index}`}
                  className="w-full"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certifications;
