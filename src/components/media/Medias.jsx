import React from "react";
import Media from "./Media";
import { medias } from "@/data/medias";

const Medias = () => {
  return (
    <div className="grid grid-cols-2 justify-items-center items-center w-3/4 gap-14">
      {medias.map((item, index) => (
        <Media
          key={index}
          image={item.image}
          date={item.date}
          title={item.title}
          event={item.event}
        />
      ))}
    </div>
  );
};

export default Medias;
