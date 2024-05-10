import React from "react";
import Subteam from "./Subteam";
import { items } from "@/data/subteam";

const Subteams = () => {
  return (
    <div className="pb-12">
      {items.map((item, index) => (
        <Subteam
          key={index}
          text={item.text}
          img={item.img}
          float={item.float}
        />
      ))}
    </div>
  );
};

export default Subteams;
