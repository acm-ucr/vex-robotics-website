import Event from "@/components/events/Event";
import Events from "@/components/events/Events";
import Calendar from "@/components/calendar/Calendar";
import Image from "next/image";
import purpleBar from "@/public/assets/PurpleBar.svg";

const EventsPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-20 gap-10">
      <Calendar />
      <Event />
      <Events />
      <Image alt="bottom pattern" src={purpleBar} className="w-3/4" />
    </div>
  );
};

export default EventsPage;
