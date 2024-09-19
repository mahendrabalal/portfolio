import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/logo-no-background.png"  // Ensure this path is correct and the image exists in the public/images directory
          alt="Website Logo"
          height={50}  // Adjust height as needed
          width={50}   // Adjust width as needed
          priority     // This ensures the image loads faster
        />
        
        {/* Footer Text */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
