import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../Data";

export default function Skills() {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <section id="skills" ref={skillsRef} className="mb-96">
        <motion.div
          className="text-customGrey pt-10"
          initial={{ opacity: 0, y: 300 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl text-end font-bold mb-10 md:mb-20 mr-10 md:mr-40 font-orbitron">
            <h2>Skills</h2>
          </div>
          <div className="flex flex-wrap gap-10 items-center justify-center border-4 border-solid border-customBlue p-5 md:p-40">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="relative mb-5 md:mb-0"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 md:w-24 md:h-24"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
