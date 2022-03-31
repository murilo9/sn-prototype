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
    <Box sx={{ backgroundColor: '#f2fcfc', }}>
      <Typography variant='overline' sx={{ width: '48px', display: 'inline-block' }}>
        {name.substring(0, 3).toUpperCase()}
      </Typography>
      <Box sx={{
        display: 'inline-block',
        width: 'calc(100% - 48px)',
        boxSizing: 'border-box',
        position: 'relative',
        height: '20px',
        cursor: 'pointer',
        pt: 1
      }}>
        {timeSpans.map(timeSpan => <TimeSpan {...timeSpan} />)}
      </Box>
    </Box>
  </>
}