import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function App() {
  const today = new Date();
  const [selectedDay, setSelectedDay] = useState(today);

  const footer = selectedDay ? (
    <p>You selected {selectedDay.toString()}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  return <DayPicker 
            fromYear={2020} 
            toYear={2030} 
            captionLayout="dropdown" 
            mode="single"
            required
            selected={selectedDay}
            onSelect={setSelectedDay}
            footer={footer}
            />;
          }