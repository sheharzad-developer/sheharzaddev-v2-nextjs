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
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20 items-center">
        <h1 className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          Certifications
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 sm:mt-20">
        {[one, two, three, four, five].map((img, index) => (
          <div className="col-span-1 p-5" key={index}>
            <a
              href={img.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={img} alt={`certification-${index}`} className="w-full" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
