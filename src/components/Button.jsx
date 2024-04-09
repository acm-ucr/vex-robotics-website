import React from "react";
import Link from "next/link";

const Button = (link, text, color) => {
  return (
    <Link href={link}>
      <button style={{ backgroundColor: color }}>{text}</button>
    </Link>
  );
};

export default Button;
