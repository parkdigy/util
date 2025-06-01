/********************************************************************************************************************
 * 날짜의 시간을 23:59:59 로 변경해서 반환
 * ******************************************************************************************************************/

import dayjs, { Dayjs } from 'dayjs';

export function endTime<T extends Date | Dayjs | undefined>(dt?: T): T extends undefined ? Date : T;
export function endTime(dt: string, format?: string): Date;
export function endTime(dt?: Date | Dayjs | string, format?: string) {
  if (dt === undefined || dt instanceof Date || typeof dt === 'string') {
    return dayjs(dt, format).endOf('day').toDate();
  } else {
    return dayjs(dt).endOf('day');
  }
}

export default endTime;
