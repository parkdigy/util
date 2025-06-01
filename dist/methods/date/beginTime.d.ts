/********************************************************************************************************************
 * 날짜의 시간을 00:00:00.0 으로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function beginTime(): Date;
export declare function beginTime<T extends Date | Dayjs>(dt: T): T;
export declare function beginTime(dt: string, format?: string): Date;
export default beginTime;
