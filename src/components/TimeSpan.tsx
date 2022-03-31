import { Close } from '@mui/icons-material'
import { Box, Button, Card, CardActions, CardContent, Divider, IconButton, Popover, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import formatTime from '../helpers/formatTime'
import getPercent from '../helpers/getPercent'
import getSecsBetweenTimes from '../helpers/getSecondsBetweenTimes'
import TimeSpanProps from '../types/TimeSpan'
import './TimeSpan.css'

export default function TimeSpan({ start, end, id, description }: TimeSpanProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [typingMessage, setTypingMessage] = useState(false)

  const startSecs = getSecsBetweenTimes(6, 0, start.hours, start.minutes)
  const endSecs = getSecsBetweenTimes(start.hours, start.minutes, end.hours, end.minutes)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? `mouse-over-popover-${id}` : undefined;

  const startTime = formatTime(start.hours, start.minutes)
  const endTime = formatTime(end.hours, end.minutes)
  const timeTitle = `${startTime} - ${endTime}`

  return <>
    <Tooltip title={timeTitle}>
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
        <div aria-describedby={popoverId} onClick={event => handleClick(event)} style={{ width: '100%', height: '100%' }}></div>
      </Box>
    </Tooltip>
    <Popover
      id={popoverId}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      sx={{ mt: 1 }}
    >
      <Card sx={{ minWidth: '280px' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>{timeTitle}</Typography>
            <IconButton sx={{ ml: 2 }} onClick={handleClose}>
              <Close fontSize="inherit" />
            </IconButton>
          </Box>
          <Typography fontSize={14} sx={{ mt: 2 }} color="text.secondary">
            {description || <Box sx={{ textAlign: 'center', fontWeight: 'light' }}><i>No description</i></Box>}
          </Typography>
          {
            typingMessage ?
              <TextField sx={{ mt: 3 }} multiline rows={4} fullWidth autoFocus label="Ask something" />
              : null
          }
        </CardContent>
        <Divider></Divider>
        <CardActions>
          {
            typingMessage ?
              <>
                <Button onClick={() => setTypingMessage(false)} color="error">Cancel</Button>
                <Button onClick={() => setTypingMessage(false)}>Send</Button>
              </>
              :
              <Button fullWidth onClick={() => setTypingMessage(true)}>Ask Something</Button>
          }
        </CardActions>
      </Card>
    </Popover>
  </>
}