"use client";
import Event from "./Event";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const animation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Events = ({ button = true }) => {
  const [events, setEvents] = useState(null);

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
    <div className="flex flex-col itmems-center justify-center w-full my-3">
      <motion.div
        variants={animation}
        transition={{ delay: 0.2 }}
        initial="hidden"
        whileInView="show"
      ></motion.div>
      <motion.div
        className="space-y-24 mt-32 mb-8 justify-center items-center flex flex-col"
        variants={animation}
        transition={{ delay: 0.4 }}
        initial="hidden"
        whileInView="show"
      >
        {events !== null && events.length > 0 ? (
          events
            .sort((a, b) => a.start - b.start)
            .filter((event) => event.start > new Date())
            .slice(0, 4)
            .map((event) => {
              let formattedString = "";
              if (event.allDay) {
                formattedString = "All Day";
              } else {
                const startHours =
                  event.start.getHours() > 12
                    ? event.start.getHours() - 12
                    : event.start.getHours();
                const startMinutes = event.start
                  .getMinutes()
                  .toString()
                  .padStart(2, "0");
                const startPeriod = event.start.getHours() >= 12 ? "PM" : "AM";

                const endHours =
                  event.end.getHours() > 12
                    ? event.end.getHours() - 12
                    : event.end.getHours();
                const endMinutes = event.end
                  .getMinutes()
                  .toString()
                  .padStart(2, "0");
                const endPeriod = event.end.getHours() >= 12 ? "PM" : "AM";
                formattedString = `${startHours}:${startMinutes} ${startPeriod} - ${endHours}:${endMinutes}
        ${endPeriod}`;
              }

              return (
                <Event
                  key={event.id}
                  month={event.start
                    .toLocaleString("default,", { month: "short" })
                    .toUpperCase()}
                  day={event.start.getDate()}
                  time={formattedString}
                  summary={event.summary}
                  location={event.location}
                  link={event.link}
                  description={event.description}
                />
              );
            })
        ) : (
          <p className="text-lg w-full text-center font-bold text-white mt-5 font-russo">
            no upcoming events
          </p>
        )}
      </motion.div>
      {button && (
        <motion.div
          variants={animation}
          transition={{ delay: 0.4 }}
          initial="hidden"
          whileInView="show"
        ></motion.div>
      )}
    </div>
  );
};

export default Events;
