import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}} 
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center items-center mx-auto">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://cdn.sanity.io/images/6tgfss93/production/2f612d680e7a5bb50c61a3e3280783ea0cf492d1-2143x3000.jpg"
        className="mt-24 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-#F7ABOA/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Hey, I'm Miracle! 🎓 On track to graduate from Texas Tech in December
          2024 with a BBA in Information Technology, majoring in dual tracks of
          Data Analytics and Systems. 📊 GPA: 3.9 💻 Proficient in Python, SQL,
          JavaScript, and Web developing, with a strong analytical acumen
          underpinned by my major in Data Analytics. 🛠️ I've honed my skills as
          a Machine Learning Intern at X-FAB and a Student Technician at Texas
          Tech's College of Media and Communication.
        </p>
      </div>
    </motion.div>
  );
}
