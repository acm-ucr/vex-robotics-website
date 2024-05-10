import React from "react";

//  how to see this on the website?

const SubteamTag = ({ text }) => {
  return (
    <div className="rounded-full bg-purple-500 px-4 py-3 md:text-3xl text-lg font-russo text-vex-white">
      <p> {text} </p>
    </div>
  );
};

export default SubteamTag;
