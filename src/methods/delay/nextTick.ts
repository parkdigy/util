/********************************************************************************************************************
 * 다음 틱에서 콜백을 실행합니다.
 * @param callback - 콜백입니다.
 * @param delay - 지연(milliseconds) 시간입니다. (기본값 : 1)
 * ******************************************************************************************************************/

export function nextTick(callback: () => void, delay?: number): NodeJS.Timeout {
  return setTimeout(callback, delay === undefined ? 1 : delay);
}

export default nextTick;
