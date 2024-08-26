import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <section id="contact-me" ref={contactRef} className="mb-10">
        <motion.div
          className="text-customGrey pt-10"
          initial={{ opacity: 0, y: 300 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="text-2xl sm:text-3xl md:text-4xl text-end font-bold mb-10 md:mb-20 mr-10 md:mr-40 font-orbitron">
            <h2>Contact Me</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center border-4 border-solid border-customBlue p-5 md:p-40">
            <div className="flex flex-col text-sm sm:text-base md:text-xl ml-5 md:ml-20 font-orbitron leading-relaxed tracking-wider font-medium">
              <p>
                I'm always open to new opportunities and collaborations. Whether
                you have a job offer, an exciting project idea, or just want to
                chat about the latest in web development, I'd love to hear from
                you! Feel free to reach me at my email address or social links!
              </p>
              <div className="flex items-center justify-center m-10">
                <a
                  href="assets/Andrew-Roide-Resume.pdf"
                  target="_blank"
                >
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <button className="p-3 border-2 border-solid border-customBlue bg-customBlue rounded-3xl transition hover:scale-110">
                      Download Resume
                    </button>
                  </motion.div>
                </a>
              </div>
              <div className="flex items-center justify-center m-4">
                <a href="mailto:andrew.roide@hotmail.com" className="underline">
                  andrew.roide@hotmail.com
                </a>
              </div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex justify-center gap-4 text-customBlue"
              >
                <a
                  href="https://www.linkedin.com/in/andrew-roide/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-10 h-10 transition bg-customGrey rounded-full hover:scale-110">
                    <FaLinkedinIn className="absolute text-xl top-2.5 left-2.5 text-main" />
                  </div>
                </a>
                <a
                  href="https://github.com/andrew-roide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-10 h-10 transition bg-white rounded-full hover:scale-110">
                    <FaGithub className="absolute text-xl top-2.5 left-2.5 text-main" />
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
