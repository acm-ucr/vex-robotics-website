import React from "react";
import Media from "./Media";
import { medias } from "@/data/medias";

const Medias = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center items-center w-1/2 gap-14">
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
