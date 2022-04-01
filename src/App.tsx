import { Divider, FormControlLabel, Paper, Switch } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Day from './components/Day';
import TimeLabel from './components/TimeLabel';

function App() {
  const [isOwner, setIsOwner] = useState(false)
  const [showAddTimespanDialog, setShowAddTimespanDialog] = useState(false)

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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a rhoncus metus, a fermentum risus. Aenean mollis ex ut neque eleifend dapibus. Cras id finibus odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
      <Box sx={{ px: 2 }}>
        <FormControlLabel control={
          <Switch onChange={() => setIsOwner(!isOwner)} />
        } label={isOwner ? 'My own availiability' : "Someone else's availability"} />

        <Paper sx={{ maxWidth: '768px', margin: '48px auto', py: 2, pl: 2, pr: 6 }}>
          <Box sx={{ marginLeft: '120px', position: 'relative', height: '24px', my: 1 }}>
            <TimeLabel label="6:00" left="-24px" />
            <TimeLabel label="12:00" left="calc(33.33% - 24px)" />
            <TimeLabel label="18:00" left="calc(66.66% - 24px)" />
            <TimeLabel label="00:00" left="calc(100% - 24px)" />
          </Box>
          {weekDays.map((weekDay, index) => <>
            {index !== 0 ? <Divider></Divider> : null}
            <Day {...weekDay} isOwner={isOwner} showAddTimespanDialog={showAddTimespanDialog} setShowAddTimespanDialog={setShowAddTimespanDialog} />
          </>)}

        </Paper>
      </Box>
    </div>
  );
}

export default App;
