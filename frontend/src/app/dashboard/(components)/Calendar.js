import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import EventModal from './EventModal'; // Adjust the import path as necessary

export default function Calendar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { title: 'event 1', date: '2024-08-24', url: 'https://www.google.com/' },
    { title: 'event 2', date: '2024-08-26', url: 'https://www.google.com/' }
  ];



  const handleEventClick = (info) => {
    info.jsEvent.preventDefault(); // Prevent the browser from following the link
    setSelectedEvent(info.event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        eventClick={handleEventClick}
      />
      <EventModal 
            isOpen={modalIsOpen} 
            onClose={closeModal} 
            event={selectedEvent}
            />
     
    </div>
  );
}