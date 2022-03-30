// Pretending timeA < timeB
export default function getSecsBetweenTimes(hoursA: number, minutesA: number, hoursB: number, minutesB: number) {
  const timeA = new Date()
  timeA.setHours(hoursA, minutesA, 0, 0)
  const timeB = new Date()
  timeB.setHours(hoursB, minutesB, 0, 0)
  return (timeB.getTime() - timeA.getTime()) / 1000
}