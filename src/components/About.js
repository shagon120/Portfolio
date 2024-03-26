import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center *:lg:gap-x-20 
        lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[740px]
          mix-blind-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 ml-4 "
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4 ">
              I'm a Front-end Developer With 2 Years of experience while being
              Data Analyst.
            </h3>
            <p className="mb-6 ">
              Suhayb is a self-motivated, intuitive and diligent individual
              seeking to forge a rewarding career in the Computing industry. He
              has deep love for analytics and web design .His hunger for
              knowledge keeps him on the cutting edge, transforming data into
              actionable magic that makes a real impact. by bringing designs
              into life.
            </p>
            <div className="flex float: right; width:50%">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={20} end={2} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px] mb-3">
                  {" "}
                  Years of <br /> Experience
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
