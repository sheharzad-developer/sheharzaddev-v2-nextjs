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
        </div>
      </section>
    </div>
  );
};

export default Certifications;
