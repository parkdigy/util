/********************************************************************************************************************
 * 날짜를 분해하여 반환
 * - date, year, month, day, weekDay, hour, minute, second, millisecond
 * @param dt 날짜
 * @returns 분해된 날짜
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function extractDate(dt?: Date | Dayjs): {
  date: Date;
  year: number;
  month: number;
  day: number;
  weekDay: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
} {
  const date = dt ? dayjs(dt) : dayjs();

  return {
    date: date.toDate(),
    year: date.year(),
    month: date.month() + 1,
    day: date.date(),
    weekDay: date.day(),
    hour: date.hour(),
    minute: date.minute(),
    second: date.second(),
    millisecond: date.millisecond(),
  };
}

export default extractDate;
