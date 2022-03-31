// There are exatcly 86400 seconds in a day =)
const SECS_A_DAY = 64800

export default function getPercent(secs: number): string {
  return (100 * secs / SECS_A_DAY) + '%'
}