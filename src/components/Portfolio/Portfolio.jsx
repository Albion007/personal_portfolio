import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">Some of my projects</span>
            <p style={{marginTop: "10px"}}>Perfect solution for Web and Mobile development</p>
          </div>
          <span className="secondaryText">Explore my GitHub for more!</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src="./valencia.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src="./frizerbledi.png" alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src="./imageresizer.png" alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
