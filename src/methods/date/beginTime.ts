/********************************************************************************************************************
 * 날짜의 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function beginTime(): Date;
export function beginTime<T extends Date | Dayjs>(dt: T): T;
export function beginTime(dt?: Date | Dayjs) {
  if (dt === undefined || dt instanceof Date) {
    const newDt = dt ? new Date(dt) : new Date();
    newDt.setHours(0, 0, 0, 0);
    return newDt;
  } else {
    return dayjs(dt).set('hour', 0).set('minutes', 0).set('second', 0).set('millisecond', 0);
  }
}

export default beginTime;
