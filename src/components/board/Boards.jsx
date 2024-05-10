import React from "react";
import Board from "./Board";
import { boards } from "@/data/boards";
const Boards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  justify-items-center items-center w-4/5 md:w-3/4 gap-7 md:gap-14">
      {boards.map((item, index) => (
        <Board
          key={index}
          image={item.image}
          name={item.name}
          role={item.role}
          major={item.major}
        />
      ))}
    </div>
  );
};

export default Boards;
