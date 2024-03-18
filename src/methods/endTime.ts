/********************************************************************************************************************
 * 날짜의 시간을 23:59:59 로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function endTime<T extends Date | Dayjs>(dt?: T, millisecond = 0): T {
  if (dt instanceof Date) {
    const newDt = dt ? new Date(dt) : new Date();
    newDt.setHours(23, 59, 59, millisecond);
    return newDt as T;
  } else {
    const newDt = dayjs(dt);
    newDt.set('hour', 23);
    newDt.set('minute', 59);
    newDt.set('second', 59);
    newDt.set('millisecond', millisecond);
    return newDt as T;
  }
}

export default endTime;
