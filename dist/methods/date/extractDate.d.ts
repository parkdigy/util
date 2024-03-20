/********************************************************************************************************************
 * 날짜를 분해하여 반환
 * - date, year, month, day, weekDay, hour, minute, second, millisecond
 * @param dt 날짜
 * @returns 분해된 날짜
 * ******************************************************************************************************************/
import { Dayjs } from 'dayjs';
export declare function extractDate(dt?: Date | Dayjs): {
    date: Date;
    year: number;
    month: number;
    day: number;
    weekDay: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
};
export default extractDate;
