"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { useState, useEffect } from "react";

const textArray = [
  { title: "World", color: "rgb(30, 142, 62)" },
  { title: "Land", color: "rgb(26, 115, 232)" },
  { title: "Space", color: "#fff" },
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentText((textTitle) => (textTitle + 1) % textArray.length),
      3500
    );
    return () => clearInterval(interval);
  });

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Choose your
          </motion.h1>
          <div className="flex flex-row items-center">
            <motion.h1
              variants={textVariant(1.1)}
              className={`${styles.heroHeading} mr-4`}
            >
              Next
            </motion.h1>

            <motion.h1
              key={currentText}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              variants={textVariant(1.1)}
              className={styles.heroHeading}
              style={{ color: textArray[currentText].color }} // Set the color dynamically
            >
              {textArray[currentText].title}
            </motion.h1>
          </div>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          ></motion.div>
        </div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:mt-[40px] -mt-[12px] flex justify-center items-center"
        >
          <img
            src="/metaverse-next-icon.png"
            alt="metaverse next icon"
            className="h-[200px] sm:h-[300px] md:h-[350px] object-cover z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
