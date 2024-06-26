import React from "react";
import reactHtmlParser from "html-react-parser";

const Event = ({
  day = "",
  month = "",
  date = "",
  time = "",
  summary = "",
  location = "",
  description = "",
}) => {
  return (
    <div className="bg-white flex flex-col rounded-xl overflow-hidden md:w-1/2 w-5/6 font-righteous">
      <div className="px-4 py-1 flex items-left text-vex-purple-200 bg-vex-purple-400">
        <p className="text-md md:text-2xl font-semibold mb-1 mt-1">{summary}</p>
      </div>
      <div className="flex flex-col md:flex md:flex-row mt-2 -mb-4 text-vex-black text-left px-4">
        <div className="flex flex-row">
          <div className="md:text-xl font-medium pr-1 md:pr-2">{day}</div>
          <div className="md:text-xl font-medium pr-2">{month}</div>
          <div className="md:text-xl font-medium pr-1">{date}</div>
        </div>
        <div className="md:text-xl font-medium md:ml-8 md:mr-8">{time}</div>
        <div className="md:text-xl font-medium">{location}</div>
      </div>

      <p className="w-full -ml-2 md:ml-3 px-8 py-2 font-medium text-sm md:text-base my-3 text-pretty">
        {reactHtmlParser(description)}
      </p>
    </div>
  );
};

export default Event;
