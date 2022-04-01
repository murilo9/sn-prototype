import { Add, AddCircle, AddComment, Details, Message, MoreTime, MoreTimeOutlined, MoreVert } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'
import TimeSpanProps from '../types/TimeSpan'
import './Day.css'
import TimeSpan from './TimeSpan'

type DayProps = {
  name: string,
  timeSpans: TimeSpanProps[],
  isOwner: boolean,
  showAddTimespanDialog: boolean,
  setShowAddTimespanDialog: (value: boolean) => void
}

export default function Day({ name, timeSpans, isOwner }: DayProps) {
  const [active, setActive] = useState(true)
  const [showOptions, setShowOptions] = useState(false)

  const handleAddMessageClick = () => {

  };

  const handleAddTimespanClick = () => {

  }

  return <>
    <div onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)} onClick={() => setShowOptions(false)}>
      <Box sx={{ position: 'relative', height: '32px', display: 'flex', alignItems: 'center' }}>
        <Switch onChange={() => setActive(!active)} defaultChecked size='small' />
        <Typography variant='body2' sx={{ width: '48px', px: 2, display: 'inline-block', textAlign: 'center' }}>
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
          <Box sx={{ borderLeft: '1px solid rgba(128,128,128,0.1)', borderRight: '1px solid rgba(128,128,128,0.1)', display: 'inline-block', boxSizing: 'border-box', width: '33.33%', height: '100%' }}></Box>

          {timeSpans.map(timeSpan => <TimeSpan {...timeSpan} active={active} dayName={name} />)}
        </Box>
        <Box sx={{ display: showOptions ? 'block' : 'none', position: 'absolute', right: '-48px' }}>
          {
            isOwner ?
              <IconButton size="small" sx={{ mx: 1 }} onClick={handleAddTimespanClick} color="primary">
                <MoreTimeOutlined />
              </IconButton>
              :
              <IconButton size="small" sx={{ mx: 1 }} onClick={handleAddMessageClick} color="primary">
                <AddComment />
              </IconButton>
          }
        </Box>
      </Box>
    </div>
  </>
}