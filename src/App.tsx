import { Close } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, Dialog, Divider, FormControlLabel, IconButton, Paper, Switch, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import Day from './components/Day';
import TimeLabel from './components/TimeLabel';
import weekDaysMock from './mocks/weekDays';
import TimeSpan from './types/TimeSpan';

function App() {
  const [isOwner, setIsOwner] = useState(false)
  const [showAddTimespanDialog, setShowAddTimespanDialog] = useState(false)
  const [addTimespanWeekday, setAddTimespanWeekday] = useState('')
  const [showAddQuestionDialog, setShowAddQuestionDialog] = useState(false)
  const [fromTime, setFromTime] = useState('12:00')
  const [toTime, setToTime] = useState('14:00')
  const [weekDays, setWeekDays] = useState<{ [key: string]: TimeSpan[] }>({ ...weekDaysMock })

  const [error, setError] = useState('')

  const MINIMUM_TIMESPAN_MINS = 5

  const getNumericTimeValue = (timeString: string) =>
    Number(timeString.split(':')[0] + timeString.split(':')[1])

  const handleAddTimespan = () => {
    const rawFromTimeNumericValue = getNumericTimeValue(fromTime)
    const rawToTimeNumericValue = getNumericTimeValue(toTime)
    if (validateTimespan(rawFromTimeNumericValue, rawToTimeNumericValue)) {
      const timespan = buildTimeSpan()
      const updatedWeekDays = { ...weekDays }
      updatedWeekDays[addTimespanWeekday].push(timespan)
      setWeekDays(updatedWeekDays)
      setShowAddTimespanDialog(false)
    }
  }

  const buildTimeSpan = () => {
    const startHours = Number(fromTime.split(':')[0])
    const startMinutes = Number(fromTime.split(':')[1])
    const endHours = Number(toTime.split(':')[0])
    const endMinutes = Number(toTime.split(':')[1])
    return {
      id: '_' + new Date().getTime(),
      start: {
        hours: startHours,
        minutes: startMinutes
      },
      end: {
        hours: endHours,
        minutes: endMinutes
      }
    }
  }

  const getMinutesString = (minutesNumber: number) => minutesNumber > 9 ? minutesNumber.toString() : '0' + minutesNumber.toString()

  const detectConflictBetweenRanges = (startTime1: number, endTime1: number) => {
    const dayTimeSpans = weekDays[addTimespanWeekday]
    let startTime2: number
    let endTime2: number
    let doesConflict = false
    dayTimeSpans.forEach(timeSpan => {
      startTime2 = Number(timeSpan.start.hours.toString() + getMinutesString(timeSpan.start.minutes))
      endTime2 = Number(timeSpan.end.hours.toString() + getMinutesString(timeSpan.end.minutes))
      if (startTime1 <= endTime2 && endTime1 >= startTime2) {
        console.log('conflict', startTime1, endTime2, endTime1, startTime2)
        doesConflict = true
      }
    })
    return doesConflict
  }

  const validateTimespan = (rawFromTimeNumericValue: number, rawToTimeNumericValue: number) => {
    if (rawFromTimeNumericValue > rawToTimeNumericValue) {
      setError('Please enter a valid time span.')
      return false
    }
    if (rawToTimeNumericValue - rawFromTimeNumericValue < MINIMUM_TIMESPAN_MINS) {
      setError('Time spans must be at least 15 min long.')
      return false
    }
    if (detectConflictBetweenRanges(rawFromTimeNumericValue, rawToTimeNumericValue)) {
      setError('Please input a non-conflicting time span.')
      return false
    }
    if (rawFromTimeNumericValue < 600) {
      setError('Time span must be between 6:00 and 00:00.')
      return false
    }
    setError('')
    return true
  }

  const handleFromTimeChange = (event: any) => {
    const value = event.target.value
    setFromTime(value)
    const rawFromTimeNumericValue = getNumericTimeValue(event.target.value)
    const rawToTimeNumericValue = getNumericTimeValue(toTime)
    validateTimespan(rawFromTimeNumericValue, rawToTimeNumericValue)
  }

  const handleToTimeChange = (event: any) => {
    const value = event.target.value
    setToTime(value)
    const rawFromTimeNumericValue = getNumericTimeValue(fromTime)
    const rawToTimeNumericValue = getNumericTimeValue(event.target.value)
    validateTimespan(rawFromTimeNumericValue, rawToTimeNumericValue)
  }

  const deleteTimespan = (id: string, weekDay: string) => {
    const updatedWeekDays = { ...weekDays }
    const index = updatedWeekDays[weekDay].findIndex(timespan => timespan.id === id)
    if (index >= 0) {
      updatedWeekDays[weekDay].splice(index, 1)
      setWeekDays(updatedWeekDays)
    }
  }

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
          {
            Object.keys(weekDays).map((key, index) => {
              return <>
                {index !== 0 ? <Divider></Divider> : null}
                <Day
                  name={key}
                  timeSpans={weekDays[key]}
                  isOwner={isOwner}
                  setShowAddQuestionDialog={setShowAddQuestionDialog}
                  setShowAddTimespanDialog={setShowAddTimespanDialog}
                  setAddTimespanWeekday={setAddTimespanWeekday}
                  deleteTimespan={deleteTimespan}
                  key={key}
                />
              </>
            }
            )
          }
        </Paper>
      </Box>

      <Dialog onClose={() => setShowAddQuestionDialog(false)} open={showAddQuestionDialog}>
        <Card sx={{ width: '340px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Box>
                <Typography variant='h6'>
                  Wednesday
                </Typography>
                <Typography variant='caption'>
                  Someone Else
                </Typography>
              </Box>
              <IconButton>
                <Close />
              </IconButton>
            </Box>
            <TextField multiline rows={4} fullWidth label="Ask something about the day" autoFocus sx={{ mt: 2 }} />
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button color="error" onClick={() => setShowAddQuestionDialog(false)}>Cancel</Button>
            <Button onClick={() => setShowAddQuestionDialog(false)}>Ask</Button>
          </CardActions>
        </Card>
      </Dialog>

      <Dialog onClose={() => setShowAddTimespanDialog(false)} open={showAddTimespanDialog}>
        <Card sx={{ minWidth: '340px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
              <Box>
                <Typography variant='h6'>
                  Add time span
                </Typography>
                <Typography variant='caption'>
                  {addTimespanWeekday}
                </Typography>
              </Box>
              <IconButton onClick={() => setShowAddTimespanDialog(false)}>
                <Close />
              </IconButton>
            </Box>
            <TextField
              id="time-from"
              label="From"
              type="time"
              defaultValue="12:00"
              onChange={handleFromTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150 }}
            />
            <TextField
              id="time-to"
              label="To"
              type="time"
              defaultValue="14:00"
              onChange={handleToTimeChange}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: 150, ml: 2 }}
            />
            <Typography variant="caption" color="error" sx={{ mt: 1, display: 'block' }}>{error}</Typography>
            <Box>
              <TextField id="add-time-description" multiline fullWidth rows={4} label="Add a description (optional)" autoFocus sx={{ mt: 2 }} />
            </Box>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button color="error" onClick={() => setShowAddTimespanDialog(false)}>Cancel</Button>
            <Button onClick={handleAddTimespan}>Add</Button>
          </CardActions>
        </Card>
      </Dialog>
    </div >
  );
}

export default App;
