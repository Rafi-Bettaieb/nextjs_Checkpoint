import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src="/images/logo1.png" width={75} height={75} />
        </span>
        <p className="text-slate-200">
          &copy; 2024 My Portfolio Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
