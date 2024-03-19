import { now, nowJs, nowTime, beginTime, endTime, formatDate, extractDate } from './methods';

export const date = {
  now,
  nowJs,
  nowTime,
  beginTime,
  endTime,
  format: formatDate,
  extract: extractDate,
};

export default date;
