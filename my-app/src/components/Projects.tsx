import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../Data";

export default function Projects() {
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <section id="projects" ref={projectRef} className="mb-96">
        <motion.div
          className="text-customGrey pt-10"
          initial={{ opacity: 0, y: 300 }}
          animate={projectInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl text-end font-bold mb-10 md:mb-20 mr-5 sm:mr-10 md:mr-40 font-orbitron">
            <h2>Projects</h2>
          </div>
          <div className="flex flex-col items-center md:flex-row md:flex-wrap border-4 border-solid border-customBlue p-5 sm:p-10">
            <div className="flex flex-col text-sm sm:text-base md:text-xl ml-5 sm:ml-10 md:ml-20 font-orbitron leading-relaxed tracking-wider font-medium">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="mb-10 flex flex-col md:flex-row gap-5 md:gap-10"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                    className="mb-4 max-w-full"
                  />
                  <div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold underline">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-base md:text-lg my-5 md:my-20">
                      {project.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 mt-5 md:mt-40 justify-end">
                      {project.live && (
                        <motion.li
                          className="relative list-none"
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            className="text-customBlue"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        </motion.li>
                      )}
                      <motion.li
                        className="relative list-none"
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <a
                          href={project.code}
                          target="_blank"
                          className="text-customBlue"
                          rel="noopener noreferrer"
                        >
                          Source Code
                        </a>
                      </motion.li>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
