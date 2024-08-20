import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <section id="about-me" ref={aboutRef}>
        <motion.div
          className="text-customGrey h-[90vh] pt-10"
          initial={{ opacity: 0, y: 300 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl text-end font-bold mb-10 md:mb-20 mr-10 md:mr-40 font-orbitron">
            <h2>Skills</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center border-4 border-solid border-customBlue p-5 md:p-10">

          </div>
        </motion.div>
      </section>
    </>
  );
}
