import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span style={{ fontSize: 30 }}>
            Whether it's a project, a dream, or a new endeavor, <br/> let's bring it to life in a way that exceeds your expectations. 
          </span>
          <span className="primaryText">
            Start by <a href="mailto:albionmorina@gmail.com">contacting me!</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p><li>Prishtinë</li></p><br/>
            <p><li>Kosova</li></p><br/>
            <p><li>+38343734849</li></p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
