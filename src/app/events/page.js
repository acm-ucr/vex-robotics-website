import Events from "@/components/calendar/Events";
import Calendar from "@/components/calendar/Calendar";
const EventsPage = () => {
  return <div className="flex flex-col w-full justify-center items-center py-20">
    <Calendar/>
    <Events />

  </div>;
};

export default EventsPage;
