import { Typography } from '@mui/material'
import React from 'react'

type TimeLabelProps = {
  label: string,
  left: string
}

export default function TimeLabel({ label, left }: TimeLabelProps) {
  return <>
    <Typography sx={{
      position: 'absolute', left, top: 0, width: '48px', textAlign: 'center'
    }}>
      {label}
    </Typography>
  </>
}