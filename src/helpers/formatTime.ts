export default function formatTime(hours: number, minutes: number) {
  return `${hours < 9 ? '0' + hours : hours}:${minutes < 9 ? '0' + minutes : minutes}`
}