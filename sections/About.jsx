'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaverse Next" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        The metaverse is a virtual world where people interact, socialize, and
        explore using avatars in immersive 3D spaces, blending digital and
        real-life experiences.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
