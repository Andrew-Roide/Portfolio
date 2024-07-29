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
          className="text-customGrey h-screen pt-10 ml-20"
          initial={{ opacity: 0, y: 300 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
        >
          <div className="text-4xl text-end font-bold mb-20 mr-40 font-orbitron">
            <h2>About Me</h2>
          </div>
          <div className="flex items-center flex-wrap justify-center border-4 border-solid border-customBlue p-10">
            <div className="mr-10">
              <img
                src="/images/63313798.png"
                className="m-auto rounded-full max-w-md"
              />
            </div>
            <div className="flex flex-col max-w-3xl text-xl ml-20 font-orbitron leading-relaxed tracking-wider font-medium">
              <p>
                What do you get when you combine the expertise of an individual
                who has been captivated by computers since the age of nine with
                someone with an innate curiosity about the intricacies of how
                and why things operate or work? Well, hi! I&#39;m
                <span className="text-customBlue text-2xl font-bold">
                  {" "}
                  Andrew Roide
                </span>
                !
              </p>
              <br></br>
              <p>
                From my childhood days spent unraveling riddles and solving
                Rubik&#39;s Cubes to tackling various puzzles in the gaming and
                real world, and even building computers and keyboards, these
                seemingly small interests have cumulatively shaped my entire
                life, aligning perfectly with the world of Web Development.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
