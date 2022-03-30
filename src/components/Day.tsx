import { Box, Typography } from '@mui/material'
import React from 'react'
import TimeSpanProps from '../types/TimeSpan'
import './Day.css'
import TimeSpan from './TimeSpan'

type DayProps = {
  name: string,
  timeSpans: TimeSpanProps[]
}

export default function Day({ name, timeSpans }: DayProps) {
  return <>
    <Box>
      <Typography variant='overline' sx={{ width: '48px', display: 'inline-block' }}>
        {name.substring(0, 3).toUpperCase()}
      </Typography>
      <Box sx={{
        borderLeft: '1px solid red',
        borderRight: '1px solid red',
        display: 'inline-block',
        width: 'calc(100% - 48px)',
        boxSizing: 'border-box',
        position: 'relative',
        height: '16px',
        cursor: 'pointer'
      }}>
        {timeSpans.map(timeSpan => <TimeSpan {...timeSpan} />)}
      </Box>
    </Box>
  </>
}