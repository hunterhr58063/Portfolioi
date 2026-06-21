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
        className="mt-4 text-secondary text-[17px] max-w-full leading-[30px] text-left"

      >

        Welcome to my portfolio! I am a Full Stack Developer with experience building scalable web applications, cloud-native platforms, and distributed systems. I specialize in developing end-to-end solutions ranging from responsive user interfaces to backend microservices and cloud infrastructure.

        <br /><br />

        ● <strong>Frontend Development</strong>: Experienced in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, and <strong>TypeScript</strong>, building modern, responsive, and high-performance web applications with a focus on user experience and maintainability.

        <br />

        ● <strong>Backend Development</strong>: Skilled in <strong>Node.js</strong> and <strong>NestJS</strong>, designing RESTful APIs, microservices, and event-driven architectures that power scalable enterprise applications.

        <br />

        ● <strong>Cloud & DevOps</strong>: Hands-on experience with <strong>Docker</strong>, <strong>Kubernetes</strong>, Linux, and cloud infrastructure automation, deploying and managing containerized applications in production environments.

        <br />

        ● <strong>Distributed Systems</strong>: Worked extensively with <strong>Kafka</strong>, <strong>RabbitMQ</strong>, and microservice-based architectures to build reliable, scalable, and fault-tolerant systems.

        <br />

        ● <strong>Database Technologies</strong>: Proficient in <strong>MongoDB</strong>, <strong>MS SQL Server</strong>, and <strong>MySQL</strong>, focusing on efficient data modeling, query optimization, and performance tuning.

        <br /><br />

        Currently, I contribute to cloud automation and infrastructure solutions at Yotta Data Services, developing features for enterprise cloud platforms while continuously exploring new technologies and best practices. I enjoy solving complex engineering challenges and building software that creates real business value.
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
