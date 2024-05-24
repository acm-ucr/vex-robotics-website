import React from "react";
import Image from "next/image";

const Board = ({ image, name, role, major }) => {
  return (
    <div>
      <Image className="size-full" src={image} alt="Board Member" />

      <p className="text-vex-purple-100 text-2xl md:text-4xl font-bold font-saira">
        {name}
      </p>

      <p className="text-vex-grey text-xl md:text-2xl font-medium uppercase font-saira">
        {role}
      </p>

      <p className="text-vex-grey text-lg md:text-xl font-medium italic ">
        {major}
      </p>
    </div>
  );
};

export default Board;
