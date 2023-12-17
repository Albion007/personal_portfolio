import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import resume from './Albion Morina CV.pdf';

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hi,everyone!
            <br />
            I'm Albion Morina.
          </motion.span>
          <motion.span className="secondaryText" variants={fadeIn("left", "tween", 0.4, 1)}>
            Software Developer and IT Support
            <br></br>
            <a href={resume} download className={css.resume}>RESUME</a>
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./1.png" alt="" />
        </motion.div>

        <br></br>
        
        <a className={css.email} href="mailto:albionmorina44@gmail.com" target="_blank" rel="noopener noreferrer">
          GMail
        </a>
        <br></br>
        <a className={css.github} href="https://github.com/Albion007" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br></br>
        <a className={css.linkedin} href="https://www.linkedin.com/in/albion-morina-aa3911212/" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">2+</div>
            <div className="secondaryText">
              <div>years</div>
              <div>experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <span>Software Design</span>
            <span>Social Media and Web Technologies</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
