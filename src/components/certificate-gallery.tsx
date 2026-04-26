"use client";
import { useState } from "react";
import Certificate1 from "@/../public/certificate.jpg";
import Certificate2 from "@/../public/certificate.jpg";
import Certificate3 from "@/../public/app2-exam.png";

const items = [Certificate1.src, Certificate2.src, Certificate3.src];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex flex-col space-y-4">
      <img
        className="rounded-2xl object-cover h-[500px] w-full"
        src={items[currentIndex]}
      />
      <div className="w-full grid grid-cols-4 gap-3">
        {items.map((img, index) => (
          <div
            key={index}
            className={`${
              currentIndex === index ? "border-brand-orange " : " "
            } border-2 aspect-square rounded-2xl overflow-hidden`}
            onClick={() => setCurrentIndex(index)}
          >
            <img src={img} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
