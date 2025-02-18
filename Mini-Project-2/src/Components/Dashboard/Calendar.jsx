import React, { useState, useEffect } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
  isBefore,
  parseISO,
} from "date-fns";
import "../../Styles/Dashboard/Calendar.css"

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [eventText, setEventText] = useState("");
    const [eventTime, setEventTime] = useState("");
    

    // Load events from local storage on mount
    useEffect(() => {
      const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
      setEvents(storedEvents);
    }, []);

    // Save events to local storage whenever they change
    useEffect(() => {
      localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    const addEvent = () => {
      if (!eventText.trim() || !eventTime.trim()) return;
      const newEvent = {
        date: format(selectedDate, "yyyy-MM-dd"),
        time: eventTime,
        text: eventText,
      };
      setEvents([...events, newEvent]);
      setSelectedDate(null);
      setEventText("");
      setEventTime("");
    };

    const upcomingEvents = events.filter((event) =>
      isBefore(new Date(), parseISO(event.date))
    );
    const pastEvents = events.filter((event) =>
      isBefore(parseISO(event.date), new Date())
    );

    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(currentDate),
      end: endOfMonth(currentDate),
    });

    return (
    <div className="calendar">
        {/* Calendar Section */}
        <div className="calendar-header">
          <h2>{format(currentDate, "MMMM yyyy")}</h2>
          <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
            ← Prev
          </button>
          <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
            Next →
          </button>

          <div className="calendar-days">
            {daysInMonth.map((day) => (
              <div className="calendar-days"
                key={day}
                onClick={() => setSelectedDate(day)}
              >
                {format(day, "d")}
              </div>
            ))}
          </div>

          {/* Event Form with Time input */}
          {selectedDate && (
            <div
              style={{
                marginTop: "10px",
                padding: "10px",
                border: "1px solid gray",
              }}
            >
              <h4>Add Event for {format(selectedDate, "PPP")}</h4>
              <input
                type="text"
                value={eventText}
                onChange={(e) => setEventText(e.target.value)}
                placeholder="Event description"
              />
              <input type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)}/>
              <button onClick={addEvent}>Add</button>
              <button onClick={() => setSelectedDate(null)}>Cancel</button>
            </div>
          )}
        </div>

        {/* Events Section */}
        <div className="events">
          <h3 >Upcoming Events</h3>
          {upcomingEvents.length === 0 ? (
            <p>No upcoming events</p>
          ) : (
            upcomingEvents.map((event, index) => (
              <div
                key={index}
                style={{ padding: "5px", borderBottom: "1px solid gray" }}
              >
                <strong>{format(new Date(event.date), "PPP")}</strong>:{" "}
                {event.text}
              </div>
            ))
          )}

          <h3>Past Events</h3>
          {pastEvents.length === 0 ? (
            <p>No past events</p>
          ) : (
            pastEvents.map((event, index) => (
              <div
                key={index}
                style={{ padding: "5px", borderBottom: "1px solid gray" }}
              >
                <strong>{format(new Date(event.date), "PPP")}</strong>:{" "}
                {event.text}
              </div>
            ))
          )}
        </div>
    </div>
    );
  };
export default Calendar;
