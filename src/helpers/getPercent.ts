// There are exatcly 86400 seconds in a day =)
const SECS_A_DAY = 86400

export default function getPercent(secs: number): string {
  return Math.round(100 * secs / SECS_A_DAY) + '%'
}