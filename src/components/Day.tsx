import { Box, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import TimeSpanProps from '../types/TimeSpan'
import './Day.css'
import TimeSpan from './TimeSpan'

type DayProps = {
  name: string,
  timeSpans: TimeSpanProps[]
}

export default function Day({ name, timeSpans }: DayProps) {
  const [active, setActive] = useState(true)

  return <>
    <Box sx={{ backgroundColor: '#f2fcfc', position: 'relative', height: '32px', display: 'flex', alignItems: 'center' }}>
      <Switch onChange={() => setActive(!active)} defaultChecked size='small' />
      <Typography variant='overline' sx={{ width: '48px', px: 2, display: 'inline-block', textAlign: 'center' }}>
        {name.substring(0, 3).toUpperCase()}
      </Typography>
      <Box sx={{
        display: 'inline-block',
        width: 'calc(100% - 120px)',
        position: 'relative',
        height: '100%'
      }}>
        <Box sx={{ borderLeft: '1px solid rgba(128,128,128,0.1)', display: 'inline-block', boxSizing: 'border-box', width: '33.33%', height: '100%' }}></Box>
        <Box sx={{ borderLeft: '1px solid rgba(128,128,128,0.1)', display: 'inline-block', boxSizing: 'border-box', width: '33.33%', height: '100%' }}></Box>
        <Box sx={{ borderLeft: '1px solid rgba(128,128,128,0.1)', display: 'inline-block', boxSizing: 'border-box', width: '33.33%', height: '100%' }}></Box>
        {timeSpans.map(timeSpan => <TimeSpan {...timeSpan} active={active} dayName={name} />)}
      </Box>
    </Box>
  </>
}