import { useState } from "react";
import { motion } from "framer-motion";

import city1 from "./images/SpaceCity.jpg";
import city2 from "./images/SpaceCity1.jpg";
import city3 from "./images/city3.png";
import planet1 from "./images/planet1.png";
import planet2 from "./images/planet2.png";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5,
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5,
      );

      return updatedIndexes;
    });
  };

  //   const images = [city1, city2, city3, planet1, planet2];
  const boxes = [
    { title: "City Alpha", color: "bg-indigo-500" },
    { title: "City Beta", color: "bg-purple-500" },
    { title: "City Gamma", color: "bg-pink-500" },
    { title: "Planet X", color: "bg-emerald-500" },
    { title: "Planet Y", color: "bg-cyan-500" },
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  //   const imageVariants = {
  //     center: { x: "0%", scale: 1, zIndex: 5 },
  //     left1: { x: "-50%", scale: 0.7, zIndex: 3 },
  //     left: { x: "-90%", scale: 0.5, zIndex: 2 },
  //     right: { x: "90%", scale: 0.5, zIndex: 1 },
  //     right1: { x: "50%", scale: 0.7, zIndex: 3 },
  //   };
  const boxVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    // <div className="flex items-center flex-col justify-center bg-black h-screen">
    //   {images.map((image, index) => (
    //     <motion.img
    //       key={index}
    //       src={image}
    //       alt={image}
    //       className="rounded-[12px]"
    //       initial="center"
    //       animate={positions[positionIndexes[index]]}
    //       variants={imageVariants}
    //       transition={{ duration: 0.5 }}
    //       style={{ width: "40%", position: "absolute" }}
    //     />
    //   ))}
    //   <div className="flex flex-row gap-3">
    //     <button
    //       className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
    //       onClick={handleBack}
    //     >
    //       Back
    //     </button>
    //     <button
    //       className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
    //       onClick={handleNext}
    //     >
    //       Next
    //     </button>
    //   </div>
    // </div>
    <div className="flex items-center flex-col justify-center bg-black h-screen overflow-hidden">
      {boxes.map((box, index) => (
        <motion.div
          key={index}
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={boxVariants}
          transition={{ duration: 0.5 }}
          className={`
            ${box.color}
            rounded-xl
            flex items-center justify-center
            text-white text-2xl font-bold
            shadow-xl
          `}
          style={{
            width: "40%",
            aspectRatio: "16/12",
            position: "absolute",
          }}
        >
          {box.title}
        </motion.div>
      ))}

      <div className="flex gap-3 mt-[400px]">
        <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-white bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
