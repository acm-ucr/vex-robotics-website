import React from "react";
import Image from "next/image";

const Board = ({ image, name, role, major }) => {
  return (
    <div className="font-saira">
      <Image className="size-full" src={image} alt="Board Member" />
      <p className="text-vex-purple-100 text-4xl font-bold">{name} </p>
      <p className="text-vex-grey text-2xl font-medium uppercase">{role}</p>
      <p className="text-vex-grey text-xl font-medium italic">{major}</p>
    </div>
  );
};

export default Board;
