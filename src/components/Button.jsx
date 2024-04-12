import React from "react";
import Link from "next/link";

const Button = ({ link, text, color }) => {
  return (
    <Link
      href={link}
      className={`${color} text-white font-Righteous py-2 px-4 rounded`}
    >
      {text}
    </Link>
  );
};

export default Button;
