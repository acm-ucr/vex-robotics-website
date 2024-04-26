import React from "react";
import Board from "./Board";
import { boards } from "@/data/boards";
const Boards = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center my-20 w-3/4 gap-14">
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
