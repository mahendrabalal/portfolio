import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Import icons

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/logo-no-background.png"
          alt="Website Logo"
          height={50}
          width={50}
          priority
        />
        
        {/* Footer Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#about" className="text-slate-600 hover:text-white">About</a>
          <a href="#projects" className="text-slate-600 hover:text-white">Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-white">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/mahendra-balal-11356344/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 text-slate-600 hover:text-white" />
          </a>
          <a href="https://github.com/mahendrabalal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="h-6 w-6 text-slate-600 hover:text-white" />
          </a>
          <a href="https://x.com/MahenBalal" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="h-6 w-6 text-slate-600 hover:text-white" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-slate-600 mt-4 md:mt-0">© {new Date().getFullYear()} Mahendra Balal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
