import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className=" w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant} className="w-full">
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary  text-[17px] max-w-full leading-[30px] text-left" // Adjusted max-w to full and set text alignment
      >
        Welcome to my portfolio! I am a Full Stack Developer with a passion for creating dynamic web applications. My expertise lies in leveraging modern technologies to deliver high-performance, user-friendly solutions.
        <br /><br />
        ● <strong>Frontend Development</strong>: Proficient in <strong>Next.js</strong>, <strong>React.js</strong>, <strong>JavaScript</strong>, and <strong>TypeScript</strong>, I focus on building responsive and engaging user interfaces that enhance the overall user experience.
        <br />
        ● <strong>Backend Development</strong>: Skilled in <strong>Node.js</strong> and <strong>Nest.js</strong>, I create robust server-side applications that ensure efficient data processing and seamless integration with front-end components.
        <br />
        ● <strong>Database Management</strong>: Experienced in working with <strong>MS SQL</strong> and <strong>MongoDB</strong>, I design and optimize data models to enhance data retrieval and processing efficiency.
        <br />
        ● <strong>CSS Frameworks</strong>: Utilizing modern CSS frameworks like <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>Material UI</strong>, I craft visually appealing and responsive designs.
        <br /><br />
        I am a quick learner who collaborates closely with clients to develop efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(About, "about");
