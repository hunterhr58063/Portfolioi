import { motion } from "framer-motion";
import { styles } from "../styles";
import { Terminal } from "./canvas";

const Hero = () => {
  return (<section className="relative w-full min-h-screen mx-auto">
    <div
      className={`${styles.paddingX} max-w-7xl mx-auto pt-28 flex flex-col items-center text-center`}
    >
      {/* Heading */}
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915eff]">Himanshu</span> </h1>

      {/* Subtitle */}
      <p className="mt-4 text-xl md:text-2xl font-medium text-gray-300">
        Full Stack Developer & Cloud Native Engineer
      </p>

      {/* Description */}
      <p className="mt-5 max-w-3xl text-secondary text-[18px] leading-8">
        Building scalable applications with React, Next.js, Node.js,
        NestJS, Kubernetes, Kafka, and RabbitMQ. Passionate about cloud
        automation, microservices, distributed systems, and modern web
        technologies.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          href="#projects"
          className="bg-[#915eff] px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-300"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#915eff] px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#915eff]/10 transition-all duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Terminal */}
      <div className="mt-14 w-full flex justify-center">
        <Terminal />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-12 mt-10">
        <div>
          <h3 className="text-3xl font-bold text-[#915eff]">3+</h3>
          <p className="text-secondary">Years Experience</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#915eff]">15+</h3>
          <p className="text-secondary">Projects Delivered</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#915eff]">Cloud</h3>
          <p className="text-secondary">Native Engineer</p>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="mt-12 w-full flex justify-center items-center pb-10">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary"
          />
        </div>
      </a>
    </div>
  </section>
  );
};

export default Hero;
