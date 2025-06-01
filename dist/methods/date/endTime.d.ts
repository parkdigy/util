/********************************************************************************************************************
 * 날짜의 시간을 23:59:59 로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function endTime<T extends Date | Dayjs | undefined>(dt?: T): T extends undefined ? Date : T;
export declare function endTime(dt: string, format?: string): Date;
export default endTime;
