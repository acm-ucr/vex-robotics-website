import React from "react";
import Link from "next/link";

const Button = ({ link, text, color = "bg-vex-black" }) => {
  return (
    <Link
      href={link}
      className={`${color} text-white font-righteous py-2 px-4 rounded 
      border-2 border-vex-purple-300 hover:bg-vex-purple-300`}
    >
      {text}
    </Link>
  );
};

export default Button;
