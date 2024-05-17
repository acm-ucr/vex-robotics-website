import Events from "@/components/calendar/Events";
import Calendar from "@/components/calendar/Calendar";
import Header from "@/components/Header";
const EventsPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-20">
      <Header text="EVENT CALENDAR" />
      <Calendar />
      <Events />
    </div>
  );
};

export default EventsPage;
