import { Box, Tooltip } from '@mui/material'
import React from 'react'
import getPercent from '../helpers/getPercent'
import getSecsBetweenTimes from '../helpers/getSecondsBetweenTimes'
import TimeSpanProps from '../types/TimeSpan'
import './TimeSpan.css'

export default function TimeSpan({ start, end }: TimeSpanProps) {

  const startSecs = getSecsBetweenTimes(0, 0, start.hours, start.minutes)
  const endSecs = getSecsBetweenTimes(start.hours, start.minutes, end.hours, end.minutes)

  return <>
    <Tooltip title="Lorem">
      <Box
        className="time-bar"
        sx={{
          position: 'absolute',
          left: getPercent(startSecs),
          width: getPercent(endSecs),
          height: '16px',
          backgroundColor: '#9de0dd',
          borderRadius: '4px'
        }}>
      </Box>
    </Tooltip>
  </>
}