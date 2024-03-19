import { now, nowJs, nowTime, beginTime, endTime, formatDate, extractDate, weekdayText } from './methods';

export const date = {
  now,
  nowJs,
  nowTime,
  beginTime,
  endTime,
  format: formatDate,
  extract: extractDate,
  weekdayText,
};

export default date;
