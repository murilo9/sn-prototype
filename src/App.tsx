import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Day from './components/Day';

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
            hours: 19,
            minutes: 15
          }
        }
      ]
    },
  ]

  return (
    <div className="App">
      <Box sx={{ margin: '0 128px' }}>
        {weekDays.map((weekDay, index) => <>
          {index !== 0 ? <Divider></Divider> : null}
          <Day {...weekDay} />
        </>)}
      </Box>
    </div>
  );
}

export default App;
