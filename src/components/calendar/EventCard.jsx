import React from "react";

const EventCard = ({ EventName, Time, Location }) => {
  return (
    <div className="font-saira bg-vex-white rounded-3xl w-1/3">
      <div className=" p-4 ml-2">
        <div className="font-extrabold italic text-vex-purple-300 text-4xl flex row-cols-2">
          {EventName}
          <div className="flex row-cols-2 gap-1 ml-56">
            <div class="w-4 h-4 bg-vex-purple-100 rounded-full"></div>
            <div class="w-4 h-4 bg-vex-purple-100 rounded-full"></div>
          </div>
        </div>
        <hr className="my-2 bg-vex-grey h-1"></hr>
        <div className="text-2xl flex row-cols-2">
          <p className="font-bold">Time: </p>
          {Time}
        </div>
        <div className="text-2xl flex row-cols-2">
          <p className="font-bold">Location: </p>
          {Location}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
