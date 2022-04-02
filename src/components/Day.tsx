import { AddComment, MoreTimeOutlined } from '@mui/icons-material'
import { Box, IconButton, Switch, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TimeSpanProps from '../types/TimeSpan'
import TimeSpan from './TimeSpan'

type DayProps = {
  name: string,
  timeSpans: TimeSpanProps[],
  isOwner: boolean,
  setShowAddQuestionDialog: (value: boolean) => void,
  setShowAddTimespanDialog: (value: boolean) => void,
  setAddTimespanWeekday: (value: string) => void,
  deleteTimespan: (id: string, weekDay: string) => void
}

export default function Day({ name, timeSpans, isOwner, setShowAddTimespanDialog, setShowAddQuestionDialog, setAddTimespanWeekday, deleteTimespan }: DayProps) {
  const [active, setActive] = useState(true)
  const [showOptions, setShowOptions] = useState(false)

  const handleAddTimespanClick = () => {
    setAddTimespanWeekday(name)
    setShowAddTimespanDialog(true)
  };

  useEffect(() => {
    if (name === 'Thursday') console.log(timeSpans)
  }, [timeSpans])

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

          {timeSpans.map(timeSpan => <TimeSpan {...timeSpan} active={active} dayName={name} key={timeSpan.id} isOwner={isOwner} deleteTimespan={deleteTimespan} />)}
        </Box>
        <Box sx={{ display: showOptions ? 'block' : 'none', position: 'absolute', right: '-48px' }}>
          {
            isOwner ?
              <IconButton size="small" sx={{ mx: 1 }} onClick={handleAddTimespanClick} color="primary">
                <MoreTimeOutlined />
              </IconButton>
              :
              <IconButton size="small" sx={{ mx: 1 }} onClick={() => setShowAddQuestionDialog(true)} color="primary">
                <AddComment />
              </IconButton>
          }
        </Box>
      </Box>
    </div>
  </>
}