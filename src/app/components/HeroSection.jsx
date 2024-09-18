"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* Static "Hello! I am" with white color */}
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl font-extrabold">
            Hello! I am{" "}
            {/* Animated Name and Title with white color */}
            <TypeAnimation
              sequence={[
                "Mahendra Balal", 2000,  // Display your name for 2 seconds
                "Full Stack Developer", 2000,  // Display title for 2 seconds
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>
          <p className="text-[#dce4ea] text-sm sm:text-base mb-6 lg:text-lg">
            I am a skilled Full Stack Developer with expertise in building responsive, scalable web applications using modern technologies across front-end and back-end. Proficient in JavaScript, React, Node.js, and databases, I excel at delivering end-to-end solutions.
          </p>
          <div>
          <Link
  href="/#contact"
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transition-colors duration-300"
>
  Hire Me
</Link>
     <Link
    href="/cv/cv-for-portfolio.docx"
    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white transition-colors duration-300"
    download
  >
    Download CV
  </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
         <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[500px] relative">
  <Image
    src="/images/mern.webp"
    alt="hero image"
    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    width={400}
    height={450}
  />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
