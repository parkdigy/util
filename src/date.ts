import { now, nowJs, nowTime, beginTime, endTime, formatDate, extractDate, weekDayText } from './methods';

export const date = {
  now,
  nowJs,
  nowTime,
  beginTime,
  endTime,
  format: formatDate,
  extract: extractDate,
  weekDayText,
};

export default date;
