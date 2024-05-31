"use client";
import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvents.jsx";
import CustomHeader from "./CustomHeader.jsx";
import Modal from "./Modal.jsx";
import { motion } from "framer-motion";

const localizer = momentLocalizer(moment);

const CalendarEvent = () => {
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  const animation = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${
            process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
          }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
          ).toISOString()}`
        );

        const offset = new Date().getTimezoneOffset() * 60000;
        const data = await response.json();
        console.log(data);
        if (data.items) {
          const items = data.items.map((item) => {
            item.allDay = !item.start.dateTime;
            (item.start = item.start.dateTime
              ? new Date(item.start.dateTime)
              : new Date(new Date(item.start.date).getTime() + offset)),
              (item.end = new Date(
                item.end.dateTime || new Date(item.end.date).getTime() + offset
              )),
              (item.hidden = false);

            return item;
          });
          setEvents(items);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="md:w-1/2 w-2/3 flex justify-center items-center flex-col mt-[2vh] font-lora bg-vex-white rounded-lg">
      <motion.div
        className="w-full flex justify-center items-center"
        variants={animation}
        transition={{ delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex justify-center h-[70vh] sm:h-60[vh] w-full font-righteous relative text-black font-bold border-0">
          <Calendar
            date={date}
            className="w-full m-0 p-0 text-md md:text-2xl flex justify-center remove-calendar-gridlines overflow-hidden"
            allDayAccessor="allDay"
            showAllEvents={true}
            events={events}
            localizer={localizer}
            defaultView="month"
            views={["month"]}
            components={{
              event: CustomEvent,
              toolbar: CustomToolbar,
              header: CustomHeader,
            }}
            onNavigate={(newDate) => {
              return setDate(newDate);
            }}
            eventPropGetter={() => {
              return {
                className: `p-0 !active:ring-0 !focus:outline-0 !bg-transparent`,
              };
            }}
            onSelectEvent={(event) => setEvent(event)}
            dayPropGetter={(event) => {
              return {
                className: `${
                  new Date(event).toLocaleDateString() ===
                  new Date().toLocaleDateString()
                    ? "!bg-opacity-80 !bg-saf-beige-200"
                    : "!bg-transparent"
                } `,
                style: {
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              };
            }}
          />
        </div>
        {event && <Modal event={event} setEvent={setEvent} />}
      </motion.div>
    </section>
  );
};

export default CalendarEvent;
