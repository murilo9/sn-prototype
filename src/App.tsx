import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Day from './components/Day';
import TimeLabel from './components/TimeLabel';

function App() {
  const weekDays = [
    {
      name: 'Monday',
      timeSpans: []
    },
    {
      name: 'Tuesday',
      timeSpans: [
        {
          id: '0',
          start: {
            hours: 11,
            minutes: 0
          },
          end: {
            hours: 14,
            minutes: 30
          }
        },
      ]
    },
    {
      name: 'Wednesday',
      timeSpans: [
        {
          id: '1',
          start: {
            hours: 7,
            minutes: 30
          },
          end: {
            hours: 8,
            minutes: 30
          },
          description: "This time I'll be off."
        },
        {
          id: '2',
          start: {
            hours: 9,
            minutes: 0
          },
          end: {
            hours: 11,
            minutes: 0
          },
          description: "Not granting I'm going to be available this time."
        },
      ]
    },
    {
      name: 'Thursday',
      timeSpans: []
    },
    {
      name: 'Friday',
      timeSpans: [
        {
          id: '3',
          start: {
            hours: 9,
            minutes: 45
          },
          end: {
            hours: 11,
            minutes: 0
          }
        },
      ]
    },
    {
      name: 'Saturday',
      timeSpans: []
    },
    {
      name: 'Sunday',
      timeSpans: [
        {
          id: '4',
          start: {
            hours: 6,
            minutes: 0
          },
          end: {
            hours: 12,
            minutes: 0
          },
          description: "This is a time span description."
        },
        {
          id: '5',
          start: {
            hours: 18,
            minutes: 0
          },
          end: {
            hours: 23,
            minutes: 59
          }
        }
      ]
    },
  ]

  return (
    <div className="App">
      <Box sx={{ margin: '0 128px' }}>
        <Box sx={{ marginLeft: '80px', position: 'relative', height: '24px', my: 1 }}>
          <TimeLabel label="6:00" left="0" />
          <TimeLabel label="12:00" left="calc(33.33% - 24px)" />
          <TimeLabel label="18:00" left="calc(66.66% - 24px)" />
          <TimeLabel label="00:00" left="calc(100% - 48px)" />
        </Box>
        {weekDays.map((weekDay, index) => <>
          {index !== 0 ? <Divider></Divider> : null}
          <Day {...weekDay} />
        </>)}

      </Box>
    </div>
  );
}

export default App;
