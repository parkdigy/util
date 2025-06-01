/********************************************************************************************************************
 * 날짜의 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function beginTime(): Date;
export function beginTime<T extends Date | Dayjs>(dt: T): T;
export function beginTime(dt: string, format?: string): Date;
export function beginTime(dt?: Date | Dayjs | string, format?: string) {
  if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
    return dayjs(dt, format).startOf('day').toDate();
  } else {
    return dayjs(dt).startOf('day');
  }
}

export default beginTime;
