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
      timeSpans: []
    },
    {
      name: 'Wednesday',
      timeSpans: []
    },
    {
      name: 'Thursday',
      timeSpans: []
    },
    {
      name: 'Friday',
      timeSpans: []
    },
    {
      name: 'Saturday',
      timeSpans: []
    },
    {
      name: 'Sunday',
      timeSpans: [
        {
          start: {
            hours: 6,
            minutes: 0
          },
          end: {
            hours: 12,
            minutes: 0
          }
        },
        {
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
        {weekDays.map(weekDay => <Day {...weekDay} />)}
      </Box>
    </div>
  );
}

export default App;
