/********************************************************************************************************************
 * 날짜의 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function beginTime<T extends Date | Dayjs>(dt?: T): T {
  if (dt instanceof Date) {
    const newDt = dt ? new Date(dt) : new Date();
    newDt.setHours(0, 0, 0, 0);
    return newDt as T;
  } else {
    const newDt = dayjs(dt);
    newDt.set('hour', 0);
    newDt.set('minute', 0);
    newDt.set('second', 0);
    newDt.set('millisecond', 0);
    return newDt as T;
  }
}

export default beginTime;
