/********************************************************************************************************************
 * 날짜의 시간을 23:59:59 로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function endTime(): Date;
export function endTime<T extends Date | Dayjs>(dt: T): T;
export function endTime<T extends Date | Dayjs>(dt: T, millisecond: number): T;
export function endTime(dt?: Date | Dayjs, millisecond = 0) {
  if (dt === undefined || dt instanceof Date) {
    const newDt = dt ? new Date(dt) : new Date();
    newDt.setHours(23, 59, 59, millisecond);
    return newDt;
  } else {
    return dayjs(dt).set('hour', 23).set('minutes', 59).set('second', 59).set('millisecond', millisecond);
  }
}

export default endTime;
