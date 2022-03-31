type TimeSpan = {
  id: string,
  start: {
    hours: number,
    minutes: number
  },
  end: {
    hours: number,
    minutes: number
  },
  description?: string
}

export default TimeSpan