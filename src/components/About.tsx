import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";


export default function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

return (
  <>
    <section id="about-me" ref={aboutRef} className="mb-96">
      <motion.div
        className="text-customGrey pt-10"
        initial={{ opacity: 0, y: 300 }}
        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div className="text-2xl sm:text-3xl md:text-4xl text-end font-bold mb-10 md:mb-20 mr-10 md:mr-40 font-orbitron">
          <h2>About Me</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center border-4 border-solid border-customBlue p-5 md:p-40">
          <div className="md:mr-10 mb-5 md:mb-0">
            <img
              src="/images/63313798.png"
              className="rounded-full max-w-xs md:max-w-md"
            />
          </div>
          <div className="flex flex-col text-sm sm:text-base md:text-xl ml-5 md:ml-20 font-orbitron leading-relaxed tracking-wider font-medium">
            <p>
              Hi, I&#39;m
              <span className="text-customBlue text-lg sm:text-xl md:text-2xl font-bold">
                {" "}
                Andrew Roide
              </span>
              ! Ever since I can remember, I've been fueled by a deep curiosity
              about how and why things work. This curiosity has grown into a
              passion for creating and improving web applications. I&#39;m
              constantly learning and exploring new technologies, driven by the
              excitement of turning ideas into functional, impactful websites.
            </p>
            <br />
          </div>
        </div>
      </motion.div>
    </section>
  </>
);
}
