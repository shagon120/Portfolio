import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/Img1.1.png";
import Img2 from "../assets/img2.1.png";
import Img3 from "../assets/img3.1.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br /> work.
              </h2>
              <p className="max-w-sm mb-16">
                {" "}
                I'm a passionate person with vast background experience In
                Next.js with some analytics Skills.
              </p>
              <button className="btn btn-sm ">View all projects</button>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient top-full flex align-text-top">
                  Employee Safety Test
                </span>
              </div>

              <div className="absolute  left-12 group-hover:bottom-8 transition-all duration-700 z-50">
                <span className=" text-white">
                  Cleaned the data after extracting it then with some functions
                  which i created i managed to make a decision based on the
                  data.
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 "
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Diet Food App</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-2 transition-all duration-700 z-50">
                <span className=" text-white">
                  Using my UX research skills, adept in data analysis. Created
                  wireframes for a dieting app featuring meal tracking and
                  motivational quotes. Implemented user behavior tracking.
                </span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/60 w-full h-full absolute z-40 transition-all duration-300"></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Failed Banks</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-2 transition-all duration-700 z-50">
                <span className=" text-white">
                  With the data i extracted i have managed to use Power Bi to
                  calculate the banks in each state that has failed then i
                  reported back to my Manager
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
