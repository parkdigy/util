/********************************************************************************************************************
 * 날짜의 시간을 23:59:59 로 변경해서 반환
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function endTime(): Date;
export declare function endTime<T extends Date | Dayjs>(dt: T): T;
export declare function endTime<T extends Date | Dayjs>(dt: T, millisecond: number): T;
export default endTime;
